# Style Components in a React Native App with StyleSheet

**[📹 Video](https://egghead.io/lessons/react-native-style-components-in-a-react-native-app-with-stylesheet)**

## StyleSheet

StyleSheet can be used to declare an object of styled for your component. It is imported from the `react-native` package and usually invoked at the bottom of the component file.

```jsx
import { StyleSheet } from 'react-native'

// component declaration

const styles = StyleSheet.create()
```

Sub-objects can be declared within the stylesheet and passed down to the specific components.

```jsx
import { StyleSheet } from 'react-native'

export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>
          This is the title
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    padding: 3
  },
  title: {
    fontSize: 32,
    color: 'blue'
  }
})
```

> Note: Most of the examples in this course use the class-based component syntax and `this.setState(...)`, but React Native also supports the newer [hooks](https://reactjs.org/docs/hooks-intro.html) syntax if you prefer.

All keys must be camelCase and all values must be a `number` (e.g. 20), `boolean` (e.g. true) or `string` (e.g. '#afafaf').

```jsx
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    padding: 3
  },
  title: {
    fontSize: 32,
    color: 'blue'
  }
})
```

Styling rules can be specified inline, abstracted to a stylesheet or in a different file.

Inline:

```jsx
export default class MyComponent extends Component {
  render() {
    return (
      <View style={{
        backgroundColor: 'green',
        padding: 3
      }}>
        <Text style={{
          fontSize: 32,
          color: 'blue'
        }}>
          This is the title
        </Text>
      </View>
    )
  }
}
```

Stylesheet:

```jsx
import { StyleSheet } from 'react-native'

export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>
          This is the title
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    padding: 3
  },
  title: {
    fontSize: 32,
    color: 'blue'
  }
})
```

External file:

```jsx
// styles/Header.js
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  backgroundColor: 'green',
  padding: 3
})
```

```jsx
// components/MyComponent.js
import HeaderStyles from '../styles/Header'
import TitleStyles from '../styles/Title'

export default class MyComponent extends Component {
  render() {
    return (
      <View style={HeaderStyles}>
        <Text style={TitleStyles}>
          This is the title
        </Text>
      </View>
    )
  }
}
```

When using inline styles to extend or override stylesheet rules, the `style` prop can take an array. This will be applied left to right, meaning the most specific rule should be on the right.

```jsx
import { StyleSheet } from 'react-native'

export default class MyComponent extends Component {
  render() {
    return (
      <View style={[styles.header, { backgroundColor: 'pink' }]}> />
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    padding: 3
  }
})
```

## General rules

Inline - only use for specific styles that should extend or override the general styles - such as a background color for the row that is currently active. These specific styles would usually be based on state that differs between components of that type.

Stylesheet - generic styles that should be applied to all components of that type. The stylesheet does smart stuff with duplicated styles so best to use it as much as possible.

External file - styles that are reused (or would be handy to reuse in the future) across other components. These also use React Native's StyleSheet so benefit from the smart stuff with duplicated styles.

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-layout-react-native-components-with-flexbox)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-accept-user-input-with-react-native-textinput)
