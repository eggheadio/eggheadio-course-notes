# Unit Testing Redux Thunks using Redux Mock Store

[Video link](https://www.egghead.io/lessons/egghead-unit-testing-redux-thunks-using-redux-mock-store?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Jamund Ferguson: In a terminal window, type npm install-DRedux-mock-store. Then in cartslice.test.ts, go ahead and import configure store from Redux mock store and import thunk from Redux-thunk.

Even though we didn't install it, it should already be there because of our dependency on Redux toolkit. Just before our mock here, type const mock store = configure store, and we're going to pass in an array of middlewares.

In this case, we're only going to have the thunk middleware. With our mock store set up, go ahead and scroll down to the bottom of the page and our thunks block, and we'll add a new describe block here. This one will say, checkout cart with mock Redux store.

Inside of that, our first test will be, it should checkout. It's also going to be an async function. Our next test which we'll leave us to do for now, we'll say it should fail with no items.

Now, within our first test, type const store = mockStore, and then we're going to pass in all the data that we want to exist inside of our store. For this case, we're going to keep it very specific to what we need.

We're going to have the cart reducer that's going to have items and items is going to have a single item, we'll call test item, and we'll have three of those in our store.

Now, below that, type await store.dispatch, and we're going to dispatch the checkout cart action. While this is getting ready, let's go ahead and run just in watch mode with a filter on cartSlice, and let's take a look at what TypeScript is complaining here.

It's basically saying store.dispatch, the one that mock store provides for us, does not like the async thunk action that's created by Redux toolkit. Mock Redux store and Redux toolkit are having a little bit of disagreement about what an action should look like.

In this case, we're going to opt out of the drama and just say, as any, and we know absolutely that this is supposed to work. If you have a better suggestion here, feel free to leave a comment, but I think this works just fine.

The next thing we're going to do is type const actions = store.getActions. The cool thing about mock Redux door is that it keeps track of all the actions that get fired off. We're going to model this very similar to how we modeled our dispatch calls appear.

In fact, I'm going to bring that down as an example. We'll say we expect actions to have a length of two. We expect the first action to have a type of cart/checkout/pending, and we expect our second action to have a type of cart/checkout/fulfilled, and a payload of success is true.

Let's go ahead and fill out the second test. We'll start by copying the first one. We'll get rid of our items. We'll make it an async function.

Based on what happened here, we can expect type to be rejected, payload to be undefined, and the error.message on our section action to say must include cart items. What do you know? It passed.

At the end of the day, using the mock redux store is not that different from mocking out dispatch and calling our thunks directly, but it is just a little bit cleaner.
