# 06. Create a Simple Reusable React Component

#### [📹 Video](https://egghead.io/lessons/react-v2-06-create-a-simple-reusable-react-component?pl=a-beginners-guide-to-react-v2-6c4d)

#### [💻 CodeSandbox](https://codesandbox.io/s/github/kentcdodds/beginners-guide-to-react/tree/codesandbox/06-custom-component?from-embed)

## Notes

- One of the biggest paradigm shifts that React offered to the UI ecosystem was the component model.
- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

<TimeStamp start="2:10" end="2:15">
  
  [User-defined React components must be capitalized](https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized) since in JSX, lower-case tag names are considered to be HTML tags.
  
</TimeStamp>

<TimeStamp start="4:00" end="4:05">
  
  JSX components are great declaritive shorthand for `react.createElement`
  
</TimeStamp>

<TimeStamp start="4:20" end="4:26">
  
  The content nested inside a component is considered the value for the `children` prop. 
  
</TimeStamp>

```html
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <script type="text/babel">
    // creating a function component, that accepts a props object and returns a React Element
    // it passes JSX attributes and children to this component as a single object “props”
    function Message({ children }) {
      return <div className="message">{children}</div>;
    }

    const element = (
      <div className="container">
        <Message>Hello World</Message>
        <Message>Goodbye World</Message>
      </div>
    );

    ReactDOM.render(element, document.getElementById('root'));
  </script>
</body>
```

- **Rendering** a Component:

```js
//  capitalized to ensure that babel passes the function rather than the string message
const element = (
  <div className="container">
    <Message>Hello World</Message>
    <Message>Goodbye World</Message>
  </div>
);
```

## Additional resource

- [React doc - Components and Props](https://reactjs.org/docs/components-and-props.html)
