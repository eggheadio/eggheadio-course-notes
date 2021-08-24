# Use createSelector from Redux Toolkit to build a Memoized Selector

[Video link](https://www.egghead.io/lessons/react-use-createselector-from-redux-toolkit-to-build-a-memoized-selector?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:45" end="1:05">

```ts
import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";

export const getMemoizedNumItems = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    let numItems = 0;
    for (let id in items) {
      numItems += items[id]
    }
  return numItems;
}
)
```

</TimeStamp>


<TimeStamp start="1:32" end="1:40">

```ts
import { getNumItems,  getMemoizedNumItems } from "./cartSlice";

const numItems = useAppSelector(getMemoizedNumItems);
```

</TimeStamp>