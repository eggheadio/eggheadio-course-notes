# Using createAsyncThunk and the builder API to Generate Redux Actions for an API call

[Video link](https://www.egghead.io/lessons/react-using-createasyncthunk-and-the-builder-api-to-generate-redux-actions-for-an-api-call?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:02" end="0:12">

All you need to know about [createAsyncThunk](https://redux-toolkit.js.org/usage/usage-with-typescript#createasyncthunk)

```ts
import { createSlice, createAsyncThunk, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { checkout, CartItems } from "../../app/api";
```

</TimeStamp>

<TimeStamp start="0:25" end="0:40">

```ts
export const checkoutCart = createAsyncThunk("cart/checkout", async ( items: CartItems) => {
  const response = await checkout(items);
  return response;
})
```

</TimeStamp>

<TimeStamp start="0:55" end="1:12">

```ts
extraReducers: (builder) => { 
  builder.addCase(checkoutCart.pending, (state) => {
    state.checkoutState = "LOADING";
  })
}
```

</TimeStamp>

<TimeStamp start="1:20" end="1:30">

```ts
extraReducers: (builder) => { 
  builder.addCase(checkoutCart.pending, (state) => {
    state.checkoutState = "LOADING";
  });
  builder.addCase(checkoutCart.fulfilled, (state) => {
    state.checkoutState = "READY";
  });
  builder.addCase(checkoutCart.rejected, (state) => {
    state.checkoutState = "ERROR";
  });
}
```

</TimeStamp>

<TimeStamp start="2:05" end="2:20">

```ts
import { 
  getTotalPrice, 
  removeFromCart, 
  updateQuantity, 
  checkoutCart 
} from "./cartSlice";

function onCheckout(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  dispatch(checkoutCart(items));
}
```

</TimeStamp>

<TimeStamp start="2:35" end="2:38">

```tsx
<form onSubmit={onCheckout}>
```

</TimeStamp>