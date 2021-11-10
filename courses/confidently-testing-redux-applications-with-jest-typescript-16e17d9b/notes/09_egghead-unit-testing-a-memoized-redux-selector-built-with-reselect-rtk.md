# Unit Testing a Memoized Redux Selector Built with Reselect/RTK

[Video link](https://www.egghead.io/lessons/egghead-unit-testing-a-memoized-redux-selector-built-with-reselect-rtk?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Instructor: ...open up cartslice.ts and scroll down to the getMemoizeNumItems() function. Notice that this function here is created using createSelector(). Even though this createSelector() method takes in two functions, getMemoizeNumItems() only takes in root state, similar to getNumItems().

Back in our test file, go ahead and import getMemoizeNumItems(), and then scroll down till we get to the selectors block. Add a new describe block for getMemoizeNumItems(). We can go ahead and add a few to-do tests here as well. It.todo should return with no items, just like our other getNumItems() function.

It.todo should add up the totals, but because this is a memoize function, we also need to take that into account. It.todo should not compute again with the same state. It.todo should recompute with new state.

Let's fire up Jest in watch mode and start putting these tests together.

For the first two, we can literally copy the same test that we previously built for getNumItems(). We'll replace those to-dos with this and all we need to do is change the getNumItems() call in here to getMemoizedNumItems(). All right.

You can see that those are working and we didn't really have to do much work since we'd already written those tests before. For this next test, should not compute again with the same state, we're actually going to start with the same body as our previous test.

Before we calculate our result, we're going to run getMemoizedNumItems().reset recomputations. The createSelector() method in RTK comes with a built-in count of how many times it is recomputed a certain value.

We're going to reset that at the beginning of our tests to make sure that we can count it properly as we run the selector. Instead of listening for the result, we're just going to run the function and then say, expect getMemoizedNumItems().recomputations to equal one.

Now we're going to rerun the function with the exact same data and recomputation should continue to equal one. To be extra safe, we can rerun it three or four times and it never recomputes. We'll copy the first half of that last test here and paste it into the body of our final one.

For this final test, we need to confirm that when we change the state, the value gets recalculated. The way that we'll do that, after we test it the first time, we'll set cart.items to a new object, but there's two ABC's only.

Then we will rerun getMemoizedNumItems() and expect recomputations to equal two. We can confirm all the behaviors working as expected here using reset recomputations at the top, and then asserting that the number of recomputations is correct.
