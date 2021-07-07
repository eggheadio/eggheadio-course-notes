# 04. Use JSX effectively with React

#### [📹 Video](https://egghead.io/lessons/react-v2-04-use-jsx-effectively-with-react?pl=a-beginners-guide-to-react-v2-6c4d)

#### [💻 CodeSandbox](https://codesandbox.io/s/github/kentcdodds/beginners-guide-to-react/tree/codesandbox/04-jsx-tricks?from-embed)

## Notes


<TimeStamp start="0:25" end="0:35">
    
Put JavaScript expressions inside curly braces `{}` to have them be evaluated and their resulting value used in its current position.
  
</TimeStamp>

<TimeStamp start="3:16" end="3:22">
  
Since this is JSX and not HTML, you can use self-closing tags for divs `<div {...props} />`
  
</TimeStamp>

```html
<script type="text/babel">
  const rootElement = document.getElementById('root');
  const children = 'Hello World';
  const className = 'container';
  const props = { children, className };
  // self-closing tags
  const element = <div {...props} />;
  ReactDOM.render(element, rootElement);
</script>
```
<TimeStamp start="3:48" end="3:55">
  
In JSX you can spread an object within an element, `<div {...props} />` to pass properties to the `React.createElement` API
  
</TimeStamp>

```html
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <script type="text/babel">
    const rootElement = document.getElementById('root');
    const children = 'Hello World';
    const className = 'container';
    const props = { children, className };
    // using spread operator
    const element = <div {...props} />;
    ReactDOM.render(element, rootElement);
  </script>
</body>
```

- You can also add or extended props in a declarative and deterministic way.

## Additional resource

- [Understanding the Spread Operator in JavaScript](https://zendev.com/2018/05/09/understanding-spread-operator-in-javascript.html)
- [MDN Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
