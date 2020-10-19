# Style our Input Component with CSS-inJS

**[📹 Video](https://egghead.io/lessons/egghead-style-our-input-component-with-css-injs)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

## Summary

The `style` prop can be used to quickly style the different elements of our component. The `style` prop accepts a JSON object of key value pairs - the `key` being the property name, and `value` being the value for that property. These styles can be declared inline, in a variable outside our component, or in a separate file. Values can only be strings or numbers. When a number is provided as a value, it is turned into the pixel value - `padding: 8` becomes `padding: '8px'`.

## Styling

We are going to use the `style` prop to style our chat app. The `style` prop accepts a JSON object of key value pairs, representing each style rule to apply.

```js
<span style={{ color: 'red' }}>Hi</span>
```

When a number is specified as the value, it is interpreted as pixels.

```js
<span style={{ marginTop: 16 }}>Hi</span>
```

^^^ is the same as:

```js
<span style={{ marginTop: '16px' }}>Hi</span>
```

`prop` styling can be declared inline or moved into a separate variable.

**inline**
```js
<span style={{ color: 'red' }}>Hi</span>
```

**separate variable**
```js
const textStyles = {
  color: 'red',
  padding: '1rem 2rem'
}

function Text() {
  return <span style={textStyles}>Hi</span>
}
```

👍 Inline styles work great for one or two simple rules, any more than that you probably want to declare them in a separate variable. This helps to reduce the clutter in the rendering logic of your component. As the size of the project and number of components grow, it is a good idea to move these styles into their own separate files, and import them in your component.

```js
// src/styles/Text.js

const textStyles = {
  backgroundColor: 'green',
  color: 'red',
  padding: '2rem',
}

export default textStyles
```

```js
// src/components/Text.js

import textStyles from '../styles/Text'

function Text() {
  return <span style={textStyles}>Hi</span>
}
```

🤔 This pattern is very similar to [CSS Modules](https://github.com/css-modules/css-modules), which are also supported by default with `create-react-app`.

## Helpful Links

[CSS Modules documentation](https://github.com/css-modules/css-modules)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/graphql-use-urqls-usemutation-to-create-github-issues-in-a-react-app)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-extract-a-view-component-from-our-commentquery-component)
