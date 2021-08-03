# Using Thunks to Dispatch Actions Over Time

[Video link](https://www.egghead.io/lessons/react-using-thunks-to-dispatch-actions-over-time?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

Jamund Ferguson: [0:00] While we can only dispatch action objects into the Redux store, Redux Toolkit comes preloaded with a special middleware called Redux Thunk that allows you to dispatch functions.

[0:09] These special thunk functions can then dispatch multiple actions over time. They're super useful in all kinds of situations. Inside of cartSlice.ts, go down to the extraReducers section and let's add another case. This one will be for cart/checkout/fulfilled. Then in that reducer, we'll set the checkout state to "READY".

[0:29] Below our createSlice function, type export function checkout() and inside of that function we're going to return another function which we'll call checkoutThunk. CheckoutThunk takes for its argument dispatch and inside of the function we'll dispatch an action with a type: "cart/checkout/pending". If we want to type that dispatch argument, we can pull in AppDispatch from app/store and use that for the type.

[0:54] In cart.tsx we're going to import the checkout method from ./cartSlice, then down in the onCheckout() function instead of dispatching this custom action, let's dispatch the results of our checkout function.

[1:06] If we head back to our shopping cart and click Checkout, you can see that the state changes continue to be applied properly. If we go back into cartSlice, we can now do something really interesting. Let's add a timer of 500 milliseconds and inside that setTimeout we're going to dispatch another event. This one of type "cart/checkout/fulfilled". Within this thunk we're able to dispatch multiple actions and we're able to do it over time.

[1:30] Let's go back into our browser. We click Checkout. You see that it's pending for a few hundred milliseconds, and then it goes right back into ready mode.
