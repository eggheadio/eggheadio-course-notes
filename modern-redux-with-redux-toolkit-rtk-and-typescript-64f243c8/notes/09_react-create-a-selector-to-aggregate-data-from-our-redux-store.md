# Create a Selector to Aggregate Data from our Redux Store

[Video link](https://www.egghead.io/lessons/react-create-a-selector-to-aggregate-data-from-our-redux-store?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:05" end="0:15">

```ts
import type { RootState } from "../../app/store";

export function getNumItems(state: RootState){

}
```

</TimeStamp>

<TimeStamp start="0:25" end="0:35">

```ts
export function getNumItems(state: RootState){
  let numItems = 0;
  for (let id in state.cart.items) {
    numItems += state.cart.items[id];
  }
  return numItems;
}
```

</TimeStamp>

<TimeStamp start="0:40" end="1:00">

Here is some info for [Basic Selector Concepts](https://redux.js.org/usage/deriving-data-selectors#basic-selector-concepts)

```ts
import { useAppSelector } from "../../app/hooks";
import { getNumItems } from "./cartSlice";

const numItems = useAppSelector(getNumItems);
```

</TimeStamp>

<TimeStamp start="1:15" end="1:22">

```html
<span className={styles.text}>
  🛒&nbsp;&nbsp;{numItems ? numItems: "Cart"}
</span>
```

</TimeStamp>