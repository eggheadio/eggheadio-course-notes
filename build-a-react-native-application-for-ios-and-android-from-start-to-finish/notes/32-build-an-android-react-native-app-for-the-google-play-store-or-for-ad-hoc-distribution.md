# Build an Android React Native App for the Google Play Store or for Ad Hoc Distribution

**[📹 Video](https://egghead.io/lessons/react-native-build-an-android-react-native-app-for-the-google-play-store-or-for-ad-hoc-distribution)**

## Build for Play Store

- Generate a key by running following command in command prompt or terminal
  ```bash
  keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
  ```
- Enter a password and answer the prompted questions - this will create a new `my-release-key.keystore` file - keep this file safe as there is no way to recover it. Regenerating it will lose you all Google Play Store history - such as downloads and ratings
- Copy `my-release-key.keystore` to the `android/app` directory
- Open `android/gradle.properties` file in a text editor and paste the following key value pairs - ensure to update the values with the values generated
  ```
  MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
  MYAPP_RELEASE_KEY_ALIAS=my-key-alias
  MYAPP_RELEASE_STORE_PASSWORD=your-password
  MYAPP_RELEASE_KEY_PASSWORD=your-key-password
  ```
- Open `android/app/build.gradle` in text editor, check that the version and build numbers are correct and add the following immediately after the closing `}` of `defaultConfig`
  ```
  signingConfig: {
    release: {
      if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
        storeFile file(MYAPP_RELEASE_STORE_FILE)
        storePassword MYAPP_RELEASE_KEY_PASSWORD
        keyAlias MYAPP_RELEASE_KEY_ALIAS
        keyPassword MYAPP_RELEASE_KEY_PASSWORD
      }
    }
  }
  ```
- In the same file add the following under `buildTypes > release` - it should immediately follow the `proguardFiles` line
  ```
  signingConfig signingConfigs.release
  ```
- In Terminal or Command Prompt build the project for release by navigating to the `android` folder and running
  ```bash
  ./gradlew assembleRelease
  ```
- Find the `app-release.apk` file at `android > app > build > outputs > apk > release` - this is the file used to upload to the [Google Play store](https://developer.android.com/distribute)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-build-an-ios-react-native-app-for-uploading-to-the-ios-app-store-or-testflight)
