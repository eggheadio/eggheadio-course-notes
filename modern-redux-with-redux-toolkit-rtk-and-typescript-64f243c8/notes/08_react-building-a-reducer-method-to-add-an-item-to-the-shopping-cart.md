# Building a Reducer Method to add an Item to the Shopping Cart

[Video link](https://www.egghead.io/lessons/react-building-a-reducer-method-to-add-an-item-to-the-shopping-cart?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:03" end="0:20">

```ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

reducers: {
  addToCart(state, action: PayloadAction<string>) {
    const id = action.payload;
    state.items[id] = 1;
  }
}
```

</TimeStamp>

<TimeStamp start="0:43" end="0:55">

```ts
if ( state.items[id]) {
  state.items[id]++;
} else {
  state.items[id] = 1;
}

export const { addToCart } = cartSlice.actions;
```

</TimeStamp>

<TimeStamp start="1:12" end="1:17">

```ts
import { addToCart } from "../cart/cartSlice";
```

</TimeStamp>

<TimeStamp start="1:22" end="1:33">

```jsx
<button onClick={() => dispatch(addToCart(product.id))}>
  Add to Cart 🛒
</button>
```

</TimeStamp>