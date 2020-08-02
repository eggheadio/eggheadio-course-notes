# Save and Retrieve Data on the Device in a React Native App with AsyncStorage

**[📹 Video](https://egghead.io/lessons/react-native-save-and-retrieve-data-on-the-device-in-a-react-native-app-with-asyncstorage)**

## Storage

> ❗Note: This course uses React Native's AsyncStorage, however, this is now deprecated. It is recommended to use the [React Native Community Async Storage](https://react-native-community.github.io/async-storage/docs/install) which needs to be installed from NPM.

🤔[AsyncStorage](https://react-native-community.github.io/async-storage/docs/install) can be used to easily store simple data on the user's device. The API is identical to `localStorage` on the web, however, it is asynchronous whereas `localStorage` is synchronous.

Install AsyncStorage from NPM.

```bash
npm i @react-native-community/async-storage
```

Similar to on the web, AsyncStorage's `key` and `value` must be strings. We can use the `JSON.stringify(...)` to turn a JSON object into a string, and `JSON.parse(...)` to turn a string back into a JSON object.

To write data to localStorage.

```jsx
import AsyncStorage from '@react-native-community/async-storage';

const pokemon = [...] // all 151 pokemon

AsyncStorage.setItem('pokemon', JSON.stringify(pokemon))
  .then(() => { // pokemon have been saved to AsyncStorage })
```

To read data from localStorage.

```jsx
import AsyncStorage from '@react-native-community/async-storage';

AsyncStorage.getItem('pokemon')
  .then((data) => this.setState({ pokemon: JSON.parse(data) }))
```

Make sure to protect against `null` or `undefined` values when reading or writing AsyncStorage.

```jsx
if (pokemon) {
  AsyncStorage.setItem('pokemon', JSON.stringify(pokemon))
    .then(() => { // pokemon have been saved to AsyncStorage })
}
```

```jsx
AsyncStorage.getItem('pokemon')
  .then((data) => {
    if (data) {
      this.setState({ pokemon: JSON.parse(data) })
    }
  })
```

AsyncStorage is a great way to store simple things - such as user preferences and config - but should not be used in place of a proper database for complex data.

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-show-a-spinner-while-submitting-a-form-in-react-native-with-activityindicator)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-change-the-splash-screen-for-ios-apps-built-with-react-native)
