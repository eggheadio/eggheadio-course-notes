# 2 - Create a React Form in Gatsby

[Video link](https://egghead.io/lessons/gatsby-create-a-react-form-in-gatsby)

To let people join a room, we will need to create a form. We'll do that with a new component, specifically `components/join.js`.

In this component, we will import `React` and `useState` to keep track of the `identity` of the user and their `roomName`.

The component we will create won't take any props but will use the `useState` hook twice and then return the rendered component which initially will be a `<h1>`.

### components/join.js

```jsx
import React, { useState } from "react";

const Join = () => {
  const [identity, setIdentity] = useState("");
  const [roomName, setRoomName] = useState("");

  return (
    <>
      <h1>Start or Join a Video Chat</h1>
    </>
  );
};
```

Next we can add our form element. To use the CSS provided, the className we should set is `start-form`.

### components/join.js

```jsx
const Join = () => {
  const [identity, setIdentity] = useState("");
  const [roomName, setRoomName] = useState("");

  return (
    <>
      <h1>Start or Join a Video Chat</h1>
      <form className="start-form"></form>
    </>
  );
};
```

Within that we will add our first input which will collect the identity. To make this be maximally-accessible we will use the `htmlFor` attribute on the `label` element which will match the `id` on the input.

The value will be the `identity` declared above and the onChange event will be using the `setIdentity` function with the `event.target.value` as the passed parameter.

### components/join.js

```jsx
<>
  <h1>Start or Join a Video Chat</h1>
  <form className="start-form">
    <label htmlFor="identity">
      Display name:
      <input
        type="text"
        id="identity"
        value={identity}
        onChange={event => setIdentity(event.target.value)}
      />
    </label>
  </form>
</>
```

The next element for the `roomName` is exactly the same with different variable names.

### components/join.js

```jsx
<label htmlFor="roomName">
  Which room do you want to join?
  <input
    type="text"
    id="roomName"
    value={roomName}
    onChange={event => setRoomName(event.target.value)}
  />
</label>
```

To finish the form, we will add a button of type submit.

### components/join.js

```jsx
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
    onChange={event => setRoomName(event.target.value)}
  />
</label>
<button type="submit">Join Video Chat</button>
```

We finally need to export our `Join` component and we will have finished here for now. The final file at this point will look like:

### components/join.js

```jsx
import React, { useState } from "react";

const Join = () => {
  const [identity, setIdentity] = useState("");
  const [roomName, setRoomName] = useState("");

  return (
    <>
      <h1>Start of Join a Video Call</h1>
      <form className="start-form">
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
            onChange={event => setRoomName(event.target.value)}
          />
        </label>
        <button type="submit">Join room</button>
      </form>
    </>
  );
};

export default Join;
```

We need to actually put this on our home page. To use it, we will `import Join from './components/join` at the top of `index.js` and then we can swap out our `<h1>`.

### pages/index.js

```jsx
import React from "react";
import Layout from "../components/layout";
import Join from "../components/join";

const Index = () => (
  <Layout>
    <Join />
  </Layout>
);

export default Index;
```

If you've left the Gatsby server running, the page should have automatically updated and you should see this.
![Video call sign in form](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1576277267/transcript-images/gatsby-create-a-react-form-in-gatsby-form.jpg)
The form is there but when you try to use it nothing happens. The next lesson will be concerned with handling the form submission.

## Personal take

Adding a form component, using useState hooks and importing component to page. Not dealing with submission handler yet. This acts as a good refresher if you haven't touched on these things recently. Well-structured components and design patterns that can be used elsewhere.
