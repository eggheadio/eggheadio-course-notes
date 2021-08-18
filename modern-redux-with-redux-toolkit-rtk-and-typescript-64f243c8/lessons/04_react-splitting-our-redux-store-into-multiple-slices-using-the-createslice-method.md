# Splitting our Redux Store into Multiple Slices using the createSlice Method

[Video link](https://www.egghead.io/lessons/react-splitting-our-redux-store-into-multiple-slices-using-the-createslice-method?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:22" end="0:35">

More on [createSlice](https://redux-toolkit.js.org/api/createslice)

```ts
import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  items: { [productID: string]: number }
}
```

</TimeStamp>

<TimeStamp start="0:44" end="1:00">

```ts
const initialState: cartState = {
  items: {}
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {}
})

export default cartSlice.reducer;
```

</TimeStamp>

<TimeStamp start="1:25" end="1:35">

```ts
import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../app/api";
```

</TimeStamp>

<TimeStamp start="1:46" end="1:56">

```ts
export interface ProductsState {
  products: { [id: string]: Product}
}
```

</TimeStamp>

<TimeStamp start="1:58" end="2:18">

```ts
const initialState: ProductsState = {
  products: {}
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}
})

export default productsSlice.reducer.
```

</TimeStamp>

<TimeStamp start="2:30" end="2:42">

```ts
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../features/products/productsSlice";
```

</TimeStamp>

<TimeStamp start="2:44" end="2:52">

```ts
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  }
})
```

</TimeStamp>
