# Using React Testing Library's findBy Methods to Test Asynchronous Behavior

[Video link](https://www.egghead.io/lessons/redux-using-react-testing-library-s-findby-methods-to-test-asynchronous-behavior?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Instructor: Go ahead and start Jest up in watch mode, with a filter on Products.Test. Now in products.test.tsx, add a new test called Each Individual Product Should Contain A Heading. That will also take an async function.

Inside of that test, let's go ahead and renderWithContext, products. Then, below that, type for let product of myProducts, and then inside of that, await Screen.findByRole, the Role will be Heading. Then let's pass in an Options object, name of Product.Name. Go ahead and save that. You can see that it passed.

Now, this is interesting, because we already knew from before that immediately after renderWithContext, that after Products is rendered, it doesn't actually have any products. In fact, if we do const debug = renderWithContext, and execute debug here, you'll see that we don't have any products.

What's happening is, when we call findByRole instead of getByRole, findByRole with await actually waits until the heading is found. I don't know, it waits a certain number of seconds before it will time out.

It gives you that time, so we don't need to expressly call await before we can just say, "Wait until you find a heading that matches, and when you do, continue on with your test."
