# Create a React Native App and Run it on the iOS Simulator and Android Emulator

**[📹 Video](https://egghead.io/lessons/react-native-create-a-react-native-app-and-run-it-on-the-ios-simulator-and-android-emulator)**


## Installing dependencies

### Node.js
Node.js is required to install the `react-native` package and any additional packages your project requires. Head over to [Node.js download](https://nodejs.org/en/download/), download installer for OS and follow installation instructions.

### Visual Studio Code
Any text editor can be used - Sublime Text, Atom, Vim etc - but if you do not yet have a text editor of choice, check out [Visual Studio Code](https://code.visualstudio.com/download).

### React Native
🤔Navigate to [react native docs](https://reactnative.dev/docs/environment-setup), select `React Native CLI Quickstart` tab, and choose your dev OS and target OS - e.g. macOS and iOS.

> Note: iOS development can only be done on a macOS device, due to Apple licensing. If you are planning to build for iOS make sure you have a macOS dev device, otherwise follow the Android instructions to get setup.

👍The docs will step you through each dependency you need to setup, before installing the `react native` package. Go through the `Installing dependencies` section for each target OS, even if you are only planning to build for one. This will save a lot of time in the future 🙂

Once all dependencies are installed for both target platforms, install the `react native CLI` package.

```bash
npm install react-native-cli --global
```

This will install the `react native CLI` package globally - meaning you can use the `react-native` command from any directory.

This command can be shortened to simply:

```bash
npm i react-native-cli -g
```

## Creating a new project

Run the `init` command to create a new React Native project.

```bash
react-native init NameOfProject
```

Project names can only contain alphanumeric characters - no symbols such as `-` or `_` to separate words 🙁

## Running project

Change into the project's directory using `cd` command.

```bash
cd NameOfProject
```

Run the project in default iOS simulator.

```bash
react-native run-ios
```

Run the project in default Android simulator.

```bash
react-native run-android
```

## Choosing a specific iOS simulator

```bash
react-native run-ios --simulator="iPhone X"
```

Alternatively, you can open the project in Xcode, select a simulator from the dropdown list and click the `play` button. This will rebuild the project and launch in selected simulator.

## Choosing a specific Android Emulator

When executing the `react-native run-android` command, the project will automatically run in whichever Android emulator is currently running.

> Note: The Android project can only run in one emulator or physical device at a time, so make sure you only have one emulator open, or one physical Android device plugged in.

Additional emulators can be installed by opening Android Studio, selecting `Configure` and then `AVD Manager`.

## Running app on physical device

🤔Check out the [React Native Docs guide](https://reactnative.dev/docs/running-on-device) for running the application on a physical device.

---

📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-reload-the-simulator-when-changes-occur-in-react-native-apps)
