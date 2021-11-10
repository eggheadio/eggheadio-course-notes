# Using Preloaded State from Multiple Reducers for Testing a React Component

[Video link](https://www.egghead.io/lessons/redux-using-preloaded-state-from-multiple-reducers-for-testing-a-react-component?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Instructor: For the next test, open up cart.test.tsx and import the Product type from app/API. Now add a new test called Cart Should Display Correct Total. For this one, we're going to need some items in our cart. Type const state equals, and go ahead and import at the top, getStateWithItems from TestUtils.

For this, we're going to pass in an item with an ID of TestItem, and we will purchase three of those. For the total to display, we also need a price. To do that, we need to add some products. We'll create a product with an ID of TestItem. For this to show up properly, we're going to need a name. We'll call it TestProduct, and a price. We'll make this one $11.11.

Now, this works fine, except you'll notice that TypeScript isn't happy with this. This is only part of the definition of a product. It's enough to render what we want rendered. For that, we're going to cast it as a full product. That makes TypeScript happy. That's why we had to pull in the type from app/API.

With this, we can now say renderWithContext cart, and pass in that state. Now let's grab some of our previous statements and apply them here. We can say, expect now to have three rows, and expect the total to be $33.33. If you run our test, you can see that that will pass.

Nothing too special here. We just rendered our cart with some pre-builtin state, this time using both Items and Products. In order to get Products to work without all the required fields, we cast it as a product type.
