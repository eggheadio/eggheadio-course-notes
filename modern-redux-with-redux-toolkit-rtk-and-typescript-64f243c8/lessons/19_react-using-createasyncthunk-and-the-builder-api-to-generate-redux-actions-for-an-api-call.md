# Using createAsyncThunk and the builder API to Generate Redux Actions for an API call

[Video link](https://www.egghead.io/lessons/react-using-createasyncthunk-and-the-builder-api-to-generate-redux-actions-for-an-api-call?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

Jamund Ferguson: [0:00] In cartSlice.ts, import { createAsyncThunk } from "@reduxjs/toolkit". Then below that import { checkout, CartItems } from "../../app/api".

[0:12] Just above our createSlice, type export const checkoutCart = createAsyncThunk(). Then, for the first argument, pass in the label "cart/checkout", and for the second an async function, which takes items of type CartItems. Inside this function type const response = await checkout(items) and then return response.

[0:39] We've now just created our first async thunk. This one calls our checkout API and passes in all the items in our cart and then returns the response. Now, go down to the bottom of createSlice underneath our reducers object, and add a new property called extraReducers. This one's actually going to be a function that takes as its argument something called Builder.

[1:00] Inside of that function type builder.addCase checkout cart.pending. For the second argument, this is our reducer function so it's going to take in state. I'm not going to have an action in this case. I'll type state.CheckoutState equals loading.

[1:14] In addition to pending, thunks also generate two other actions. Let's add those now. We're just going to make three copies of this. We've got builder.addCase checkout cart.pending, builder.addCase checkout cart.fulfilled, and builder.addCase checkout cart.rejected.

[1:30] The rejected state is going to be error, the fulfilled state is going to be ready. We didn't have to add any special types here, but TypeScript already knows that builder is this thing called action reducer map builder, and this state is a draft version of our carts date.

[1:46] It's fully ready to use without having to add any special type syntax. Now we've created three new reducer methods to handle all the possible cases that our asyncThunk generates. Now go to cart.jsx and import checkout cart from cart slice.

[2:01] Now underneath our OnQuantityChange function, type function onCheckOut that's going to take an argument E which is of type react.FormEvent. It's going to take an HTML form element as the thing that we're submitting.

[2:14] Inside of there, the first thing we want to do is call e.preventDefault that prevents the form from actually submitting to the server and reloading the page. We're going to dispatch checkout cart with our items. Remember, we're already pulling items from use.selector so this should always be current.

[2:30] Now that we've got our checkout method. Let's go down to the form at the bottom of the page and type form onSubmit equals onCheckOut. Now if we go back to our app, we have some logic in our Checkout API that returns an error any time we try to checkout without any items. You can see that working here. If we do have items in the cart and we go to Checkout, you see loading state lasts for about half a second and then the cart resumes its ready state.

[2:52] Just to recap what we did, we have a very simple method here called checkoutCart which uses the createAsyncThunk API to wrap what is a simple call to our checkout API, which posts some data, but the cool thing about createAsyncThunk is it generates for us these three actions -- the pending action, the fulfilled action, and the rejected action.

[3:11] We don't have to do anything. Those are generated for us automatically. Those actions are also dispatched for us without us having to do any extra work. In order to tell Redux about them, we have to use extraReducers and then this builder API to add each of those cases and then our reducer methods live here. We tell Redux to update the state when these different actions occur.
