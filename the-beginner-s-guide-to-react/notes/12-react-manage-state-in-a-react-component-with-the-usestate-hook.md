# 12. Manage state in a React Component with the useState hook

#### [📹 Video](https://egghead.io/lessons/react-v2-12-manage-state-in-a-react-component-with-the-usestate-hook?pl=a-beginners-guide-to-react-v2-6c4d)

#### [💻 CodeSandbox](https://codesandbox.io/s/github/kentcdodds/beginners-guide-to-react/tree/codesandbox/12-state?from-embed)

## Notes

- An application that responds to user input is valuable, but what do we do with that data the user has given us? This is where the **component state** comes in.

- We need a place to put data that can change in our application, and we need to let React know when that state changes so it can update (or re-render) our app for us.

- In React, the state is associated with components and when the state changes, the component is updated.

- To get access to this state and to update it, we use what is called a **React Hook** which allows us to call into React from within our component and let it know that we need to manage some state.

```html
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <script type="text/babel">
    function Greeting() {
      // useState - Returns a stateful value, and a function to update it.
      // During the initial render, the returned state (state) is the same
      // as the value passed as the first argument (initialState).
      const [name, setName] = React.useState('');
      // The setState function is used to update the state.
      // It accepts a new state value and enqueues a re-render of the component.
      // During subsequent re-renders, the first value returned by useState
      // will always be the most recent state after applying updates.

      const handleChange = event => setName(event.target.value);
      return (
        <div>
          <form>
            {/* htmlFor is the same thing as For attribute in HTML */}
            <label htmlFor="name">Name: </label>
            <input onChange={handleChange} id="name" />
          </form>
          {name ? <strong>Hello {name}</strong> : 'Please type your name'}
        </div>
      );
    }

    ReactDOM.render(<Greeting />, document.getElementById('root'));
  </script>
</body>
```

- In React, states are managed independently from each other. For example:

```js
const [name, setName] = React.useState('');
const [name2, setName2] = React.useState('');

const handleChange = event => setName(event.target.value);
const handleChange2 = event => setName2(event.target.value);
// ...

<form>
  <label htmlFor="name">Name: </label>
  <input onChange={handleChange} id="name" />
</form>;

<form>
  <label htmlFor="name">Name: </label>
  <input onChange={handleChange2} id="name" />
</form>;

// ...
```

- The state can be any type you want – you can `useState` with an array, `useState` an object, a number, a boolean, a string, whatever you need.

## Additional resource

- [Kent's Blog - React Hooks: Array Destructuring Fundamentals](https://kentcdodds.com/blog/react-hooks-array-destructuring-fundamentals)
- [Kent's Blog - 5 Tips to Help You Avoid React Hooks Pitfalls](https://kentcdodds.com/blog/react-hooks-pitfalls)
- [Kent's Blog - React Hooks: Compound Components](https://kentcdodds.com/blog/compound-components-with-react-hooks)
- [React Docs - Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)

<TimeStamp start="0:40" end="0:44">
  
  In react we use [htmlFor](https://reactjs.org/docs/dom-elements.html#htmlfor) instead of `for`
  
</TimeStamp>

<TimeStamp start="1:40" end="1:44">
  
  Unless a rerender is triggered and your function is called, the DOM isn't going to update. 
  
</TimeStamp>

<TimeStamp start="1:50" end="2:00">
  
  [Hooks at a glance](https://reactjs.org/docs/hooks-overview.html)
  
</TimeStamp>

<TimeStamp start="2:35" end="2:43">
  
  Destructure the `useState` hook's array instead of using the index. Your code will be far more readable.
  
</TimeStamp>

<TimeStamp start="3:07" end="3:15">
  
  `useState`'s updater function triggeres a rerendering. Use this with events to easily update your application
  
</TimeStamp>