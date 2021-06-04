# 03. Create a User Interface with React’s JSX syntax

#### [📹 Video](https://egghead.io/lessons/react-v2-03-create-a-user-interface-with-react-s-jsx-syntax?pl=a-beginners-guide-to-react-v2-6c4d)

#### [💻 CodeSandbox](https://codesandbox.io/s/github/kentcdodds/beginners-guide-to-react/tree/codesandbox/03-jsx?from-embed)

## Notes

<TimeStamp start="0:10" end="0:15">
  
  The React team came up with [JSX](https://reactjs.org/docs/introducing-jsx.html). JSX gives us an expressive syntax for representing our UI, without losing the benefits and powers of writing our UI in JavaScript.

</TimeStamp>
  
- The best way to take advantage of this is to learn how JSX is compiled to regular JavaScript. By default the browser does not compile JSX, it needs [Babel](https://babeljs.io) to compile non-standard features, like JSX.

<TimeStamp start="1:00" end="1:30">
    
  **Tip**: [Spend some time exploring how Babel compiles JSX](https://babeljs.io/repl), this will help you be more effective.
  
</TimeStamp>


![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1591296083/transcript-images/react-create-a-user-interface-with-react-s-jsx-syntax-babel.jpg)

- Use Babel in the browser, by adding a `script` tag to `babel/standalone` and adding a new tag with `type='text/babel'`;

```html
<script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
```

```html
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <script type="text/babel">
    const rootElement = document.getElementById('root');
    const element = <div className="container">Hello World</div>;
    ReactDOM.render(element, rootElement);
  </script>
</body>
```

This will add a new script with our new code compiled by Babel. In a production environment, it's not recommended that you use babel/standalone.

## Additional resource

- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [What is Babel?](https://babeljs.io/docs/en/)
- [Configure babel for React with preset-react](https://egghead.io/lessons/react-configure-babel-for-react-with-preset-react)
