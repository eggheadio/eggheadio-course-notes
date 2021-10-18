# Handling Errors in Async Thunks with builder.addCase()

[Video link](https://www.egghead.io/lessons/react-handling-errors-in-async-thunks-with-builder-addcase?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

Jamund Ferguson: [0:00] Open up cartSlice.ts and add a new property on our CartState interface called errorMessage, which will be of type string. The default error message, of course, is going to be empty string.

[0:10] Down here in extraReducers, where we create the case for checkoutCart.rejected, let's add a second argument called action. This action is not going to be a standard payload action like we're used to up here. It's going to be a modified one that's specifically created for the rejected thunk case.

[0:26] It has a property called action.error and we're going to use that to set state.errorMessage. state.errorMessage = action.error.message. If for some reason that doesn't exist, we will set it to empty string.

[0:38] With this in place, back in Cart.tsx type const errorMessage = useAppSelector(state ==> state.cart.errorMessage). Down at the bottom of the file where we create our form, type {checkoutState === "ERROR" && errorMessage ?.

[0:59] Then, inside the parentheses we're going to type paragraph element className={styles.errorBox}. For the contents of that paragraph, it will just be our errorMessage. If we're not in the error state, we will return null. We have checkoutState === "ERROR" && errorMessage ?, display the error message, otherwise display null.

[1:22] If we go back to our cart and we try to check out, it's going to display the reason why it failed. That worked because anytime you have an async thunk, in the rejected state you get a special action that contains an error property with the error message.
