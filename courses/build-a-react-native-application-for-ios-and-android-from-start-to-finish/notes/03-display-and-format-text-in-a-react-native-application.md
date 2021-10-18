# Display and Format Text in a React Native Application

**[📹 Video](https://egghead.io/lessons/react-native-display-and-format-text-in-a-react-native-application)**

## Components are like HTML elements

HTML elements are not available in React Native, instead apps are composed of components imported from the `react-native` package. Most HTML elements have a comparable React Native component, the most basic being a `View` component - similar to a `<div>` - and a `Text` component - similar to a `<span>`.

```jsx
import { Text, View } from 'react-native'
```

The main difference between these components and their HTML equivalents is that text may only appear in a `<Text />` component, not a `<View />`. `<Text />` components may also contain other nested `<Text />` components but cannot contain nested `<View />` components. `<View />` components may contain other nested `<View />` or `<Text />` components.

✅
```jsx
<View>
  <Text>hello</Text>
</View>
```

❌
```jsx
<View>hello</View>
```

| Component  | Contain `<View />` | Contain `<Text />` | Contain text |
| ---------- | ------------------ | ------------------ | ------------ |
| `<View />` | ✅                 |✅                  |❌            |
| `<Text />` | ❌                 |✅                  |✅            |

A similarity these components share with their HTML equivalents are that sibling `<View />` components will stack vertically - like block level elements - and sibling `<Text />` components will stack horizontally - like inline elements.

## Styling

CSS style rules can be applied to components using the inline `style` prop. The syntax is similar to CSS on the web, however, rules are declared as a JSON object, with each rule's property being the key and value being the value.

```js
<View style={{
  backgroundColor: 'green',
  padding: 2
}} />
```

## New components
🤔[`<View />`](https://reactnative.dev/docs/view) - used for general layout and styling.

🤔[`<Text />`](https://reactnative.dev/docs/text) - used for displaying and styling text.

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-reload-the-simulator-when-changes-occur-in-react-native-apps)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-layout-react-native-components-with-flexbox)
