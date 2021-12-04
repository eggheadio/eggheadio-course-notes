## Debug redux-observable with redux dev-tools

The Redux DevTools Chrome Extension allows visibility into the lifecycle of the Redux store. We can utilize it in our application as follows:

```jsx
import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./epics";
const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);
epicMiddleware.run(rootEpic);
```
