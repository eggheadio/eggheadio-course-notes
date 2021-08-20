# Using the Response from an Async Thunk to Update the Redux State

[Video link](https://www.egghead.io/lessons/react-using-the-response-from-an-async-thunk-to-update-the-redux-state?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:25" end="0:40">

```ts
builder.addCase(checkoutCart.fulfilled, (state, action: PayloadAction<{ success: boolean }>) => {
  const { success } = action.payload;
  if (success) {
    state.checkoutState = "READY";
    state.items = {};
  } else {
    state.checkoutState = "ERROR";
  }
  state.checkoutState = "READY";
});
```

</TimeStamp>