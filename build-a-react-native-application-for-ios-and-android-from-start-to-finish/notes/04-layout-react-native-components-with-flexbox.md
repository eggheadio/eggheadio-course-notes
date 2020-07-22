# Layout React Native Components with Flexbox

**[📹 Video](https://egghead.io/lessons/react-native-layout-react-native-components-with-flexbox)**

## Iterating and displaying collection

Similarly to the web, we can use `.map` to iterate over array-like structures and render components.

```jsx
const foods = [🍔, 🥪, 🍜]
foods.map(food => <Text>{food}</Text>)
```

Can be used for more complex collections too.

```jsx
const foods = [
  {
    name: 'Burger',
    emoji: '🍔'
  },
  {
    name: 'Sandwich',
    emoji: '🥪'
  },
  {
    name: 'Noodles',
    emoji: '🍜'
  }
]

foods.map(({ food, emoji }) => (
  <View>
    <Text>{emoji}: {name}</Text>
  </View>
))
```

## Styling

Styles in React Native are defined as JSON objects of `key: value` pairs. All keys must be camelCase.

```jsx
<View style={{
    backgroundColor: 'red',
    padding: 2
}} />
```

Layout styling rules can apply to any React Native component, however, font styling rules - `fontSize`, `textAlign`, `fontFamily` etc - can only apply to `<Text />` components.

```jsx
<View style={{
    backgroundColor: 'red',
    padding: 2
}}>
  <Text style={{
    fontSize: 24,
    color: 'green'
  }}>
    Hello
  </Text>
</View>
```

## Flex

Every component in React Native contains the `display: flex` rule implicitly, so everything is a flexbox container. Flexbox is the only way to layout components in React Native so check out [this awesome article](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) if you need a refresher.

In contrast to the web, React Native's default flex direction is `column`. This may confuse people coming from regular CSS where the default direction is `row`.

Imagine every component in React Native already has these rules applied:

```jsx
<Component style={{
  display: 'flex',
  flexDirection: 'column'
}}>
```

`flexDirection` can still be specified as `row`, it just needs to be done explicitly. Something to keep in mind is that the `flexDirection` affects the axis of `align` and `justify` in the same way as the web.

| Direction  | `justifyContent`   | `alignItems`    |
| ---------- | ------------------ | --------------- |
| row        | horizontal axis    | vertical axis   |
| column     | vertical axis      | horizontal axis |

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-display-and-format-text-in-a-react-native-application)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-style-components-in-a-react-native-app-with-stylesheet)
