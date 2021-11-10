# Mocking out our API Helper with jest.mock

[Video link](https://www.egghead.io/lessons/egghead-mocking-out-our-api-helper-with-jest-mock?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Instructor: Open up cartslice.test.ts, and at the top of the file import star as API from app/API. Below that, let's add a new test. It'll just say, checkout should work. This will take an async arrow function. In that test, type await API.checkout fake item four.

Now on the right hand side of the screen, we're going to go ahead and run NPX jest in watch mode and we'll use the cartslice pattern to only run this file. You see that our test has failed because fetch is not defined.

If you open up API.ts, you see that we rely on fetch, which is a browser API that doesn't exist natively in node. There are a number of ways to fix this but the easiest way for us to fix it is to mock out the entire API surface.

At the top of our file type, jest.mock../../app/API, and we'll pass in a function. That function is going to return an object with two properties. It's an async method called getProducts and an async method called checkout.

Checkout is going to take items, switch default to an empty object, and we need a comma in between these two. In our getProducts method, we're just going to return an array. In our checkout method, we're going to have a little bit more logic.

Type const empty = object.keysitems.length triple = 0. We're going to check if it's empty. If it is empty, we're going to throw a new error, must include cart items. This is actually similar logic to what our API does, but since we're mocking out, we need to recreate it here.

Then if items.bad, item is greater than zero, turn success false. Otherwise, return success true. Here we're mocking out our API. You can see just by mocking that out, our checkout test is already passing, but you will notice that we are having some typescript errors.

We need to properly type the argument here items. We can simply say API.cart items. With that, our tests are passing and typescript is happy.
