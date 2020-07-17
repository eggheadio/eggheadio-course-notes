# 07 - Restrict Access in Gatsby with Protected Routes

[Video link](https://egghead.io/lessons/gatsby-restrict-access-in-gatsby-with-protected-routes)

We'll change the `video-display` component, to only allow access when there is a tken in state. When this isn't present, we will use `navigate` from `Gatsby` to send the user back to the root of the app.
To make for a better user experience, we can send the roomID back as state so that the relevant part of the form can filled in when the user gets there. This way we can share a link with our friends and then when they authenticate the room name will already be present.
We only want this to happen when the state or the roomID are updated, so we will carry this all out in a useEffect hook limited to those.

### components/video-display.js

```jsx
import React, { useEffect } from "react";
import { navigate } from "gatsby";
import useTwilioVideo from "../hooks/use-twilio-video";

const VideoDisplay = ({ roomID }) => {
  const { state } = useTwilioVideo();

  useEffect(() => {
    if (!state.token) {
      navigate("/", { state: { roomName: roomID } });
    }
  }, [state, roomID]);

  return <h1>Room: "{roomID}"</h1>;
};

export default VideoDisplay;
```

`Gatsy` is going to send `location` to `index.js` on the redirect so we can pass that through to the `Join` component as a prop.

### pages/index.js

```jsx
import React from "react";
import Layout from "../components/layout";
import Join from "../components/join";

export default ({ location }) => (
  <Layout>
    <Join location={location} />
  </Layout>
);
```

Now, we'll jump back to our `join.js` file to take advantage of our updates and pass everything through.
The first thing we want to do is to fill in the roomID field if it exists. To do that, we'll drill into the location object and see if it has any state. If it does, we will use that or an empty string to initialise the state for our roomName useState hook.

### components/join.js

```jsx
    const Join = ({ location }) => {
  const defaultRoom = (location && location.state && location.state.roomname) || '';
  const { state, getRoomToken } = useTwilioVideo();
  const [identity, setIdentity] = useState('');
  const [roomName, setRoomName] = useState(defaultRoom);
```

We can check this is working by going to any room before we've authenticated. We should land back at the index with the field filled in.
![default room form field pre-filled](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1576277267/transcript-images/gatsby-restrict-access-in-gatsby-with-protected-routes-default-room.jpg)
If we do fill in the form and submit, we are not directed to the relevant room. To do that, we're going to use a useEffect hook.
If `state.token` and `state.roomName` exist then we will redirect there.

### components/join.js

```jsx
  const Join = ({ location }) => {
  const defaultRoom =
    (location && location.state && location.state.roomname) || '';
  const { state, getRoomToken } = useTwilioVideo();
  const [identity, setIdentity] = useState('');
  const [roomName, setRoomName] = useState(defaultRoom);

  useEffect(() => {
    if (state.token && state.roomName) {
      navigate(`/room/${state.roomname}`);
    };
  }, [state]);
```

Now, if we fill in the form, we will be allowed into the room when we submit because we have a webtoken and we've set up the `navigate` properly.

## Personal take

Summary:: We test to see if the JWT is present and redirect back to index.js if it isn't. If it is, we are allowed in the room.
Question:: We aren't validating the JWT, just that it exists, is this a security issue?
