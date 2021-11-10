# Testing Accessible Form Elements with React Testing Library's findByLabelText Query

[Video link](https://www.egghead.io/lessons/redux-testing-accessible-form-elements-with-react-testing-library-s-findbylabeltext-query?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)

Instructor: [0:00] Go ahead and start just up in watch mode with a filter for products.test. Then open up products.tsx. Down here where we have our add to cart button, I'd like you to add a new prop, Aria-label. This is going to require template literals.

[0:13] We'll need curly braces here and then back ticks. Here we can say add ${product.name} to cart. Back in your products test, scroll down to this bottom test. We can say, const button = await find by roll button with a name that includes the word bananas.

[0:32] The name filter will look at the button text itself, as well as any accessible labels added to the button. When we hit save, our test started working immediately. There's one other approach I want to show you that works as well when you're dealing with labels.

[0:43] Const button = await screen.find by label text. Then we'll pass in that bananas regex as well. That will find any form element associated with a label that has the word bananas. In this case, because we're not filtering by button, it might be helpful to put some more precise text in here. In this case, I'll say, "Add bananas," but it works just as well. It's a helpful tool to add to our toolkit.

[1:08] React Testing Library wants you to make your code more accessible. Using aria-labels is good for screen readers, and it makes your test easier to query with React Testing Library.
