# Unit Testing a Memoized Selector that Derives Data from Multiple Reducers

[Video link](https://www.egghead.io/lessons/egghead-unit-testing-a-memoized-selector-that-derives-data-from-multiple-reducers?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Instructor: In cartslice.ts, scroll down to the bottom of the file where we define our selector. For this lesson, we'll be testing the getTotalPrice selector, which you can see relies on data from both the cartReducer and the productsReducer. It uses this data to calculate the total price of all the items in your shopping cart.

Now, open up the test file and scroll down to the bottom where you have the selectors describe block, and add a new block for getTotalPrice.

Inside this block, we're going to set up five tests, one, two, three, four, five. These ones are going to be, "Should return zero with an empty cart," "Should add up the totals," "Should not compute again with the same state," "Should recompute with new products," and "Should recompute when cart changes."

With those to-dos set up, let's set up Jest in watch mode and get started fixing these tests. To populate the products for our test, we're going to go ahead and import products from public/products.json. We also need to import getTotalPrice from cartSlice.

For our first test, let's create our state, const state: RootState equals empty object cart. You know that cart state needs to say checkoutState: "READY", errorMessage: "", and we'll have no items. We're also going to need products and products is going to have an object with a key of products. It has no product in it. So far, so good.

We're going to test. It doesn't actually do anything. Now, we can say const result = getTotalPrice(state) and expect(result).toEqual("0.00"). So far, so good.

Let's go on to the next one, "Should add up the totals". Let's start with something similar to what we had here, except we're now going to need to put in some products. We can reference products from our products.json source file.

These are stored in an array of objects so we're going to use the computed property syntax to grab the IDs. We'll say products, products [0] .id in these square brackets. That will reference product zero.

We'll have a second product, products [1] .id and that will reference product one. This state has two products for sale. Let's go ahead in our items here. We'll say products[0]. Let's have three of those and products[1], have four of those.

I don't know what this price is already. We'll see what the test said. It's 43.23. We'll use that to update our test with the correct value. At this point, we have two tests passing.

Let's get on to the third. For this one, we copy the previous test over, but we also need to check for one more thing.

Just above our selector, we'll say, getTotalPrice.resetrecomputations, and at the end we'll say expectgetTotalPrice.recomputations, got two=one, then we'll call the total price again with the same state and we'll confirm that getTotalPrice.recomputations is still equal to one.

We'll continue to use this format for the rest of our tests. It should recompute with new products. We'll start here.

We just need to update the products, state.products.products, and we're going to have it equal a brand new object with both of these products as well as a third one.

We're also going to verify that the result stayed the same even though I changed the products. We can do that by copying this test down here and redefining the result.

We're expecting in this case recomputations to equal two, but you'll notice that's not doing that. The test is failing and that's because create selector expects you to pass in a new object each time you call getTotalPrice.

If it notices you pass in the exact same object as before, even if you've modified some of the values, it's going to send you back the same result. We need to make sure when we're calling into our selectors here in our test, we're always creating a copy of the state.

With that, it's going to say, "Hey, there's some new products," and now we've gotten this to work. Finally, for updating the cart, we'll go ahead and copy this initial setup again.

We then want to readd that, make sure that recomputations is two the second time. We'll create a copy of state. In order to change it, we'll say, state.cart.items =emptyobject, and not it expect the result to be 0.00.

Excellent. We've now proved that, when you pass in the same state, it doesn't recompute, but it will recompute with new products or with changes to your cart.
