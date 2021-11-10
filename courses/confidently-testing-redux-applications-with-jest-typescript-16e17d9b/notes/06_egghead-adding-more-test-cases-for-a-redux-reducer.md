# Adding More Test Cases for a Redux Reducer

[Video link](https://www.egghead.io/lessons/egghead-adding-more-test-cases-for-a-redux-reducer?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Instructor: Even though Jest says that our reducer method has 100 percent test coverage, we're actually not testing every possible scenario yet. There are actually at least two additional cases that we really need to check.

Go back into your test and type, "it should not allow same product to be added more than once." Here, I'm going to start with the previous test as my base. I'm going to go ahead and add in all of the products and then I'm going to try to add them again.

We're going to do that by changing const to let. Then we'll say at the end here result = products reducer result, action. We're going to rerun the products reducer with the output of the last run of products reducer and then save that output to result.

What we want to see is exactly six items and no more than that. Let's go ahead and run it and see what happens.

Npx jest --product slice, and we're passed. For our next test, let's just copy this one. We'll say, our products reducer should allow multiple products to be received at different times.

We're going to use the same formula as last time, except when we pass in the products that we want received, we're only going to pass in part of the products in our array. We'll say products.slice 02.

Then we need a new action because we're going to pass in for the second action a different set of products. We'll say const second action = received products, and we'll say products.slice from two to four, which should give us a different set than the first set did.

Then we can say, result = products reducer results second action. We'll expect here that they'll be four items now in our cart. Back in the terminal, we run our tests and indeed it passed as expected.

Just a reminder, even though your code coverage looks really good, there are always more cases that you need to test. Don't just give up at 100 percent coverage. Think about the cases that your actual application might expect or maybe shouldn't expect to receive.
