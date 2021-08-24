# Adding a Button that Dispatches an Action To Redux to Remove an Item from the ShoppingCart

[Video link](https://www.egghead.io/lessons/react-adding-a-button-that-dispatches-an-action-to-redux-to-remove-an-item-from-the-shoppingcart?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:10" end="0:20">

```ts
removeFromCart(state, action: PayloadAction<string>) {
  delete state.items[action.payload];
}

export const { addToCart, removeFromCart } = cartSlice.actions
```

</TimeStamp>

<TimeStamp start="0:30" end="0:35">

```ts
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getTotalPrice, removeFromCart } from "./cartSlice";
```

</TimeStamp>

<TimeStamp start="0:37" end="0:00">

```ts
const dispatch = useAppDispatch()

onclick={() => dispatch(removeFromCart(id))}
```

</TimeStamp>