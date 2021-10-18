# Handling Custom Actions in our Slice with extraReducers and the Builder API

[Video link](https://www.egghead.io/lessons/react-handling-custom-actions-in-our-slice-with-extrareducers-and-the-builder-api?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

Jamund Ferguson: [0:00] The reducer's option in Redux toolkit's createSlice() function provides a convenient syntax for creating reducer functions and generating their associated actions in a single step. You might be wondering if it's possible to untangle those two steps. How can I handle actions in this reducer that weren't generated here? What if I want to have a custom action creator?

[0:18] Both of these things are totally possible. Down below reducers add a new property called extraReducers. This is going to be a function that takes an argument called builder. The builder API provides very similar functionality to the switch statement, which is commonly used in reducers, but instead of switching through all the cases by action type, you define cases like this.

[0:39] Go ahead and type builder.addCase() and for the type say "cart/checkout/pending" and the second argument is our reducer function. It takes in a state and an action and we use arrow function syntax here. Then in the body type state.checkoutState = "LOADING". Any time a component dispatches the cart/checkout/pending action, we'll be able to handle it in this reducer.

[1:06] Go ahead and save this file and open up Cart.tsx. Underneath our onQuantityChanged() function, type function onCheckout(). That's going to take an argument e, which is a type React.FormEvent. It's going to take an HTMLFormElement. That's the thing that we're submitting.

[1:23] Inside of there the first thing we want to do is call e.preventDefault. That prevents the form from submitting. Below that, dispatch and then we're going to pass in an object with a single property type with a string "cart/checkout/pending". Let's hook up the onCheckout event down in our form by saying onSubmit = onCheckout.

[1:45] If we go back to our cart page and click Checkout, you can see that the table is now faded out because it's in the loading state.
