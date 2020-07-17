# 09 - Show Video in Gatsby from Remote Participants with React Hooks

[Video link](https://egghead.io/lessons/gatsby-show-video-in-gatsby-from-remote-participants-with-react-hooks)

We start off by adding a `handleRemoteParticipant` function within the `useTwilioVideo` hook. This function will take the container and the participant as parameters.
Twilio's unique identifier is the `sid`, so we want to get that from the participant object.

### hooks/use-twilio-video.js

```jsx
  const useTwilioVideo = () => {
  const [state, dispatch] = useContext(TwilioVideoContext);
  const videoRef = useRef();

  const getRoomToken = async ({ identity, roomName }) => {
    const result = await axios.post(TWILIO_TOKEN_URL, {
      identity,
      room: roomName
    });

    dispatch({ type: 'join', token: result.data, identity, roomName });
  };

  const handleRemoteParticipant = (container, participant) => {
    const id = participant.sid;
  };
```

Next, we'll create a div element that we can attach using the same mechanism as last time. Remember, this is a ref and not a React component. We'll add the `id` and a class (for styling) to the `div`.
It would also be useful to have the name of the chat partner. That is held in the identity property of the participant object. Let's create an `<h4>`, fill it with the identity and append it to our participant div.

### hooks/use-twilio-video.js

```jsx
const handleRemoteParticipant = container => participant => {
  const id = participant.sid;

  const el = document.createElement("div");
  el.id = id;
  el.className = "remote-participant";

  const name = document.createElement("h4");
  name.innerText = participant.identity;
  el.appendChild(name);
};
```

We currently have a labelled div with no video or audio, so let's attach the div to the dom and get the media.
We accepted the container as a parameter to this function, so we can append our element there.
To add the media tracks we're going to create a helper function called `addTrack`. In here, we will take a track and get the participantDiv by the `sid`. Next, we will grab the media by using the helper `.attach()` function on the track object and append that to the participantDiv.

### hooks/use-twilio-video.js

```jsx
const handleRemoteParticipant = container => participant => {
  const id = participant.sid;

  const el = document.createElement("div");
  el.id = id;
  el.className = "remote-participant";

  const name = document.createElement("h4");
  name.innerText = participant.identity;
  el.appendChild(name);

  container.appendChild(el);

  const addTrack = track => {
    const participantDiv = document.getElementById(id);
    const media = track.attach();

    participantDiv.appendChild(media);
  };
};
```

Now that we have this function, we need to use it! The `participant` object has a `tracks` property that we can iterate over. Confusingly, we don't get a track back, instead we get what Twilio calls a publication. Each publication has a boolean, `isSubscribed` and that lets us know whetther the current track should be in the room. If it is, we can call addTrack and use `publication.track` as our passed value.
That will work for everyone who joins the room before us. We need to add a listener, so that any time a track is subscribed it will be added to our DOM. Twilio's `participant` object lets us do this with an event listener, specifically the event `trackSubscribed`.

### hooks/use-twilio-video.js

```jsx
const handleRemoteParticipant = container => participant => {
  const id = participant.sid;

  const el = document.createElement("div");
  el.id = id;
  el.className = "remote-participant";

  const name = document.createElement("h4");
  name.innerText = participant.identity;
  el.appendChild(name);

  container.appendChild(el);

  const addTrack = track => {
    const participantDiv = document.getElementById(id);
    const media = track.attach();

    participantDiv.appendChild(media);
  };

  participant.tracks.forEach(publication => {
    if (publication.isSubscribed) {
      addTrack(publication.track);
    }
  });

  participant.on("trackSubscribed", addTrack);
};
```

Next, we have to use this functionality. Returning to our `connectToRoom` function, let's add a helpful function called `handleParticipant` below where we add the localTrack. That will get our participant, call our `handleRemoteParticipant` function along with the current videoRef and the participant object.
Now, we'll iterate over each of the participants in the room, passing each to our new helpful function. Finally, for anyone who joins later, we'll add an event listener to the room for the event `participantConnected`.

### hooks/use-twilio-video.js

```jsx
const connectToRoom = async () => {
  if (!token) {
    return;
  }

  const room = await connect(token, {
    name: room,
    audio: true,
    video: { width: 640 },
    logLevel: "info"
  }).catch(error => {
    console.error(`Unable to join the room: ${error.message}`);
  });

  const localTrack = [...room.localParticipant.videoTracks.value()][0].track;

  if (!videoRef.current.hasChildNodes()) {
    const localEl = localTrack.attach();

    videoRef.current.appendChild(localEl);
  }

  const handleParticipant = participant => {
    handleRemoteParticipant(videoRef.current, participant);
  };

  room.participants.forEach(handleParticipant);
  room.on("participantConnected", handleParticipant);

  dispatch({ type: "set-active-room", room });
};
```

Cool! Now, we just need to check that this has worked. We can't join the same room without using two different browsers or private/incognito mode.
So, open two private/incognito windows and navigate to your localhost:8000. In each, join the same room where you'll be prompted to give permission for your webcam and microphone.
If you wave at the camera, the left version of you should be immediate, the right will have a slight lag. This one is being sent to Twilio and back to you - hence the delay and the proof it's working!
![jason joins the chat room locally and "remotely"](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1576277267/transcript-images/gatsby-show-video-in-gatsby-from-remote-participants-with-react-hooks-jason-joins-twice.jpg)

## Personal Take

Summary: Using the Twilio library and the tokens we have generated to hook into the remote participants feed. I've had a bit of a problem with these last videos, I don't know if Twilio have updated their API or if I'm doing something wrong but I'm getting a few errors I need to work through. The Github for this course didn't have branches/tags for each lesson which has made this more challenging as the code in the repo differs from that in the video. The alternative is that I've not configured my Twilio API perfectly - maybe this is more likely! Update: I grabbed the Twilio URL from the Github repo and this does seem to have fixed my problems.
Now that we are grabbing our local video, we need to be able to see and hear our remote participants. This lesson looks at doing that.
