# Creating a RootState type and Typed Hooks for Type-Aware Redux Interactions

[Video link](https://www.egghead.io/lessons/react-creating-a-rootstate-type-and-typed-hooks-for-type-aware-redux-interactions?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:02" end="0:18">

More on [dispatch](https://redux.js.org/usage/usage-with-typescript#define-root-state-and-dispatch-types)

```ts
export type RootState = ReturnType<typeofStore.getState>;
export type AppDispatch = typeof store.dispatch;
```

</TimeStamp>

<TimeStamp start="0:44" end="0:58">

More on [Defined Typed Hooks](https://react-redux.js.org/using-react-redux/usage-with-typescript#define-typed-hooks)

```ts
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./store"
```

</TimeStamp>

<TimeStamp start="1:02" end="1:25">

```ts
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

</TimeStamp>
