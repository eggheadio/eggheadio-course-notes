# Unit Testing Redux Thunks and Associated Reducer Methods using Your App's Redux Store

<TimeStamp start="2:00" end="2:35">

Create a utility function to generate states for testing:

```
function getStateWithItems(items: Record<string, number>): RootState {
  const state: RootState = {
    products: { products: {} },
    cart: { errorMessage: "", checkoutState: "READY", items}
  }

  return state
}
```

</TimeStamp>
