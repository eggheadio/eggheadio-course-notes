# Add Redux and the Redux Toolkit (RTK) to an Existing Application

[Video link](https://www.egghead.io/lessons/react-add-redux-and-the-redux-toolkit-rtk-to-an-existing-application?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:02" end="0:10">

```bash
npm install react-redux @reduxjs/toolkit
```

</TimeStamp>

<TimeStamp start="0:16" end="0:31">

There are a number of options and parameters you can set for [configureStore in the docs](https://redux-toolkit.js.org/api/configureStore)

```ts
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {}
})
```

</TimeStamp>

<TimeStamp start="0:43" end="0:51">

```ts
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.render(
  <React.StricMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StricMode>,
  document.getElementById("root")
);
```

</TimeStamp>
