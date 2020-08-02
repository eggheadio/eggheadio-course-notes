# Write to the Console Log in a React Native App

**[📹 Video](https://egghead.io/lessons/react-native-write-to-the-console-log-in-a-react-native-app)**

## Developer tools

⌨️ To enable the developer tools, first bring up the React Native Developer Menu by shaking the physical device, or pressing `cmd + d` or `cmd + m` on macOS or `ctrl + m` on Windows. Select `Debug JS Remotely` from this menu. This will open a browser window with the full suite of developer tools to help debug our apps.

`console.log` messages will appear in the `Console` panel of the developer tools similar to on the web, however, `console.warn` and `console.error` messages will also appear in the React Native interface. `console.warn` will display a yellow box at the bottom of the interface. `console.error` will display a fullscreen error page.

Displaying `console.warn` messages in the React Native interface can be disabled by adding the `console.disableYellowBox = true` statement to `index.js`.

🤔More information on debugging React Native apps in [the docs](https://reactnative.dev/docs/debugging).

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-accept-user-input-with-react-native-textinput)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-use-the-debugger-in-a-react-native-app)
