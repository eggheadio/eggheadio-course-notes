# Simulate Clicks in a Test with the User Event Library

[Video link](https://www.egghead.io/lessons/redux-simulate-clicks-in-a-test-with-the-user-event-library?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Jamund Ferguson: Open up Jest in watch mode, with a filter for Products.Test. Then, in the products.test.tsx file, add a new test called "Should be able to add a banana to your cart." This will be an async function.

The first thing we want to do here is renderWithContext Products. Before we get too far along, let's take a look at our page to see how we're going to be able to get to the button. We can see the block here, featuring bananas. If we inspect the source of that block, we can see that there's nothing really unique. There's not a class or anything on this button.

We can see that the heading for bananas and the button are siblings, and that they both share the same parent. We're going to use that to programatically access the button for our test.

Back in our source code, let's type const heading = await screen.findByRole. We're going to look for headings with a name. In this case, we're going to use a regular expression that matches on Bananas. We'll pass in /i so that it's case insensitive.

We're going to find the banana headings. Then, we know we need to get to the parent of that. That'll be a div. We'll say const div = heading.parentNode.

Now, we want to search for a button within the parentNode. For that, we need to get a special version of the getByRole() method from testing-library/react. Type const button = getByRole. We can pass in that div as the container. Then, we'll say it's looking for a button.

There's only one button within the parent of our heading. That's the one that we want. You'll notice that TypeScript's unhappy with this. If you need, you can cast this as an HTML element. We know that it will be. If it fails, our test will catch that.

To actually click the button, at the top of the file, go ahead and import userEvent from "@testing-library/user-event". With userEvent, we can say userEvent.click(button).

Now that we've added an item to the cart, in order to see that, we need to inspect our Redux store. We can grab the Redux store here from renderWithContext.

Let's log what we have in our store. Type console.log(store).getState().cart.items). You can see that the ID for bananas is 207. We can type expect(store).getState().cart.items ["207"] ).toEqual(1). That passed as expected. If we add it two more times, we can also say the same thing, it should equal 3.

In this lesson, we used screen.findByRole to await for the bananas heading to appear. We then pass the parent node into our top-level getByRole function, which allowed us to search it for the button. We then use the userEvent() library to click the button, and asserted that our Redux state was updated appropriately.
