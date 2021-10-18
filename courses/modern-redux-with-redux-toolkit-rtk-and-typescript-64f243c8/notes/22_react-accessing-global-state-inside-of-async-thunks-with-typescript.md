# Accessing Global State inside of Async Thunks with TypeScript

[Video link](https://www.egghead.io/lessons/react-accessing-global-state-inside-of-async-thunks-with-typescript?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:02" end="0:08">

`thunkAPI`: an object containing all of the parameters that are normally passed to a Redux thunk function, as well as additional options.

</TimeStamp>

<TimeStamp start="0:10" end="0:20">

```ts
export const checkoutCart = createAsyncThunk("cart/checkout", async (_, thunkAPI) => {
  const sate = thunkAPI.getState();
  const items = state.cart.items;
  const response = await checkout(items);
  return response;
})
```

</TimeStamp>

<TimeStamp start="0:50" end="1:05">

This is a long convoluted way to get to the correct typing but isn't necessarily the best way.

```ts
export const checkoutCart = createAsyncThunk<{
  success: boolean}, 
  undefined, 
  { state: RootState } 
>("cart/checkout", async (_, thunkAPI) => {
  const sate = thunkAPI.getState();
  const items = state.cart.items;
  const response = await checkout(items);
  return response;
})
```

</TimeStamp>

<TimeStamp start="1:15" end="1:20">

This is what is easiest and still works just as fine.  

```ts
export const checkoutCart = createAsyncThunk("cart/checkout", async (_, thunkAPI) => {
  const sate = thunkAPI.getState() as RootState;
  const items = state.cart.items;
  const response = await checkout(items);
  return response;
})
```

</TimeStamp>