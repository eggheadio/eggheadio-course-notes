# Using the Response from an Async Thunk to Update the Redux State

[Video link](https://www.egghead.io/lessons/react-using-the-response-from-an-async-thunk-to-update-the-redux-state?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

Jamund Ferguson: [0:00] If we go into our store and add some products and then go to the Checkout page and open up our web inspector, you'll notice that when I hit Checkout, I'm calling checkout-success.json and it comes back saying success: true.

[0:12] What happens if for some reason that comes back saying success: false? How do we handle those responses? Open up cartSlice.ts and head down to the builder case for checkoutCart.fulfilled. Let's add a second argument here of action, and this one is going to be of type PayloadAction. The payload itself is going to be an object with success as a Boolean.

[0:31] In the function body, we can type const { success } = action.payload. Then we can say if (success) set state.checkoutState to READY and state.items to empty object, basically resetting our shopping cart, after we check out. Else, if for some reason it wasn't successful, then we'll set state.checkoutState = "ERROR".

[0:53] All right, let's go see how that looks. Let's go add some products. When I click Checkout, if it comes back successfully, it actually empties the cart.
