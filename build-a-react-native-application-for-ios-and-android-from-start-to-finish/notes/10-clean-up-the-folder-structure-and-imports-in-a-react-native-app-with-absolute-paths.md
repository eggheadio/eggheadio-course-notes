# Clean Up the Folder Structure and Imports in a React Native App with Absolute Paths

**[📹 Video](https://egghead.io/lessons/react-native-clean-up-the-folder-structure-and-imports-in-a-react-native-app-with-absolute-paths)**

## Folder structure

Having all the files in the root app folder is fine when starting a project, but pretty soon it will get out of hand without some structure.

```
.
└── src
    ├── components
    └── styles
```

By adding a `package.json` file with a single value of name `{"name": "components"}` allows other files to use absolute imports.

```jsx
import Header from 'components/Header'
```

Instead of specifying the relative path from the current file.

```jsx
import Header from '../../components/Header'
```

Absolute imports make import statements much cleaner, and allow for really easy refactoring and moving of files, without needing to think about where the current file is now located in relation to the file being imported.

It is a good idea to add absolute imports for the `styles` and `components` directories.

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-style-react-native-components-differently-on-ios-and-android)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-scroll-elements-on-a-react-native-screen-with-scrollview)
