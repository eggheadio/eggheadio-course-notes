# Using Jest in Watch Mode with test.todo to Test a Redux Reducer

[Video link](https://www.egghead.io/lessons/egghead-using-jest-in-watch-mode-with-test-todo-to-test-a-redux-reducer?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Jamund Ferguson: In your IDE, open up cartslice.ts, and scroll down to our createSlice() method. Here you can see that we have three reducer methods -- addToCart(), removeFromCart(), and updateQuantity().

Further down in this file, you can see that we export actions associated with all three of those methods. Go ahead and copy that now, and create a new file in the cart folder called cartslice.test.ts. At the top of that file, import cartReducer, paste in those actions from ./cartslice.

Below that, let's create a describe block for our cartReducer. Inside of that, type test.todo addEmptyAction, test.todo, addToCart, test.todo, removeFromCart, and test.todo, updateQuantity.

Now, open up a terminal window side-by-side with your IDE. I'm going to type npx jest -watch. Now, this by default will watch for all the files, but I'm going to press the P key to filter on a pattern. I'm going type cartSlice for that pattern so it only watches this one file. When I do that, it shows me all the tests that are pending for this file.

Let's start filling out the empty action test. I'll say const initialState = undefined; const action = { type: ""}; const state = cartReducer. Pass in that initialState, which is just empty, and our action.

Then, we can say expect(state).toEqual, checkoutState: "READY", errorMessage: "". It's not going to have any items for us. As I click Save, you can see this test now passes.

Let's now move on to the second test. We'll go ahead and use this as a starter for us. Paste that in there, except instead of this for action, we'll say addToCart. We're just going to need to put in an ID that we want to add to the cart. In this case, we'll add a product called ABC. Once that gets added, we can expect it to have an item of ABC with a quantity of one.

For this test, we're also going to include the ability to addToCart an additional time. We can change const to let there on our state. Then, we'll say state = cartReducer, state and we'll pass in the same action. We'll do that twice. We'll simulate basically pressing Add to Cart button three times. We should see now, there are three items in the cart.

Next up, removeFromCart. Again, we'll take the last test as our boilerplate. Stick this in here. Because we're removing from cart, our initial state is going to need to include some items in the cart. We'll say ABC [1] and DEF[3] here for initial state. For action, we'll say, "Remove from cart." We're going to be removing ABC from the cart and then, for the output, we're just expecting this to have DEF[3] .

We can get rid of this other stuff down below. You see we've got this error here. Basically, TypeScript is saying that we have something slightly wrong with our definition here.

The best way to handle that is to actually import the cartState type directly from our cartSlice and down here, when we're defining our initialState, we'll actually say, this is going to be of type cartState.

Now, the cart reducer is happy. Now that it knows for sure that we're looking at the same type of object. Lastly, we're going to test our updateQuantity() method.

For this one, it'll be nice for it to start with some initialState instead of calling removeFromCart, we'll say updateQuantity. This is going to take an object with an ID that we're updating.

In this case, we'll update DEF, and it's going to have a quantity of five. If we do that, at the end here, we should see ABC [1] , DEF[5]. With that in place, we now have tested all of our cart reducers.
