# Change the Splash Screen for iOS Apps built with React Native

**[📹 Video](https://egghead.io/lessons/react-native-change-the-splash-screen-for-ios-apps-built-with-react-native)**

## Splash screen

We are going to install the `react-native-splash-screen` package to easily modify our app's splashscreen. This is possible to do without this package, however, this package also removes a white screen that flashes before the app loads.

```bash
npm i react-native-splash-screen
```

All we need to do in codeland is import the package in the root most component and tell the splashscreen to hide when the component is mounted.

```jsx
import SplashScreen from 'react-native-splash-screen`
import ModalNav from 'components/ModalNav'

export default class App extends Component {
	componentDidMount() {
		SplashScreen.hide()
	}

	render() {
		return <ModalNav />
	}
}
```

Next we will configure the `iOS` app to load the correct splash screen.

- Open project in Xcode
- Open `AppDelegate.m`
- Add import at the end of import list
  ```
  #import "RNSplashScreen.h"
  ```
- Immediately before the `return YES;` statement, add the following to tell the splashscreen to show
  ```
  [RNSplashScreen show];
  ```
- Delete the LaunchScreen.xib file
- Click `Images.xcassets` file
- Right click anywhere under `AppIcon` and select `App Icons & Launch Images > New iOS Launch Image`
- Drag and drop the correct resolution images onto the devices
- Select the project - the top most `RestaurantReview` file in the example video
- Navigate to General tab and then click your app's name in the `Targets` list - again this is `RestarurantReview` in the example video
- Click `Use Asset Catalog...` under `App Icons and Launch Images` menu
- Select LaunchImage
- Ensure `Launch Screen File` input box is empty
- Delete and reinstall the app on your device or simulator

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-save-and-retrieve-data-on-the-device-in-a-react-native-app-with-asyncstorage)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-change-the-splash-screen-for-android-apps-built-with-react-native)
