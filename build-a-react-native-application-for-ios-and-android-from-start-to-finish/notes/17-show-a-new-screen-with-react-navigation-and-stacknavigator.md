# Show a New Screen with React Navigation and StackNavigator

**[📹 Video](https://egghead.io/lessons/react-native-show-a-new-screen-with-react-navigation-and-stacknavigator)**

## Navigation

> Note: This course uses react-navigation version 2. The current version is 5 and contains a slightly different API. The concepts of stack and tab navigation are the same, so for consistency with the videos install version 2, and use the corresponding [docs](https://reactnavigation.org/docs/2.x/getting-started/)

[React Navigation](https://reactnavigation.org/docs/2.x/getting-started/) can be used to navigate between different pages or screens in the application.

```bash
npm i react-navigation@^2.0.0
```

There are two main types of navigation we can use:

- [Stack](https://reactnavigation.org/docs/2.x/stack-navigator/) 🥞- you can imagine this is like a stack of pancakes, where the top pancake - current screen - is the one you are focusing on eating - or just looking at ... don't eat your phone!. You decide the blueberry pancake sounds even tastier so you order it and the chef places it ontop of the stack, so now you are focused on the blueberry pancake. When you finish the blueberry pancake you are back to the pancake that came before it. This is how stack navigation works, until you are back to the root pancake - and then you order some more!

- [Tab](https://reactnavigation.org/docs/2.x/tab-based-navigation/) 🧂- this is the navigation that sits at the bottom of screen, and is usually available across all screens. You can think of this as the basket of maple syrup and condiments. It is on the table no matter which pancake you are currently focused on, and you can pick it up on any pancake - or screen.

```jsx
import { createStackNavigator } from 'react-native-navigation'
import RestaurantList from 'components/RestaurantList'
import RestaurantInfo from 'components/RestaurantInfo'
...
createStackNavigator({
  Home: { screen: RestaurantList },
  Info: { screen: RestaurantInfo }
})
```

The `navigate()` function allows navigation to any other screen. This is passed as a prop to the top level component rendered by a stack or tab navigator.

```jsx
this.props.navigation.navigate('Info')
```

As this is only passed to the top-level component, if any children need to be able to navigate, it will need to be passed down as a prop.

```jsx
<ChildComponent navigate={this.props.navigation.navigate} />
```

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-add-icons-to-a-react-native-app-with-react-native-vector-icons)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-customize-the-stacknavigator-header-with-react-navigation-in-a-react-native-app)
