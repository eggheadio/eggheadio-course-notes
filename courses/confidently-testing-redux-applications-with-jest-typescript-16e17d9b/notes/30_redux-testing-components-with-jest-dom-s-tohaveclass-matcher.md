# Testing Components with jest-dom's toHaveClass Matcher

[Video link](https://www.egghead.io/lessons/redux-testing-components-with-jest-dom-s-tohaveclass-matcher?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Instructor: For this next lesson, we're going to test what happens when you try to checkout and there are not items in your cart. We should the cart itself wrapped in a red border. We should also see this error, "Cart must not be empty."

Start up Jest in watch mode and open up cart.test.tsx. At the top of the file, we're going to change our import of API from just importing the product type to importing * as API from app/API. Then, below that, type Product = API.Product. That way, all of the references we have to as Product will remain working as before.

Now type const checkoutSpy = jest.spyOn(API). In this case, we're going to spy on the checkout method. Down at the bottom of the file, let's add a new test called Cannot Checkout With An Empty Cart. Inside of that test, we're going to render with context car component without any special state, which means it should be empty.

Then, we're going to grab hold of the checkout button, with screen.getbyroll button, and with the name of checkout. We're also going to grab a hold of the table, const table=screen.getByRole table.

Initially, we want to expect that the table does not to have class checkout loading. We're not in any sort of loading state. Then, we're going to click on the checkout button, and then we will expect our table to have class checkout loading at least for a little bit.

Then, we're going to use awaitscreen.findbytext to wait for the error text, cart must not be empty. That's going to require us to have an async function here.

When the cart comes back with this error, also expect table to have class of checkout error. Now, when we go to run this test, you'll see that it doesn't pass. If you scroll up, you can see why.

In our error box, we see the message, "Fetch is not defined." We haven't actually marked out our API. To do that at the top of our test, we need to type checkoutspy.mockrejectedvalueonce.

That rejected value is going to be new error, "Cart must not be empty." Now, our test passed. Even though we initially set up a spy for api.checkout, until we've a new resolved or rejected value, it was still going to try to hit the server to do our checkout.

Once we set mockrejectedvalue once with our new error, we could see that our table is responding correctly with the right classes and that the error box shows up with the proper text.

If you want to be a little bit more specific, we can also set a selector here for the error box class, and it continues the pass as expected.
