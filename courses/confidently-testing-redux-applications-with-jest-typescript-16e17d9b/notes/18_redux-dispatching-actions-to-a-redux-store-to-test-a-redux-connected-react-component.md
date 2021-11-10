# Dispatching Actions to a Redux Store to Test a Redux Connected React Component

[Video link](https://www.egghead.io/lessons/redux-dispatching-actions-to-a-redux-store-to-test-a-redux-connected-react-component?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Instructor: ...start just up in watch mode with a filter for the cart link test. Then, open up cartlink.tests.TSX, and import add to cart, update quantity, and remove from cart, from ./cartSlice.

Since we're using the same Redux store as our app here, the easiest way to populate data into the store is by dispatching actions such as these and letting the reducers update the store for us.

Now, let's add two new tests. Tests.todo should show text when there are no items and should show the correct number of items. The first one is extremely straightforward.

We're going to use Render with context to render the cart link. Then, we're going to look for the link on the page using screen.getByRole link, and then we're going to expect our link to have text content of cart. We're also going to expect it to not have text content of zero or one.

We want to make sure that it's not saying zero items or anything like that. All right, so that's passed. Now, our second one is going to be a little bit more complicated here.

We're going to start it off by adding one item to the cart. We can just type store.dispatch(addtocart), and what we're going to add to the cart is test item, something that doesn't actually exist, but it works for these purposes of testing.

It works for our purposes of testing. Below that, we will also render with context our link. Below that, we will render our cart and grab the link out of the page.

Now, we can expect link.two have text content of one. We've added one item to the cart. There should be one item on the page. Great. Now, that should show the number one on the page, something like this.

What if we want to add a few more items to the cart? We can say store.dispatch(updatequantity), and in this case, we need an ID or we use test item, and the quantity here will be five.

Now, we should expect the link to have a text content of five. We can even add another item. That should bring us up to six, and if we remove both test item and another item, we will be back to having the text content of cart.
