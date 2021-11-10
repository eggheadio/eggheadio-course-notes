# Unit Testing Redux Thunks with a Mock Dispatch Function

[Video link](https://www.egghead.io/lessons/egghead-unit-testing-redux-thunks-with-a-mock-dispatch-function?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Instructor: ...at the top of cartslice.test.ts, import the checkout cart thunk from cartslice. Now scroll all the way down to the bottom of the file and add a new describe block for thunks. Inside of that, we'll have a second describe block, which we'll call Checkout Cart With Mocked Dispatch.

Inside of that block, we're going to have two tests. It.todo should checkout, and It.todo should fail with no items.

Let's go ahead and set up our Jest watcher with the filter set up on the cartsize file, and we'll get to filling these out. For our first test, the first thing that we need to do is type const dispatch = jest.fn. Below that, we're going to set up some state via type RootState. In order for that to work, we're going to have to put in some products, which for now can be empty.

We'll have to add in our current state, which will be CheckoutStateReady, error message, empty string. For items, we'll have ABC, and we have 123 of those.

The next thing we need to do is call checkoutCart() which is going to return that thunk, that inner function. This thunk here, we need to execute. When we execute it, it's going to return a promise that we can then wait for.

To do that, we need to make our test an async function. Then, we can say await thunk(). We need to pass in a couple arguments. The first thing a thunk function takes is the dispatch method. The second thing is a method called getState(). We can reproduce that here by sending an error function that just returns the state.

The last thing that is required is an argument called extras. In this case, we don't need any of those extras so we can just pass that in as undefined. In order to test this, we're going to take a look at the output of a property called dispatch.mock.calls on a Jest mock function.

Any time you call dispatch, it's going to record that here as a call. In this array that was logged over here, you can see that dispatch was called twice. First, with this action here, carts/checkout/pending. Secondly, with carts/checkout/fulfilled.

Each of these calls are stored in an array so that if multiple arguments are passed in, those can be tracked as well. Let's save that out, const { calls } = dispatch.mock. Then, we can say expect(calls).toHaveLength(2). I'm going to scroll down here.

Let's add another log here, console.log(calls [0] , calls[1]). You can see, the first call doesn't have any sort of a payload. It just has a type. We'll say expect(calls[0], that's the first argument, [0].type).toEqual("cart/checkout/pending"). That's for our first one.

For the second one, which is that calls [1] [0], we want to assert that the type is "carts/checkout/fulfilled" and that the payload is equal to object { success: true }. Let's see if that works. All right. Now, we got a fairly solid test for our checkoutCart thunk.

For this one, we're actually just going to start with the exact same boilerplate because the test is fairly similar. Make sure that's an async function. The only difference here, of course, being that we don't want any items this time. Instead of that single item, we'll get rid of that.

Now, we can expect, it's still going to dispatch twice, but the second action is going to be "carts/checkout/rejected". It's not going to have a payload with { success: true }. In fact, when we log it, calls [1] here, you can see we have the type property. The payload's actually undefined.

We have this error property with a message 'Must include cart items'. Let's assert on that, expect(calls [1] [0].payload).toEqual(undefined) and calls[1][0].error.message.toEqual('Must include cart items'). That's how we can test a thunk with mock dispatch.
