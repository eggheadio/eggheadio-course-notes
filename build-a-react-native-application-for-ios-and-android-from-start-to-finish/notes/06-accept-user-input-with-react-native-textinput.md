# Accept User Input with React Native TextInput

**[📹 Video](https://egghead.io/lessons/react-native-accept-user-input-with-react-native-textinput)**

## Text input

The `<TextInput />` component can be used anytime we want the user to input data. It is similar to a HTML `<input />`, but does not come with any default styling. May need to add a border or background color to distinguish where it is.

The `onChangeText` prop can be used to run a function when the user changes the text in a `<TextInput />`. This is similar to the `onChange` prop in React, however, the argument passed to `onTextChange` is the value itself. Much more convenient than digging down from the event.

```
<TextInput
  value={this.state.username}
  onChange={value => this.setState({ username: value })}
/>
```

## No shorthand properties

In CSS there are a few convenient shorthand properties for styling a collection of related things - such as `border: 1px dotted green;` or `padding: 1rem 2rem;`. **Unfortunately, these shorthands do not exist in React Native as all properties must be single values.** Border properties must be specified as separate rules.

```jsx
borderWidth: 1,
borderStyle: 'dotted',
borderColor: green,
```

For `padding` and `margin` a single value can be used to specify the same value for all sides.

```jsx
margin: 16,
padding: 8,
```

Additionally, convenience methods exist for specifying a single value for `top and bottom` or `left and right`.

```jsx
paddingHorizontal: 16, // padding left and right
marginVertical: 32, // margin top and bottom
```

Each side can also be set with separate values.

```jsx
paddingTop: 24,
paddingBottom: 16,
marginLeft: 4,
marginRight: 8,
```

## New component
🤔[`<TextInput />`](https://reactnative.dev/docs/textinput) - used for collecting user input.

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-style-components-in-a-react-native-app-with-stylesheet)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-write-to-the-console-log-in-a-react-native-app)
