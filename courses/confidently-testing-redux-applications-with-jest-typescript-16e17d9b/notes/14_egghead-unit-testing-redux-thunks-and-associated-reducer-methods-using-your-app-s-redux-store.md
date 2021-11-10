# Unit Testing Redux Thunks and Associated Reducer Methods using Your App's Redux Store

[Video link](https://www.egghead.io/lessons/egghead-unit-testing-redux-thunks-and-associated-reducer-methods-using-your-app-s-redux-store?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Jamund Ferguson: Open up store.ts and add a new variable at the top called Reducer. The value of that should be the value of the reducer object currently passed into our configureStore() method. Below our existing store, export a function called getStoreWithState(). That function is going to take a single argument called preloadedState, which is optional and will be of type rootState.

Inside that function, type return configureStore, pass it an object with Reducer and our preloadedState. We continue to export the normal version of the store here, as well as a new function which allows stores to be generated dynamically with preloadedState for our test.

Now, back in cartslice.test.ts, let's also import getStoreWithState form app/store. Down at the bottom of the file in our thunk describe block, add a new block called "Checkout cart with full redux store".

Before we write our test, I want to quickly run our test coverage again, and take a look at something. We open up the coverage report, go into cart and cartSlice. You can see everything in it is tested except for these three extra reducers. Each of these are specific cases corresponding to different actions that are emitted from our checkoutCart thunk.

Back in cartSlice, we're going to start with two tests, it.todo("should checkout with items") and it.todo("should fail with no items"). These should be very similar to the tests that we've already written previously for our thunk.

We'll kick off our test in watch mode. We'll get started on the first test. Like the others, this will be an async function. Like the others before, it's going to require that we set up some state. We know that this needs to be of type rootState.

We'll say products is an object with no products and cart, it's going to be an object with errorMessage: "", checkoutState: "READY". In this case, we'll have items of testItem: 3.

If you're like me and you find it annoying to type and re-type this many times, I strongly suggest putting together a little utility function which we can put at the bottom of our file called getStateWithItems.

Type function getStateWithItems. We're going to pass in our items, which is just going to be a record with a string and a number. That's going to return rootState.

We can copy the state that we've been creating here and replace the items here with the items passed in. We now have our helper function. When I need state, I can say const state = getStateWithItems. In this case, we'll say testItem: 3.

With that helper in place, let's go ahead and finish up this test. I'll need to grab a copy of our store by saying const store = getStoreWithState, passing the state. Then, as we've done previously with our mockStore, I can say await store.dispatch(checkoutCart()).

Because this all runs through Redux Toolkit, I don't have to do any kind of casting. It knows exactly the type that it should be. For my expect, I'm going to say (store.getState().cart).toEqual. After it's finished up with our test, we should have items: errorMessage: "", and the checkoutState should once again be "READY".

This is a slightly different way to write our test. We're not asserting what actions were fired. We're asserting that they did the thing that they were supposed to do. In this case, when our checkout is fulfilled, we know that it clears out the items.

Let's see how that looks with "should fail with no items", it("should fail with no items", async (), copy the first few lines of the old test to get it set up. Here, we'll say getStateWithItems(""). call await on checkoutCart. We should be able to expect(store.getState().cart).toEqual.

In this case, the item should still be empty of course, but checkoutState should be "ERROR" and errorMessage, probably going to be similar to the one we had before, "Must include cart items". You can see here in our failing test, indeed "Must include cart items" there. It looks like both of our tests now passed.

Let's go take a look at Code coverage and see where we ended up. You can see that with those two simple tests, we were able to cover almost all of our missing reducer cases. By using the real Redux store, we were able to test our reducers and our thunks at the same time.

Let's recap some of the techniques we used. In store.ts, we took advantage of the preloadedState option of configureStore to create a getStoreWithState function for us to use in our tests. Over in our cartSlice.test, we made a helper function called getStateWithItems to simplify the process of generating state.

Lastly, in our test, we took advantage of the fact that store.dispatch returns the dispatched action, in this case our thunk action, and awaited it so that we could wait until our thunk actions were applied to our Redux store before asserting on the data.

These new tests we wrote using the real Redux store essentially make the previous test we wrote using the mock Redux store and the mock dispatch function obsolete.
