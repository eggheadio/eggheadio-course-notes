# A Comprehensive Example of Testing Redux Connected React Components

[Video link](https://www.egghead.io/lessons/redux-a-comprehensive-example-of-testing-redux-connected-react-components?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Instructor: Open up your IDE and start jest in watch mode. Then make sure to import wait for from testing library/react. Now at the bottom of your test, add a new one called should clear items after checkout.

This one, we'll start by setting up our checkout spy to mock the result value once of success true. The rest of the setup for this test, we're going to grab from the removed items tests, including confirming that the cart has a total of $71 with its carrots and bunnies.

We're also going to confirm the number of rows by typing expect screen.getAll by roll row to have length four. Now type const checkout = screen.get by roll button, the name of checkout, and user event.click checkout. Now for the key part of this test.

Await, wait for, pass in our function. Make sure we have an async function. Then in our wait for callback here, we're going to wait for the total text to be zero and for the table to have only two rows. We can also expect that screen.get by roll table is not going to have class checkout error.

We started off here four rows with a total of $71. We clicked checkout and waited until the table was empty and there were only two rows, the header and the footer. We also have noted that there's no errors.

This all relies on us using checkout spy.mock result value once to ensure that our checkout was a success without actually having to hit the network.
