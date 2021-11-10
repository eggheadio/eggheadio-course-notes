# Testing Visible Text with React Testing Library's getByText Query

[Video link](https://www.egghead.io/lessons/redux-testing-visible-text-with-react-testing-library-s-getbytext-query?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Instructor: For this next set of lessons, we're going to be testing our shopping cart page. Go ahead and pull this up. Take a look around and think about all the different things you might want to test on this page. We need to make sure that the total is correct.

We need to make sure that each item has the correct. We need to make sure that each item in our cart plays correctly and that quantity, remove, and checkout all update as expected. Give that a look around and then go back into your code.

Inside of your cart folder, add a new file called cart test.tsx. In this file, we're going to import React from React. We're also going to import screen from React testing library from testing library/react. We're going to import render with context from our test utils.

We're also going to import the cart component from ./cart. With our import setup, type test and empty cart should not have any items. Seems pretty straightforward, right?

Inside of here, we're going to type render with context, cart and below that we'll say, const rows = screen.getAllByRoll row. At first, if we don't have any items, we just have two rows, the header and the footer. We can say, expect rows.two have length two.

Now we need to get this total. For the total, we can say screen.getByText $0.00. Then for options, we can say selector.total. Now let's run our tests here. You can see that, it pass.

You'll notice that I didn't expect on our total here, and that's because screen.getByText will actually throw an error if it doesn't exist. If we rename this selector totally, for example, instead of total, you can see that it would fail with unable to find an element with a text $00.

Similarly, if we set this to $9, and kept the correct selector, and we ran our test, it would continue to fail for the same reason. Let's fix this. We run our tests and we're all set.
