# Style A List Component

**[📹 Video](https://egghead.io/lessons/graphql-style-a-list-component)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

## Summary

The `style` prop can be used to quickly apply CSS rules to our components. It accepts a json object of `key` `value` pairs, where the `key` is the CSS property, and the `value` is the value of that property. Since this is a json object, all keys must be `camelCase` and values surrounded by quotes.

```js
<span style={{ fontSize: '2rem'}}>Hello</span>
```

## Styling

There are many ways to apply CSS rules to style React components (see [this article](https://medium.com/@dmitrynozhenko/9-ways-to-implement-css-in-react-js-ccea4d543aa3)). 🤔 Without installing additional packages or writing configuration, `create-react-app` supports three styling options:

1. Inline styles or the `style` prop
  ```js
  <span style={{ color: 'red' }}>Red text</span>
  ```

2. Stylesheets
  ```css
  /* src/heading.css */

  .heading {
    font-size: 5rem;
  }
  ```

  ```js
  // src/Heading.js

  import './heading.css'

  function Heading() {
    return <h1 className=".heading">This is big!</h1>
  }
  ```

3. CSS Modules
  ```css
  /* src/Heading.module.css */

  .heading {
    font-size: 5rem;
  }
  ```

  ```js
  // src/Heading.js
  import styles from './Heading.module.css'

  function Heading() {
    return <h1 className={styles.heading}>This is big!</h1>
  }
  ```

## Style Prop

The quickest and most simple way to style a component is by using the `style` prop. This allows us to declare a json object of key value pairs describing our styling rules. This object can be passed directly to the `style` prop, or declared as a variable outside the component.

```js
// inline

function Heading() {
  return (
    <div>
      <h1 style={{ fontSize: '1rem' }}>This text is big</h1>
      <p stlye={{ color: 'red' }}>This text is RED!</p>
    </div>
  )
}
```

```js
// outside component

const headingStyle = {
  fontSize: '1rem'
}

const textStyle = {
  color: 'red'
}

function Heading() {
  return (
    <div>
      <h1 style={headingStyle}>This text is big</h1>
      <p style={textStyle}>This text is RED!</p>
    </div>
  )
}
```

As this is a json object, keys follow the same rules as variable identifiers. This means we cannot declare a key using `kebab-case` (the convention for CSS). We instead need to `camelCase` our keys, which may look a little strange if you often write CSS. Values must be either strings or numbers.

```js
const headingStyle = {
  fontSize: '1rem',
  backgroundColor: 'green',
  paddingTop: '2rem',
}
```

[The React docs](https://reactjs.org/docs/dom-elements.html#style) consider the `style` prop to be for convenience purposes - as well as some specific use cases around dynamically calculated styles. It is advised that `stylesheets`, `CSS Modules` or `CSS-in-JS` be used instead.

## Helpful Links 🤔

[The `style` prop in React](https://reactjs.org/docs/dom-elements.html#style)

[Using `className` to apply a class in React](https://reactjs.org/docs/faq-styling.html)

[React docs - styles and assets](https://create-react-app.dev/docs/adding-a-stylesheet)

[9 Ways To Implement CSS in React JS article](https://medium.com/@dmitrynozhenko/9-ways-to-implement-css-in-react-js-ccea4d543aa3)

[CSS Modules docs](https://github.com/css-modules/css-modules)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/graphql-display-graphql-data-with-a-react-component)
📹 [Go to Next Lesson](https://egghead.io/lessons/graphql-use-a-graphql-mutation-to-create-a-github-issue-comment)
