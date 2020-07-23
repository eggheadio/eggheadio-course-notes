# Customize the StackNavigator Header with React Navigation in a React Native App

**[📹 Video](https://egghead.io/lessons/react-native-customize-the-stacknavigator-header-with-react-navigation-in-a-react-native-app)**

## Configuration

[Stack navigation](https://reactnavigation.org/docs/2.x/stack-navigator/) adds an automatic header, which contains the back button to go back to the previous screen. This can be turned off per component by adding `static navigationOptions = { header: null }`.

```jsx
class MyComponent extends Component {
  static navigationOptions = { header: null }
  ...
}
```

Other config options can also be specified in `navigationOptions` - such as `title`, `headerStyle` and `tintColor`.

These options can also be passed as a second argument to the `createStackNavigator` function.

```jsx
createStackNavigator({
  Home: { screen: RestaurantList },
  Info: { screen: RestaurantInfo }
}, {
  header: null
})
```

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-show-a-new-screen-with-react-navigation-and-stacknavigator)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-pass-data-between-screens-when-navigating-with-stacknavigator)
