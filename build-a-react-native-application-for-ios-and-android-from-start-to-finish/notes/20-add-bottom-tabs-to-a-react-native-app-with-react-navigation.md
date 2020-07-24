# Add Bottom Tabs to a React Native App with React Navigation

**[📹 Video](https://egghead.io/lessons/react-native-add-bottom-tabs-to-a-react-native-app-with-react-navigation)**

## Tab navigation

[Tab navigation](https://reactnavigation.org/docs/2.x/tab-based-navigation/) is displayed at the bottom of the interface and is usually available from all screens. Usually there is only one tab navigation that serves as the core experiences of the app.

To create tab navigation, use the `createBottomTabNavigator` function.

```jsx
import { createBottomTabNavigator } from 'react-navigation'
...
createBottomTabNavigator(...)
```

As this is usually available on all screens, it is usually the root most navigator.

```jsx
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

const List = createStackNavigator(...)

const Tabs = createBottomTabNavigator({
	List: { screen: List }
})
```

When using tab navigation to navigate away from the current stack navigation, its position and state are retained, so when you navigate back to it, it will restore your position in the stack - no one will come and eat your pancakes while you're distracted by something else.

The `createBottomTabNavigator()` function also takes config options as a second parameter. This has a `tabBarIcon` function that can be used to set an icon for the focused tab, and an `activeBackgroundColor` that can be used to set the background color of the active tab.

```jsx
createBottomTabNavigator({
	...
}, {
  navigationOptions: ({ navigation }) => {
    return {
      tabBarIcon: ({ tintColor }) => {
        if (navigation.state.routeName === 'List') {
          return <Icon name='list' color={tintColor} size={22} />
        }
        if (navigation.state.routeName === 'About') {
          return <Icon name='info-circle' color={tintColor} size={22} />
        }
      }
    }
  },
  tabBarOptions: {
    activeBackgroundColor: '#E6F0FA'
  }
})
```

The full example looks like this.

```jsx
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import RestaurantList from 'components/RestaurantList'
import RestaurantInfo from 'components/RestaurantInfo'
import About from 'components/About'

const List = createStackNavigator({
  Home: { screen: RestaurantList },
  Info: { screen: RestaurantInfo }
})

const Tabs = createBottomTabNavigator({
	List: { screen: List },
  About: { screen: About }
}, {
  navigationOptions: ({ navigation }) => {
    return {
      tabBarIcon: ({ tintColor }) => {
        if (navigation.state.routeName === 'List') {
          return <Icon name='list' color={tintColor} size={22} />
        }
        if (navigation.state.routeName === 'About') {
          return <Icon name='info-circle' color={tintColor} size={22} />
        }
      },
      tabBarOptions: {
        activeBackgroundColor: '#E6F0FA'
      }
    }
  },
})
```

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-pass-data-between-screens-when-navigating-with-stacknavigator)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-add-a-modal-screen-that-pops-up-from-the-bottom-with-react-navigation)
