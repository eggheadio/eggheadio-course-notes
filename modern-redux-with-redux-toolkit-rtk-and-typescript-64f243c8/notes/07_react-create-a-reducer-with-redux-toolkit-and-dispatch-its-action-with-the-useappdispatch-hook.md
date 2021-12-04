# Create a Reducer with Redux Toolkit and Dispatch its Action with the useAppDispatch hook

[Video link](https://www.egghead.io/lessons/react-create-a-reducer-with-redux-toolkit-and-dispatch-its-action-with-the-useappdispatch-hook?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:05" end="0:20">

A little more info on [PayloadAction](https://redux.js.org/usage/usage-with-typescript#application-usage)

```ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

reducers: {
  receivedProducts(state, action: PayloadAction<>) {

  }
}
```

</TimeStamp>

<TimeStamp start="0:28" end="0:42">

```ts
reducers: {
  receivedProducts(state, action: PayloadAction<Product[]>) {
    const products = action.payload;
    products.forEach(product => {
      state.products[product.id] = product;
    })
  }
}
```

</TimeStamp>

<TimeStamp start="0:57" end="1:05">

```ts
export const { receivedProducts } = productsSlice.actions;
```

</TimeStamp>

<TimeStamp start="1:12" end="1:19">

```ts
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { receivedProducts } from "./productsSlice";
```

</TimeStamp>

<TimeStamp start="1:31" end="1:40">

```ts
useEffect(() => {
  getProducts().then((products) => {
    // setProducts(products);
    dispatch(receivedProducts(products));
  })
}, []);
```

</TimeStamp>