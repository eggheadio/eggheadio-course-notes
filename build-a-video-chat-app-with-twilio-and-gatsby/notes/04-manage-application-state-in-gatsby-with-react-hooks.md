# 04 - Manage Application State in Gatsby with React Hooks

[Video link](https://egghead.io/lessons/gatsby-manage-application-state-in-gatsby-with-react-hooks)

To manage the state across different components we are going to use React context. To do that we're going to use a singe file context management pattern using React hooks.
We'll add a new file `hooks/use-twilio-video.js` in our `src` directory and pull in a number of things from React.
We'll need React, createContext (to create context), useContext (to access the values) and useReducer (to manage the components). We get all of these from the `react` package itself.

### hooks/use-twilio-video.js

```jsx
import React, { createContext, useContext, useReducer } from "react";
```

We're going to define what our `DEFAULT_STATE` will be. This will be expanded upon as we go through the app but we'll start with the `identity` and `roomName` and define them as `false` by default.
To actually set the states, we need to create a reducer. It accepts two parameters, the state and an action. By convention, the action object will have a `type` property that we can switch on.

### hooks/use-twilio-video.js

```jsx
import React, { createContext, useContext, useReducer } from "react";

const DEFAULT_STATE = {
  identity: false,
  roomName: false
};

const reducer = (state, action) => {
  switch (action.type) {
  }
};
```

If `action.type` is `join` - that will be a form submission. We'll want to take the current state, spread the contents and update the `identity` and `roomName` based on other properties of the action object.
We'll also define the default for the switch. If we hit this, we will reset the state and return the `DEFAULT_STATE` defined above.

### hooks/use-twilio-video.js

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case "join":
      return { ...state, identity: action.identity, roomName: action.roomName };
    default:
      return DEFAULT_STATE;
  }
};
```

We need a context to store this state in. We'll use the `createContext` to create a new `TwilioVideoContext`.
Then we'll need to provide it to our app with a new `TwilioVideoProvider`. This will accept the children passed to it and the value will be the result of `useReducer()` using the reducer and `DEFAULT_STATE` we've defined already. Inside, we'll pass through the children.

### hooks/use-twilio-video.js

```jsx
const TwilioVideoContext = createContext();

const TwilioVideoProvider = ({ children }) => (
  <TwilioVideoContext.Provider value={useReducer(reducer, DEFAULT_STATE)}>
    {children}
  </TwilioVideoContext.Provider>
);
```

If we wrap our `<Layout>` component with this context provider, we are going to lose the context on every page change as it is mounted and unmounted. To get round this, we are going to use the `wrapRootElement` helper provided by Gatsby, this way we can change pages without losing our context. Writing it here will allow us to use the context in more than one place.

### hooks/use-twilio-video.js

```jsx
export const wrapRootElement = ({ element }) => (
  <TwilioVideoProvider>{element}</TwilioVideoProvider>
);
```

Now, we need to set up our `useTwilioVideo` custom hook. That doesn't need to accept any arguments but will get the state and dispatch from the `TwilioVideoContext`. For now, we'll return the `state` and `dispatch` and export the custom hook as our default.
So, all of that together would look like this.

### hooks/use-twilio-video.js

```jsx
const TwilioVideoContext = createContext();

const TwilioVideoProvider = ({ children }) => (
  <TwilioVideoContext.Provider value={useReducer(reducer, DEFAULT_STATE)}>
    {children}
  </TwilioVideoContext.Provider>
);

export const wrapRootElement = ({ element }) => (
  <TwilioVideoProvider>{element}</TwilioVideoProvider>
);

const useTwilioVideo = () => {
  const [state, dispatch] = useContext(TwilioVideoContext);

  return { state, dispatch };
};

export default useTwilioVideo;
```

We need to make sure that we are actually using this context now. If you've used `now` then `gatsby-browser.js` and `gatsby-ssr.js` will already exist. If not, create them in the root of your project and export the named `wrapRootElement` function from our custom hooks file.

### gatsby-browser.js and gatsby-ssr.js

```jsx
export { wrapRootElement } from "./src/hooks/use-twilio-video";
```

We may need or want different behaviours for the browser and ssr versions of our site, which is why these two files exist. In our case, we don't which is why the contents are identical.
We've done all the set-up, now we need to use the hook we have created. We'll go to our `Join` component and import our hook. Above the statem we will get teh state and dispatch from the `useTwilioVideo` hook and create a new `handleSubmit` function.
The `handleSubmit` function will prevent the defaults and so suppress a page refresh. Then it will dispatch an action of type `join` along with the `identity` and `roomName`.

### components/join.js

```jsx
import useTwilioVideo from '../hooks/use-twilio-video';

const Join = () => {
  const { state, dispatch } = useTwilioVideo();
  const [identity, setIdentity] = useState('');
  const [roomName, setRoomName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: 'join', identity, roomName });
  }
```

To make sure this is working, we can dump a JSON representation of the state onto the page and get the form's `onSubmit` handler to use our `handleSubmit` function.

### components/join.js

```jsx
const Join = () => {
  const { state, dispatch } = useTwilioVideo();
  const [identity, setIdentity] = useState('');
  const [roomName, setRoomName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: 'join', identity, roomName });
  };

  return (
    <>
      <h1>Start or Join a Video Chat</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <form className="state-form" onSubmit={handleSubmit}>
        <label htmlFor="identity">
          Display name:
          <input
            type="text"
            id="identity"
            value={identity}
            onChange={event => setIdentity(event.target.value)}
          />
        </label>
        <label htmlFor="roomName">
          Which room do you want to join?
          <input
            type="text"
            id="roomName"
            value={roomName}
            onChange={e => setRoomName(e.target.value)}
          />
        </label>
        <button type="submit">Join Video Chat</button>
      </form>
    </>
  );
```

Before you can test this, make sure you stop and restart the server. That'll allow the settings in `gatsby-browser.js` and `gatsby-ssr.js` to be picked up.
Now, when you return to the localhost:8000, you'll see the state logged to the page and when you fill the form and submit, these will be tracked properly.
![form successfully updating global state](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1576277267/transcript-images/gatsby-manage-application-state-in-gatsby-with-react-hooks-global-state-tracking.jpg)

## Personal Take

**Summary**: A meaty one - setting up and managing context, context providers and custom hooks. Looks of useful things here that relate to State Machines and managing global state.

I quite enjoyed this. I've been playing around with global state in a couple of different ways and I thought Jason's description and application of the single file approach was clear and convincing.
