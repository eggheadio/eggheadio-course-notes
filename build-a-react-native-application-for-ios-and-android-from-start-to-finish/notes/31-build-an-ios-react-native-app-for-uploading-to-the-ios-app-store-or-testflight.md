# Build an iOS React Native App for Uploading to the iOS App Store or TestFlight

**[📹 Video](https://egghead.io/lessons/react-native-build-an-ios-react-native-app-for-uploading-to-the-ios-app-store-or-testflight)**

## Build for deploy

- Open project in Xcode
- Select app and ensure correct `Team` is selected under `General > AppName > Signing`
- Ensure there are no Signing Certificate errors in this same section
- Confirm version and build numbers are correct - increase build number if redeploying
- Select `Generic iOS Device` from simulators list
- In the menu click `Product > Archive` to build
- Once built the `Window > Organizer` window should automatically open
- Ensure you have [registered your app for distribution](https://developer.apple.com/documentation/xcode/distributing_your_app_for_beta_testing_and_releases)
- Click `Upload to App Store...` to deploy to test flight or the app store

> Note: Xcode may display different options if you are running a newer version - follow [Apple's Distributing Your App for Beta Testing and Releases](https://developer.apple.com/documentation/xcode/distributing_your_app_for_beta_testing_and_releases) guide for more information.

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-run-a-react-native-app-on-an-android-device)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-build-an-android-react-native-app-for-the-google-play-store-or-for-ad-hoc-distribution)
