# Applying our Redux Test Helpers to an Existing Component Test

[Video link](https://www.egghead.io/lessons/redux-applying-our-redux-test-helpers-to-an-existing-component-test?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)

Instructor: [0:00] Open up cartlink.test.tsx and import render with context from test details. Remove this file's own render with context function at the bottom of the file. Without that we can now get rid of all these extra imports we no longer need. Now start up just in watch mode.

[0:15] You can see that our tests are almost working here. The only issue is instead of relying on the global store, when I render with context, I receive a new store and I can add items to the cart just after that initial render. You can see that our tests are now passing again.

[0:30] We can also preload items into our store with our new getState with items utility. At the top of the file, import getState with items for test details. In the test block, type const state = getState with items, and then pass in an object with test item one.

[0:45] We can then pass that state in as the second argument to our render with context function and remove our add to cart action. That's how we use our new test utils to render components with a pre-populated Redux store.
