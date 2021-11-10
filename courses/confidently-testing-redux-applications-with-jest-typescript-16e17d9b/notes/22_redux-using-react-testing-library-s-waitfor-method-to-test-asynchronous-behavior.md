# Using React Testing Library's waitFor Method to Test Asynchronous Behavior

[Video link](https://www.egghead.io/lessons/redux-using-react-testing-library-s-waitfor-method-to-test-asynchronous-behavior?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Instructor: For this next lesson, we're going to be testing our products component. Go ahead and play around with this in a browser to make sure you understand all the functionality that needs to be tested. Open up products.test.tsx.

At the top of the file, import screen and waitfor from @testinglibrary/react. Now we need to import star as API from ../app/API, and import mock products from public/products.JSON. Just above our test, we're going to type const getProducts spy = jest.spy on.

We'll pass in our API and the getProducts method is the one that we want to spy on. Then we can type, getProducts spy.mock resolved value, and then we can pass in mock products. To explain what this is going to do, Jest is going to spy on our API.

Any time you call API.getProducts anywhere in the code we execute here, it's going to notice that.

We can use that to check how many times it was called. We can also use it to override the value. Here we're overriding a function for getProducts, with one that returns all the products in our products.JSON file.

Now in products.tsx, when we call getProducts here, it should actually have products for us to use. We'll leave our debug there for now. Then we'll type await waitfor, we're going to pass in a function that says expect getProducts spy.two have been called times one.

For that to work, we need to make this an async function and we'll put a debug below this as well. Now let's run our tests. We should see two debug outputs here. At first, we have the initial one with no products.

Then after we wait for getProductsBy to have been called, we can see that all the products now exist. Let's get rid of our debug statements now. We'll say, const articles = screen.getAllByRoll article.

That just happens to be the tag that I use for each of these products article tag here. We can say, expect articles.length.two = mock products.length. We should have the same number of articles in the page as we have mock products in our JSON file.

We have no more need for our debug statement, we can get rid of that. Let's rename our test. Several products should be listed.
