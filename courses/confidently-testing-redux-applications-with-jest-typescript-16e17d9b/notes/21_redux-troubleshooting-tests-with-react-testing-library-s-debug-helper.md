# Troubleshooting Tests with React Testing Library's Debug Helper

[Video link](https://www.egghead.io/lessons/redux-troubleshooting-tests-with-react-testing-library-s-debug-helper?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)

Instructor: [0:00] Open up your IDE and in the products folder, create a new file called products.test.TSX. In that file, we're going to import react, and we'll also import render context test details, and we're going to import products from ./products.

[0:16] For our first test, we're going to test the products component. For this one type const {debug} = render with context products. Now type debug, followed by (). This debug utility is not something that we wrote.

[0:30] If we go into render with context, you can see that we're returning all the utils provided by the testing library react render function. One of those utils is called debug. If we open up our terminal window and type NPX.JS-- products.test.

[0:46] That filters on this and not product slice. We can see the debug will log all the HTML for a given component.
