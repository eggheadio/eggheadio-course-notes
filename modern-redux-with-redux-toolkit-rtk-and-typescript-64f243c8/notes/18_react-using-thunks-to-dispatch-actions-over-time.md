# Using Thunks to Dispatch Actions Over Time

[Video link](https://www.egghead.io/lessons/react-using-thunks-to-dispatch-actions-over-time?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:05" end="0:10">

[Redux Thunk Middleware](https://redux.js.org/tutorials/fundamentals/part-4-store#middleware)

</TimeStamp>

<TimeStamp start="0:25" end="0:30">

```ts
extraReducers: function (builder) {
  builder.addCase("cart/checkout/fulfilled", (state, action) => {
    state.checkoutState = "READY";
  })
}
```

</TimeStamp>

<TimeStamp start="0:35" end="0:45">

```ts
import type { RootState, AppDispatch } from "../../app/store";

export function checkout() {
  return function checkoutThunk(dispatch: AppDispatch) {
    dispatch({ type: "cart/checkout/pending" });
  }
}
```

</TimeStamp>

<TimeStamp start="1:00" end="1:10">

```ts
import { checkout, getTotalPrice, removeFromCart, updateQuantity } from "./cartSlice";

function onCheckout(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  dispatch(checkout());
}
```

</TimeStamp>

<TimeStamp start="1:15" end="1:30">

```ts
export function checkout() {
  return function checkoutThunk(dispatch: AppDispatch) {
    dispatch({ type: "cart/checkout/pending" });
    setTimeout(function () {
      dispatch({ type: "cart/checkout/fulfilled" })
    }. 500)
  }
}
```

</TimeStamp>