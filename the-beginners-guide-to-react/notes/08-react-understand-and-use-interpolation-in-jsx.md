# 08. Understand and Use Interpolation in JSX

#### [📹 Video](https://egghead.io/lessons/react-v2-08-understand-and-use-interpolation-in-jsx?pl=a-beginners-guide-to-react-v2-6c4d)

#### [💻 CodeSandbox](https://codesandbox.io/s/github/kentcdodds/beginners-guide-to-react/tree/codesandbox/08-jsx-interpolation?from-embed)

## Notes

- **Template literals** are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

- Let’s write a React component that has some conditional logic in it to explore the interpolation characteristics of JSX syntax:

```html
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <script type="text/babel">
    function CharacterCount({ text }) {
      // this is JavaScript land
      return (
        // inside of the brackets it's React land
        <div>
          {/* this is all JavaScript land  */}
          {`The text "${text}" has `}
          {/* this is a conditional (ternary) operator */}
          {/* This operator is frequently used as a shortcut for the if statement */}
          {text.length ? <strong>{text.length}</strong> : 'No'}
          {' characters'}
        </div>
        // this is JavaScript land
      );
    }

    const element = (
      <>
        <CharacterCount text="Hello World" />
        <CharacterCount text="" />
      </>
    );

    ReactDOM.render(element, document.getElementById('root'));
  </script>
</body>
```

- Inside the curly braces, it's _JavaScript land_, but it's limited to only expressions.
- Interpolation is not unique to React or JavaScript, we also see it in HTML when we use `script` tags or `style` tags.

```html
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <script type="text/babel">
    function CharacterCount({ text }) {
      return (
        <div>
          {/* this is all JavaScript land  */}
          {/* but it's limited to only expressions that evaluate to some value */}
          {/* no loops, switch, or if statements  */}
          {`The text "${text}" has `}
          {text.length ? <strong>{text.length}</strong> : 'No'}
          {' characters'}
        </div>
      );
    }

    const element = (
      <>
        <CharacterCount text="Hello World" />
        <CharacterCount text="" />
      </>
    );

    ReactDOM.render(element, document.getElementById('root'));
  </script>
</body>
```

## Additional resource

- 
- [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [What is JSX? - Kent's Blog](https://kentcdodds.com/blog/what-is-jsx/)

<TimeStamp start="0:45" end="0:50">
  
  [MDN - Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
  
</TimeStamp>

<TimeStamp start="2:50" end="3:15">
  
  You switch back and forth between JSX and JS regularly when writing React. JSX is written within one parent tag that's inside paranthesis. JavaScript expressions can be written inside JSX using curly brackets.
  
</TimeStamp>

<TimeStamp start="3:42" end="3:55">
  
  What JavaScript expressions within JSX compile down to.

  The JSX:
  ```jsx
  function CharacterCount({text}) {
    return (
      <div>
        {`The text "${text}" has `}
        {text.length ? <strong>{text.length}</strong> : 'No'}
        {' characters'}
    )
  }
  ```

  The Compiled JavaScript
  ```js
    function Character Count(_ref) {
      var text = _ref.text;
      return React.createElement("div", null,
      "The text \"".concat(text,"\" has "),
    text.length ? React.createElement("strong", null,
    text.length) : 'No' ' characters')
      ;
    }
  ```
  
</TimeStamp>

<TimeStamp start="5:30" end="5:45">
  
  JSX's interpolation of JavaScript is not unique. You can also interpolate JavaScript within HTML using `<script>` tags!
  
</TimeStamp>
