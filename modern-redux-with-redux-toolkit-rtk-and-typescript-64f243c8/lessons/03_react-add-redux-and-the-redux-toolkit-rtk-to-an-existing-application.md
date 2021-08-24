# Add Redux and the Redux Toolkit (RTK) to an Existing Application

[Video link](https://www.egghead.io/lessons/react-add-redux-and-the-redux-toolkit-rtk-to-an-existing-application?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:02" end="0:10">

```
npm install react-redux
npm install @reduxjs/toolkit
```

</TimeStamp>

<TimeStamp start="0:16" end="0:31">

More on [configureStore](https://redux-toolkit.js.org/api/configureStore)

```ts
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {}
})
```

</TimeStamp>

<TimeStamp start="0:34" end="0:44">

```ts
import { Provider } from "react-redux";
import { store } from "./app/store";
```

</TimeStamp>

<TimeStamp start="0:45" end="0:51">

```ts
<Provider store={store}>
  <App />
</Provider>
```

</TimeStamp>
