# Reload the Simulator when Changes Occur in React Native Apps

**[📹 Video](https://egghead.io/lessons/react-native-reload-the-simulator-when-changes-occur-in-react-native-apps)**


## VS Code tip

⌨️ When navigating to different files in VS Code `cmd + p` on macOS or `ctrl + p` on Windows will bring up file search. This search is fuzzy, so you can type any parts of the filepath to get to the file - e.g. `cmphdr` to navigate to `/components/Header.js`.

Navigate to `App.js` and change the `Welcome to React Native!` text to the name of your application. Reload the simulator with `cmd + r` on macOS or `ctrl + r` on Windows to see changes. This manual reloading may become tedious throughout the development of our application so live reloading and hot reloading exist to speed things up! 🙂

## Live reloading

This will refresh the app anytime a change is detected in any JS file. This will reload the entire app and usually take you back to the initial/root screen of the application.

To enable live reloading make sure the emulator is focused and press `cmd + d` on macOS or `ctrl + d` on Windows to bring up the developer menu. Select `Enable Live Reload`.

## Hot reloading

This is similar to live reloading, but will only refresh the files that have been changed. It will also retain the state, so you will remain on the screen you were on 👍

⌨️ To enable hot reloading make sure the emulator is focused and press `cmd + d` on macOS or `ctrl + d` on Windows to bring up the developer menu. Select `Enable Hot Reloading`.

Automatic reloading can cause some unexpected behavior so it is recommended to manually refresh when starting out with React Native.

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-create-a-react-native-app-and-run-it-on-the-ios-simulator-and-android-emulator)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-display-and-format-text-in-a-react-native-application)
