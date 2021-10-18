# Display a List of Items in React Native with FlatList

**[📹 Video](https://egghead.io/lessons/react-native-display-a-list-of-items-in-react-native-with-flatlist)**

## Large collections

The `<ScrollView />` component should only be used for small collections - not more than two screens high. For anything larger than this a `<FlatList />` should be used.

A `<FlatList />` is much more performant than `<ScrollView />` as it recycles views when content is no longer visible. The `<FlatList />` component has a few props we need to wire up.

- `data`: the array of values we want to iterate over and display
- `renderItem`: a function that describes how to render each item - similar to our `.map` example from earlier. The argument passed to the `renderItem` function is an object containing a bunch of convenient values. The item we are currently iterating over can be accessed as `.item`. It is common to destructure this in the renderItem declaration (as below).
- `keyExtractor`: a function to extract a unique value to use as that specific row's key. The argument passed to this function is the item itself and whatever is returned will be used to uniquely identify it.

```jsx
const pokemon = [...] // contains all 151 pokemon

<FlatList
  data={pokemon}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  keyExtractor={item => item.id}
/>
```

`<FlatList />` loads the data in batches, which can sometimes cause a visible flicker as more items are loaded in. The default batch size is 10, but this can be overwritten with the `initalNumberToRender` prop.

## New component

🤔[`<FlatList />`](https://reactnative.dev/docs/flatlist) - used for displaying large collections of data.

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-scroll-elements-on-a-react-native-screen-with-scrollview)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-make-a-touchable-button-in-react-native)
