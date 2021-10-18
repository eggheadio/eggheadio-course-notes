# 08 - Connect Video to a Room with React Hooks in Gatsby

[Video link](https://egghead.io/lessons/gatsby-connect-video-to-a-room-with-react-hooks-in-gatsby)

Now we are able to generate and receive tokens from Twilio, we need to use those to start hooking into video. First, we'll add the `twilio-video` module and import it into our `use-twilio-video.js` file. We'll also import `useRef` which will abe useful later.

### hooks/use-twilio-video.js

    ```jsx

import React, { createContext, useContext, useReducer, useRef } from 'react';
import axios from 'axios';
import { connect } from 'twilio-video';

````
We're going to create and expose a new function in our `useTwilioVideo` called `connectToRoom`. This will be an async function that will make requests to the Twilio API.
The first thing we'll do, is check if there is a token in state. Following the principle of early return, if there is no token we'll just bale.
Given we have the token, we'll create the room by awaiting a call to a connection function to Twilio. We'll pass on the token and an array of options as parameters to this function.
### hooks/use-twilio-video.js
    ```jsx
const connectToRoom = async () => {
  if (!state.token) {
    return;
  }

  const room = await connect(
    state.token,
    {

    }
  );
};
````

In the options array, we will pass the name of the room and parameters for the audio and video. While we are in development, we'll set the `logLevel` to info but this should be removed when the app goes into production.

### hooks/use-twilio-video.js

    ```jsx
    const room = await connect(

state.token,
{
name: state.roomName,
audio: true,
video: { width: 640 },
logLevel: 'info'
}
);```
We'll add in a `catch` function in case this fails.

### hooks/use-twilio-video.js

    ```const room = await connect(

state.token,
{
name: state.roomName,
audio: true,
video: { width: 640 },
logLevel: 'info'
}
).catch(error => {
console.error(`Unable to join the room: ${error.message}`)
});

````
Now that we have a room, we can get the local track which is the video from our computer. The video suggests using a slightly hack-y way- spreading the room.localParticipant.videoTackets.values() into an array to make sure there is one. Then, we'll get the first value which will be our localTrack.
I wasn't able to get that work. Instead, I looked at the code of the completed project and used a helper function from the Twilio API which needs to be imported at the top of the file.
### hooks/use-twilio-video.js
    ```jsx
    const connectToRoom = async () => {
  if (!state.token) {
    return;
  }

  const room = await connect(
    state.token,
    {
      name: state.roomName,
      audio: true,
      video: { width: 640 },
      logLevel: 'info'
    }
  ).catch(error => {
    console.error(`Unable to join the room: ${error.message}`)
  });

  const localTrack = await createLocalVideoTrack().catch(error => {
      console.error(`Unable to create local tracks: ${error.message}`);
  });
};
````

Twilio provides us with an actual <video> element which isn't compatible with React's virtual DOM. We're going to use the ref escape hatch to make it work which is what we imported at the top of the function.
The track itself is a class which, among other things, provides a method called `attach`. We'll need to use a ref to be able to reference and insert it.
At the top of the hook, get a ref from the useRef API.

### hooks/use-twilio-video.js

    ```jsx
    const useTwilioVideo = () => {

const [state, dispatch] = useContext(TwilioVideoContext);
const videoRef = useRef();

````
We only want to add this video if this ref doesn't already have a local video. Without this, any time the component re-renders the function would reattch multiple copies of the same thing. So, we'll first check that the ref has no children and if it doesn't we'll append our child.
### hooks/use-twilio-video.js
```jsx
if (!videoRef.current.hasChildNodes()) {
  const localEl = localTrack.attach();
  videoRef.current.appendChild(localEl);
};
````

To actually call our connectToRoom function, we're going to create a little helper that will let us call it as we need it. We'll call it startVideo and that is going to be a function that just calls connectToRoom. This is what we will pass out to with our hook along with the videoRef so we can connect it to our app.

### hooks/use-twilio-video.js

    ```jsx
      if (!videoRef.current.hasChildNodes()) {
      const localEl = localTrack.attach();
      videoRef.current.appendChild(localEl);
    };

};

const startVideo = () => connectToRoom();

return { state, getRoomToken, startVideo, videoRef };
};

````
We want the room to be tracked in state, so we're going to add a dispatch method to the end of our `connectToRoom` function. That will have an action `set-active-room` that we'll then deal with in our reducer. We will also update our default state to make sure that we do track this.
### hooks/use-twilio-video.js
    ```jsx
const DEFAULT_STATE = {
  identity: false,
  roomName: false,
  token: false,
  room: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'join':
      return {
        ...state,
        token: action.token,
        identity: action.identity,
        roomName: action.roomName
      };
    case 'set-active-room':
      return { ...state, room: action.room };
    default:
      return DEFAULT_STATE;
  };
};
````

### hooks/use-twilio-video.js

    ```jsx
    if (!videoRef.current.hasChildNodes()) {
      const localEl = localTrack.attach();
      videoRef.current.appendChild(localEl);
    };

    dispatch({ type: 'set-active-room', room});

};

const startVideo = () => connectToRoom();

return { state, getRoomToken, startVideo, videoRef };
};

````
Now, we'll head over to the `video-display` component and import startVideo and videoRef from the `useTwilioVideo` hook.
### components/video-display.js
    ```jsx
  const VideoDisplay = ({ roomID }) => {
  const { state, startVideo, videoRef } = useTwilioVideo();

  useEffect(() => {
    if (!state.token) {
      navigate('/', { state: { roomName: roomID } });
    }
  }, [state, roomID]);

  return <h1>Room: "{roomID}"</h1>;
};
````

Inside our useEffect, we'll want to check if state.room does not exist and start the video if it isn't. We also need to tack this to avoid a hooks warning.

### components/video-display.js

    ```jsx

useEffect(() => {
if (!state.token) {
navigate('/', { state: { roomName: roomID } });
}

if(!state.room) {
startVideo();
}
}, [state, roomID, startVideo]);

````
We'll then update our return function to send a fragment along with a div with our videoRef. This way React knows what to update.
### components/video-display.js
```jsx
  const VideoDisplay = ({ roomID }) => {
  const { state, startVideo, videoRef } = useTwilioVideo();

  useEffect(() => {
    if (!state.token) {
      navigate('/', { state: { roomName: roomID } });
    }

    if(!state.room) {
      startVideo();
    }
  }, [state, roomID, startVideo]);

  return <>
    <h1>Room: "{roomID}"</h1>
    <div className="chat" ref={videoRef} />
  </>;
};
````

We can test this by heading out to our app, adding a name and a room,
and joining. It's going to ask us if we can use the camera. Once we
click allow, it inserts our local video. Hello!
![Jason Lengstorf waving hello](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1576277267/transcript-images/gatsby-connect-video-to-a-room-with-react-hooks-in-gatsby-jason-waving-hello.jpg)

## Personal take:

**Summary**: ~~I've had trouble with getting the code in this lesson to work - I'm getting a Twilio API error. Going to try it again and hope for the best.~~ Here, we'll hook into the Twilio API, authenticate with our token and view our local video stream. I had to alter some of the local video track construction to get this to work. When I ran this, I got stuck in a loop with my browser constantly asking me to authorize my camera. I'm hoping that when the rest of it finishes this should fall in line.
