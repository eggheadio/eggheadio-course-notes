# Add a Modal Screen that Pops Up from the Bottom with React Navigation

**[📹 Video](https://egghead.io/lessons/react-native-add-a-modal-screen-that-pops-up-from-the-bottom-with-react-navigation)**

## Modals

[Stack navigation](https://reactnavigation.org/docs/2.x/stack-navigator/) can be used to display a modal. This should be the root most navigation layer if it needs to pop up over all content. The `mode: 'modal'` configuration option is used to tell React Native that this is a modal that should pop up from the bottom of the UI.

```jsx
const List = createStackNavigator(...)
const Tabs = createBottomTabNavigator(...)

export default createStackNavigator({
  Tabs: { screen: Tabs }, // original stack
  AddReview { screen: AddReview } // new modal screen
}, {
	mode: 'modal'
})
```

The full version might look something like this.

```jsx
import { createStackNavigator, createBottomTabNavigator } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import RestaurantList from 'components/RestaurantList'
import RestaurantInfo from 'components/RestaurantInfo'
import About from 'components/About'
import AddReview from 'components/AddReview'

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

export default createStackNavigator({
  Tabs: { screen: Tabs },
  AddReview { screen: AddReview }
}, {
	mode: 'modal',
	headerMode: 'none'
})
```

This new modal can be opened by navigating like any other page.

```jsx
this.props.navigation.navigate('AddReview')
```

The dragging down gesture in iOS will dismiss the modal. Can be disabled with navigation options.

```jsx
export default createStackNavigator({
  // screens
}, {
	mode: 'modal',
	headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false
  }
})
```

To close the modal we can call the `goBack()` function to return to the previous screen.

```jsx
this.props.navigation.goBack()
```

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-add-bottom-tabs-to-a-react-native-app-with-react-navigation)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-ensure-text-fields-don't-get-covered-by-the-on-screen-keyboard)
