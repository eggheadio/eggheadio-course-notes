# Make a Touchable Button in React Native

**[📹 Video](https://egghead.io/lessons/react-native-make-a-touchable-button-in-react-native)**

## Pressable components

There are many options for wrapping components that should be pressable. The main ones are `<Button />`, `<TouchableOpacity />`, `<TouchableWithoutFeedback />`, `<TouchableHighlight />` and `<Pressable />`. There are varying levels of customizability with each option, however, the [React Native docs](https://reactnative.dev/docs/pressable) now recommend to use the `<Pressable />` component for attaching press handlers to any components, unless you have a really good reason not to.

## New components

[`<Button />`](https://reactnative.dev/docs/button) - very basic component for making something pressable. Not very customizable.

[`<TouchableOpacity />`](https://reactnative.dev/docs/touchableopacity) - used for wrapping components that should be pressable.

[`<TouchableWithoutFeedback />`](https://reactnative.dev/docs/touchablewithoutfeedback) - should be avoided unless necessary. Does not provide visual feedback which is helpful for accessibility.

[`<TouchableHighlight />`](https://reactnative.dev/docs/touchablehighlight) - used to wrap components that should be pressable.

[`<Pressable />`](https://reactnative.dev/docs/pressable) - [React Native docs](https://reactnative.dev/docs/pressable) recommend using this to wrap any components that you would like to be pressable.

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-display-a-list-of-items-in-react-native-with-flatlist)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-fetch-data-from-an-http-server-in-a-react-native-application-using-fetch-or-axios)
