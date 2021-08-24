# Handling Errors in Async Thunks with builder.addCase()

[Video link](https://www.egghead.io/lessons/react-handling-errors-in-async-thunks-with-builder-addcase?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

<TimeStamp start="0:05" end="0:10">

```ts
export interface CartState {
  items: { [productID: string]: number };
  checkoutState: CheckoutState;
  errorMessage: string;
}

const initialState: CartState = {
  items: {},
  checkoutState: "READY",
  errorMessage: ""
}
```

</TimeStamp>

<TimeStamp start="0:25" end="0:35">

```ts
builder.addCase(checkoutCart.rejected, (state, action) => {
  state.checkoutState = "ERROR";
  state.errorMessage = action.error.message || "";
})
```

</TimeStamp>

<TimeStamp start="0:40" end="0:00">

```ts
const errorMessage = useAppSelector(state => state.cart.errorMessage);
```

</TimeStamp>

<TimeStamp start="0:55" end="1:10">

```tsx
{checkoutState === "ERROR" && errorMessage ? (<p className={styles.errorBox}>{errorMessage}</p>) : null}
```

</TimeStamp>