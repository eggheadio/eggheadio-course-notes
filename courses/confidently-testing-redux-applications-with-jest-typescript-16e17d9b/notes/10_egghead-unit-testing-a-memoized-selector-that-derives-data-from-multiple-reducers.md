# Unit Testing a Memoized Selector that Derives Data from Multiple Reducers

<TimeStamp start="1:58" end="2:15">

Products in the `products.json` source file are stored as an array of objects, so we use computed properties syntax to reference the product ids: `[products[0].id]`

</TimeStamp>

<TimeStamp start="3:50" end="4:10">

`createSelector` expects a new object to be passed in each time you call `getTotalPrice`. If you don't, it will send back the same result each time. Make sure to always create a copy of the state when calling into selectors in the tests using the syntax `...state`.

</TimeStamp>
