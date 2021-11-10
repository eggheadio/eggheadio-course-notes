# Creating a Utility File for Rendering Redux Connected React Components in Tests

[Video link](https://www.egghead.io/lessons/redux-creating-a-utility-file-for-rendering-redux-connected-react-components-in-tests?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Jamund Ferguson: In the source folder, go ahead and create a file called test-utils.tsx. Now I want you to open up cartlink.tsx, and go ahead and copy over the render with context function making sure to export it. Then we need to grab all of the imports that are relevant as well.

For that I'll just copy them all over and then we'll remove the ones that we don't need. Fix the path for our store. Now we've got a reusable render with context method. We also want to open up cartslice.test.ts, and copy over the getState with items function that we use there.

Also, make sure to export that function. Import root state from store as well. These two functions are going to form the basis of our new testing utility library here that we use to test most of our components.

One additional feature we need first though is the ability to render using some existing state. To do that, we can take a second argument here and render with context, which will be optional state that will be of type root state.

For each render, we actually want to create a new store. We'll type const store equals, and then we're going to import get store with state or map/store, which is a utility that creates a new Redux store with whatever state we provide.

Then, after we render, we can return that store so that additional actions can be dispatched into it. Now, the only other thing we need to consider here is that when we render, there are a number of utilities that get created.

We can also return all those utils. With that, we can actually get rid of the store import up here. Now, we have a fairly full-featured render with context function that we're going to be able to use in a whole bunch of different places.

The only other thing we want to add to get state with items is the ability to pass in products as well as items. We'll just accept that as a second argument, products, and in this case here, we are going to take products as a record.

We should take string for its key, and a product for the value. We can import that product type from dot/app/api. For products, the default is going to be an empty object and whatever they end up being, we'll pass them right into our state here.

Now, we've updated get state with items to accept products as well as items. We've updated render with context to take some additional state. Now that we've updated these utilities, let's go ahead and put them to use back in cart link.

We can now import, render with context from test details, and we'll get rid of our own render with context here. Without that, we can get rid of all of these extra imports, save the file, and you can see our tests are almost working here. The only issue is instead of relying on the global store, when I render with context, I can receive the store here and I can add the item to cart just after my initial render.

Or we can go up here and import getState with items and we can create an initial state with a single test item and pass that in to render with context. Now my test passed and the test file itself is cleaner than ever before.
