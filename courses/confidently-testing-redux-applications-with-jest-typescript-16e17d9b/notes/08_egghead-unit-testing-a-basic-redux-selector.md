# Unit Testing a Basic Redux Selector

[Video link](https://www.egghead.io/lessons/egghead-unit-testing-a-basic-redux-selector?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Instructor: Open up cart slice.test.ts. At the bottom of the file, add a new describe block for selectors. Inside of that, we're going to add a nested describe block for the getNumItems() method. We're going to write two todos.

It.do should return zero with no items, and it.todo should add up the totals. With those in place, let's go ahead and start Jest in watch mode by taking npx jest --watch. We specifically only care about watching the test in the cart slice.

I'll take --cart slice to apply the filter when I run the command. You can see that I've got this nested, getNumItems() section with two tests that need to be written. Quickly open up cart slice.ts and scroll down to getNumItems(). You can see it's a very simple function.

It's clear what it does. You'll also notice that for its input, it takes root state. So far in this course, we've been looking at the state for an individual reducer, the root state is the combined state of all the reducers. We need to take that into account when we test this particular function. You can see that root state is imported here from app/store, where we configure the Redux store with all of our reducers.

Given that, let's go ahead and import type root state from app/store. We also need to import getNumItems() from cart slice. Now let's finish the first of our to-dos. Then we'll say const cart: cart state = an object.

Once again with the checkout state of ready and an error message, then empty string. For this, we don't want any items. Next we'll say const results = getNumItems. Remember, we can't send in cart here because it's expecting root state.

Root state cart is actually living inside the cart property on root state. We can say, object space cart as root state. Finally, expect result.two = zero. With no items, our cart should return zero for the total. Let's copy this exact setup for our next test.

Except this one we'll set six items. A, B, C, and D, E, F, which they equal to six. It looks like those both passed.
