# Pass Data Between Screens when Navigating with StackNavigator

**[📹 Video](https://egghead.io/lessons/react-native-pass-data-between-screens-when-navigating-with-stacknavigator)**

## Passing navigation props

Sometimes we need to pass additional props to another screen - such as an `id` for the selected item. Parameters can be passed as the second argument to the `navigate()` function.

```
this.props.navigation.navigate('Info', {
	place: this.props.place
})
```

Inside the `Info` screen we can now access the params on the `navigation` prop.

```jsx
this.props.navigation.getParam('place')
```

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-customize-the-stacknavigator-header-with-react-navigation-in-a-react-native-app)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-add-bottom-tabs-to-a-react-native-app-with-react-navigation)
