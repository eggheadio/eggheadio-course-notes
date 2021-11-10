# Testing Accessible Form Elements with React Testing Library's getByTitle Query

[Video link](https://www.egghead.io/lessons/redux-testing-accessible-form-elements-with-react-testing-library-s-getbytitle-query?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Instructor: The next thing that we're going to test is our ability to remove items from the cart. If you hover over the Remove button, you can see a little tooltip, saying "Remove bananas from shopping cart." That shows up because our Remove button has a title.

If you look at the WebAIM Accessibility Guidelines, the form field has a title attribute but no label. Screen readers will treat the title as a label. In a terminal window, go ahead and start Jest up in watch mode, and then open up cart.test.tsx. At the bottom of the page, add a new test called Removing Items Should Update Total. That's going to take an async function.

Inside of that test, type const state = getStateWithItems. In this case, for items, we're going to say carrots, two, and bunnies, three. We need to create those products, so carrots, name, carrots, price, $5.50, as product. We'll do something similar for our bunnies here. Bunnies for an ID, a name of bunnies, and we'll make these cost $20 each.

All right, with that in place, we can type render with context cart and pass in our state and then screen.getByText $71, the selector of .total.

So far, we've just confirmed that we have a number of items in the cart and the total is correct. Next type const remove bunnies, grow screen, getByTitle. Once again, we'll pass in a regular expression and we'll say remove bunnies. Let's see if that works for us.

It looks like it found that button. Now we can type userevent.click move bunnies. Now we can expect screen.getByText.total to be only $11. Let's do the same thing with our carrots. Copy those last three note lines.

This one we'll call remove carrots and we'll say getByTitle remove carrots, userevent.click remove carrots. Then after we remove both the carrots and bunnies our total should be zero dollars and zero cents.
