# Splitting our Redux Store into Multiple Slices using the createSlice Method

[Video link](https://www.egghead.io/lessons/react-splitting-our-redux-store-into-multiple-slices-using-the-createslice-method?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:31" end="0:49">

[createSlice](https://redux-toolkit.js.org/api/createslice) accepts a `name`, `initialState`, `reducers`, and `extraReducers` 

```ts
import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  items: { [productID: string]: number }
}
```

</TimeStamp>

<TimeStamp start="1:05" end="1:26">

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

<TimeStamp start="1:50" end="2:00">

```ts
import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../app/api";
```

</TimeStamp>

<TimeStamp start="2:15" end="2:48">

```ts
export interface ProductsState {
  products: { [id: string]: Product}
}
```

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

<TimeStamp start="2:55" end="3:15">

```ts
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../features/products/productsSlice";
```

```ts
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  }
})
```

</TimeStamp>
