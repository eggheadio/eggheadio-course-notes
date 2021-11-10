# Additional Redux Thunk Unit Tests for Increased Code Coverage

[Video link](https://www.egghead.io/lessons/egghead-additional-redux-thunk-unit-tests-for-increased-code-coverage?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Jamund Ferguson: ...open up cartslice.ts and scroll down to the checkout cart with full Redux store describe block. Here we'll add three additional tests. It.todo should handle an error response, It.todo should handle an empty error message, and It.todo should be pending before checking out.

If we quickly go to our code coverage, you can see here the case where the thunk is fulfilled, but success happens to be false. That's a time when we need to confirm the checkout state is set to error. There's also a case where a thunk is rejected. However, we don't receive an error message, and we just set that error message to empty string.

The final case that we'll be checking here will be to ensure that we set our checkout state to Loading before it finishes checking out.

Let's go ahead and kick off our test in watch mode. For our first test, let's make sure to use an async function. Inside of that, type const state = getStateWithItems. If you recall, up at the top in our API mock, we put in a special case where someone returns badItem > 0, we return false.

We'll use that here, getStateWithItems({ badItem: 7 }); const store = getStoreWithState, pass in the state. Now, we'll await store.dispatch(checkoutCart()). When that's done, we can expect(store.getState().cart).toEqual({ items: { badItem: 7 }, checkoutState should be "ERROR". The errorMessage will be an empty string. It passed as expected.

For the next one, we'll use the same setup. We'll also use an async function here. Copy the contents over. For this one, we need to update our mocks a little bit. Go to the top. Here, we're worried about throwing an error so we'll say evilItem > 0. Instead of returning false, we're going to throw a new error.

This one is not going to have any error message. We're just going to throw an error. This is not a good practice by any means, but we're trying to be comprehensive and testing all the possible edge cases. Now, we can say evilItem: 7. It should put us in a checkoutState of "ERROR", with an empty errorMessage. Indeed, that worked.

For our final test, checking it where pending, let's go ahead and copy over previous test. This time, we could have a good item instead of a bad one. What we're going to do differently here is save the action after we dispatch. This will dispatch it, but it's not going to complete the checkout process.

During this time, we can assert store.getState().cart.checkoutState is equal to "LOADING". Then, we can await our action that will allow our mock API to return. Then, we can expect getState().cart.checkoutState to equal "READY". We also add one before we fire off our action to confirm we're started in the Ready state. We go Ready, Loading, and then back to Ready again after our checkout completes.
