# Style React Native Components Differently on iOS and Android

**[📹 Video](https://egghead.io/lessons/react-native-style-react-native-components-differently-on-ios-and-android)**

## Platform helper

Sometimes we need to write iOS or Android specific code in our apps. The `Platform` helper can be used inline to help us specify specific styles for the different target platforms.

```jsx
import { Platform } from 'react-native'
import HeaderStyle from '../styles/Header'

const headerStyle = Platform.select({
	ios: HeaderStyle.iOSHeader,
	android: HeaderStyle.androidHeader
})

<View styled={headerStyle} />
```

Alternatively, different versions of the entire component can be specified by appending `.android` or `.ios` before the `.js` file extension.

```
├── Header.android.js
├── Header.ios.js
```

The component is still imported without the `.android` or `.ios`.

```jsx
import Header from './Header'
```

This will magically import the `.ios` version on iOS and `.android` version on Android.

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-use-the-debugger-in-a-react-native-app)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-clean-up-the-folder-structure-and-imports-in-a-react-native-app-with-absolute-paths)
