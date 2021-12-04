# 10 - Handle Disconnected Participants with React Hooks and the Twilio API

[Video link](https://egghead.io/lessons/gatsby-handle-disconnected-participants-with-react-hooks-and-the-twilio-api)

The last thing to look at is handling disconnection. This is for both the local user leaving and handling what happens when the remote user ends the chat.

To do that, we're going to add another helper function to `use-twilio-video.js`, just below startVideo(), called `leaveRoom`. This will dispatch an action with the type `disconnect`. Let's also expose this function so that it can be used in the app.

### hooks/use-twilio-video.js

```jsx
    room.participants.forEach(handleParticipant);
    room.on('participantConnected', handleParticipant);

    dispatch({ type: 'set-active-room', room});
  };

  const startVideo = () => connectToRoom();
  const leaveRoom = () => dispatch({ type: 'disconnect' });

  return { state, getRoomToken, startVideo, leaveRoom, videoRef };
```

Our reducer doesn't have a case for this type, so let's update that.

When we receive a `disconnect` action there are two things we want to do. We want to check if the room exists and, if it does, use the build in Twilio helper function to disconnect.

This built-in method will disconnect from Twilio entirely and shut down all the things we need to do like local tracks and API connections.

Once we've done that, we're going to return the `DEFAULT_STATE` which will bring our app back to the home page with completely empty state.

### hooks/use-twilio-video.js

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case "join":
      return {
        ...state,
        token: action.token,
        identity: action.identity,
        roomName: action.roomName
      };
    case "set-active-room":
      return { ...state, room: action.room };
    case "disconnect":
      state.room && state.room.disconnect();
      return DEFAULT_STATE;
    default:
      return DEFAULT_STATE;
  }
};
```

Inside the `VideoDisplay` component, we'll get the leaveRoom out of the custom hook, and then we'll add a button which will display if there is a room and have an onClick event of leaveRoom.

Now if we are in a call, this button will appear and clicking it will bring us back to the initial page of the app, turning off the camera and microphone at the same time.

### components/video-display.js

```jsx
return (
  <>
    <h1>Room: "{roomID}"</h1>
    {state.room && (
      <button className="leave-room" onClick={leaveRoom}>
        Leave Room
      </button>
    )}
    <div className="chat" ref={videoRef} />
  </>
);
```

Next, we want to handle what happens when a participant leaves.

We'll head back to our `useTwilioVideo` hook and, specifically to our `handleRemoteParticipant` function. Below the event listener for `trackSubscribed`, let's add a new one for `trackUnsubscribed`.

This will take the current track on which we can use the `.detach()` helper function and with a forEach remove each element.

Next, we'll get the container from DOM using the participant `sid` and then, if it exists, remove it entirely.

### hooks/use-twilio-video.js

```jsx
participant.on('trackSubscribed', addTrack);

participant.on('trackUnsubscribed, track => {
  track.detach().forEach(el => el.remove());

  const container = document.getElementById(id);
  if (container) container.remove();
});
```

We can test this, like in the last video, by having two incognito/private windows open and have them join the same room. The leave button will appear and, when you click, you'll disappear from the other window.

There is a problem though. If a participant closes the tab or window and doesn't leave with the button, the video freezes and hangs around for too long.

This is to stop over-reacting when signal drops or there is an internet blip but isn't helpful for our use case. We want it to react a lot faster to a closign event.

We're going to add a check for whether or not the window has been closed. When a window is closed, it fires an event `beforeunload`. So, we'll use our useEffect hook in `video-display` and we'll add an event listener. When we hear `beforeunload`, call the leaveRoom function.

Now if someone closes the tab or navigates away, this function will be called as if they pressed the leave room button.

### components/video-display.js

```jsx
useEffect(() => {
  if (!state.token) {
    navigate("/", { state: { roomName: roomID } });
  }

  if (!state.room) {
    startVideo();
  }

  window.addEventListener("beforeunload", leaveRoom);
}, [state, roomID, startVideo]);
```

To make sure that we don't add too many event listeners, we're going to return a callback for our useEffect hook.

This gets fired whenever the component gets unmounted. Inside of this, we're going to remove the `beforeunload` event listener we created above.

### components/video-display.js

```jsx
useEffect(() => {
  if (!state.token) {
    navigate("/", { state: { roomName: roomID } });
  }

  if (!state.room) {
    startVideo();
  }

  window.addEventListener("beforeunload", leaveRoom);

  return () => {
    window.removeEventListener("beforeunload", leaveRoom);
  };
}, [state, roomID, startVideo, leaveRoom]);
```

To make sure we avoid the React warning, we need to add the leaveRoom function to the useEffect dependency array. And then we're done!

## Personal Take

This was a good finish and leaves the app in a decent state to be able to expand and move forward on.

I think I've learnt a lot about Gatsby but the Twilio stuff has felt a little bit like a black box with magical helper methods. It was great to have Jason point the right ones out but I'm planning on diving in to the docs to have a look around. Twilio is a huge product and even on this project we've only scraped a tiny bit of it.
