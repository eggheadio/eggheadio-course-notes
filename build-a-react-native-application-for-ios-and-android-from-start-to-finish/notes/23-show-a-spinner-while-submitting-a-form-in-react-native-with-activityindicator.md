# Show a Spinner while Submitting a Form in React Native with ActivityIndicator

**[📹 Video](https://egghead.io/lessons/react-native-show-a-spinner-while-submitting-a-form-in-react-native-with-activityindicator)**

## Loading spinners

When loading data from an API or another remote source, the request can take a significant amount of time. Loading spinners are a good way to communicate to the user that something is happening.

The [`<ActivityIndicator />`](https://reactnative.dev/docs/activityindicator) can show a spinner while content is loading or submitting. It can be provided a `size` and `color` prop, however, managing whether it is shown or not is done manually with state.

```jsx
class MyComponent extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    // 1. fetch some async stuff
    // 2. then:
    this.setState({ loading: false })
  }

  render() {
    return (
      <View>
        this.state.loading
          ? <ActivityIndicator size="large" color="0000ff">
          : // some list of results
      </View>
    )
  }
}
```

This will display the loading spinner when the component is first mounted and once the data is returned in `componentDidMount` it will set `loading` to `false` rendering the list of results instead.

In the above example we do not handle the unhappy path of an error occurring. This means the user would continue to see the loading spinner after the fetch request had failed, even though we are no longer loading data. The following demonstrates how this can be handled with `axios`.

```jsx
componentDidMount() {
  this.setState({ loading: true })

  axios.get(url)
    .then(() => { // handle happy path })
    .catch(() => { // handle unhappy path })
    .finally(() => this.setState({ loading: false }))
}
```

The `.finally()` branch will run regardless of whether the request succeeded or failed. Alternatively you could just ensure the code to set loading to false is present in both the `.then()` and `.catch()` branches.

A similar technique can be used with `<ActivityIndicator />` after a form has been submitted. Keep in mind that other states need to be manually handled too - such as disabling a submit button after it is clicked.

## New component

[`<ActivityIndicator />`](https://reactnative.dev/docs/activityindicator) - used to display a loading spinner when loading or submitting data.

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-ensure-text-fields-don't-get-covered-by-the-on-screen-keyboard)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-save-and-retrieve-data-on-the-device-in-a-react-native-app-with-asyncstorage)
