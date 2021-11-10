# Simulate Typing into Form Fields in Tests with the User Event Library

[Video link](https://www.egghead.io/lessons/redux-simulate-typing-into-form-fields-in-tests-with-the-user-event-library?pl=confidently-testing-redux-applications-with-jest-typescript-16e17d9b)



Instructor: The next test we write is going to focus on updating the quantity and making sure that's reflected in our total. One of the first problems we have with this is when we inspect our quantity element, there's no label or any obvious way for us to select it.

In your IDE, open up cart.tsx and scroll down to the part where we create our quantity field. We're going to use an aria-label again, and we'll use curly braces and template literals. Here we'll say, update products ID.name quantity.

If we go back into our browser, you can see that we have a label here. Now we'll be able to access it in our test. Now in cart.test.tsx, let's go ahead and add a new test called updating product quantity should update total.

In order to do this, we're actually going to copy the entire contents of our previous test.

Then, at the top of the file, we need to make sure to import userevent from @testinglibrary/user-event. Now, down here in our test, type ConstInput = screen.getbylabeltext.

Once again, we can pass in a regular expression here, which is a bit more flexible than a string. We will say testproductquantity, and we'll make sure to make that ignore case.

Now, type userevent.clearinput. We're going to clear out whatever is in there. We're going to clear out the input field. Now that we have a handle on the input field, we can type userevent.clearinput. We also need to type userevent.tab.

Essentially, we need to clear the field and then we hit tab to blur the field, so that the page updates. After we do that, we should see screen.getbytext00 to be true.

Let's go ahead and run our test in watch mode and confirm that it works, so far so good.

Now, let's go back into our input field by typing userevents.type. We'll type into the input field the string of four, and then once again, tab to blur the field. Then, we should see screen.getbytext4444, it's all past.

A couple of important things to comment on here. We use get by label text to access the field associated with the text test product quantity.

We then use userevent.clear to clear the field, and userevent.tab to blur the field and then asserted that the total was correct in various states.
