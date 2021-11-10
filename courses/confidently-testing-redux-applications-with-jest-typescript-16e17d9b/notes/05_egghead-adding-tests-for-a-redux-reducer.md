# Adding Tests for a Redux Reducer

[Video link](https://www.egghead.io/lessons/egghead-adding-tests-for-a-redux-reducer?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Jamund Ferguson: Inside of Products, in the Features folder, create a new file called productslice.test.ts. Now let's open up productslice.ts and see what it is that we'll be testing. If you look at this file, there's really not a lot going on here, except for this one reducer method when we receive new products.

You can see that it takes a payload with an array of products. It converts them into an object, which gets saved on the internal Redux state for this slice. Let's go ahead and test it now.

Back in productslice.test.ts, import productsReducer from ./productSlice. We also want to import a named export called productsReceived. Now, below that, type describe. We'll be describing the productsReducer, pass an error function. Then we'll write a simple function that says, "It should return the initial state and passed an empty action". This is the most basic test we can do on our reducer.

We'll say const initialState = undefined; const action = { type: "" }; const result = productsReducer(initialState, action). Finally, I expect(result).toEqual, and in this case, it's going to equal empty object with the key of products that also has an empty object inside of that.

Save that. Open up the terminal window. We'll type npx jest -- productsSlice. We just want to run the tests associated with this file. You can see that it passed.

For our next test, we're going to start by making a copy of the first one. We'll say it, in this case, it's going to say, "Should convert the products received to an object". To get this to work, we're going to need to import our products from public/products.json.

Those are the mock files that we're using on our server. We'll use them in our tests as well. Here, for our initialState in our test, we'll keep it as undefined. For action, we're going to say productsReceived(products). The result statement's the same.

For our expect statement, this obviously isn't going to work anymore because we expect it to actually have products. We'll say expect(Object.keys(result.products).length) to equal products.length.

This should have the same number of products stored in the resulting state as was found in our initial array. Now let's confirm that all the products have the right information. We'll say, products.forEach.

For each product, we will expect result.products, product.ID to equal the current product that we're looking at. Every single one of the products in our mock products data, the one that we use to power the website, all of those need to exist here in our resulting products in our redux store.

We'll open up command line, rerun those tests, and turns out we need to import received products rather than products received. No big deal. We can change that here. npx jest --productSlice. Both of those pass. Now take a look at what this gives us in terms of our code coverage.

I type npx jest --coverage, and then -- productSlice. We'll see the coverage generated only by testing this file. Open up that coverage report and you can see now that there's a little bit of coverage here in the products folder and that our product slice is actually 100 percent tested.
