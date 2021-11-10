# Testing Redux Connected React Components with React Testing Library (Basic)

[Video link](https://www.egghead.io/lessons/redux-testing-redux-connected-react-components-with-react-testing-library-basic?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)

Jamund Ferguson: [0:00] If you run the app, you can see up in the upper right-hand corner this little Redux-connected component called the CartLink. It responds when you add items to your cart. When you update the quantity or remove items from your cart, it updates as well. Of course, it acts as the only link to our Shopping Cart page.

[0:16] In your cart folder, add a new file called CartLink, notice the uppercase, .test.tsx. Inside that file, go ahead and import React from "react". Import render and screen from "@testing-library/react". Go ahead and import CartLink from "./CartLink".

[0:38] Now, type test("should contain a link"). Pass in that an arrow function. Inside of it, we're going to render our CartLink component, going to take no props. Then, we're going to expect(screen.getByRole("link")).toBeInTheDocument().

[0:57] We're rendering the CartLink component here. We know that inside of that, there should be a link. That link should end up in the document.

[1:03] Let's open up the terminal window. We are going to run npx jest -- CartLink. Even though this is a very simple test, it failed. The reason it failed can be found here, "Could not find react-redux context value; please ensure the component is wrapped in a provider."

[1:21] This unfortunately is what happens when you bring Redux into your app. Your test of these components gets a lot more complicated, but as I'll show you, we've got this.

[1:28] At the top of your file, go ahead and import Provider from "react-redux". Import store from "../app/store". At the bottom of the file, let's add this helper function, function renderWithContext, which is going to take a single argument, element, of type React.ReactElement. That function is going to render Provider passed-in store and then our element as its child.

[1:56] We'll switch render up here in our test to renderWithContext. We'll save that. Rerun the test. It failed again. This time, because it was expecting another context value. This one, for React router.

[2:10] Let's go ahead and import that as well. At the top of the file, import BrowserRouter as Router from "react-router-dom". Inside of our renderWithContext() method, we can add router as a wrapper around our element. Save that method. We run our tests, that actually worked.

[2:30] Anytime we need to render Redux-enabled components, we have to wrap it in a Redux Provider. Here, we've created this helper method, renderWithContext, to make that process easier.
