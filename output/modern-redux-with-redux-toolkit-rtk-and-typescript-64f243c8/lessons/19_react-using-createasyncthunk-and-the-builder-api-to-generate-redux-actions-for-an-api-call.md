# Using createAsyncThunk and the builder API to Generate Redux Actions for an API call

[Video link](https://www.egghead.io/lessons/react-using-createasyncthunk-and-the-builder-api-to-generate-redux-actions-for-an-api-call?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

Jamund Ferguson: [0:00] In cartSlice.ts, import { createAsyncThunk } from "@reduxjs/toolkit". Below that, import { checkout, CartItems } from "../../app/api". You'll see that this checkout conflicts with the one we have down at the bottom of the screen. I'm just going to go ahead and delete our checkoutThunk for now.

[0:18] Just above createSlice, let's add export const checkoutCart = createAsyncThunk(). Pass in for the action type "cart/checkout". The second argument is going to be an async function which takes as its first argument items of type CartItems. Inside the function, type const response = await checkout(items), and then, return response.

[0:44] Down at the bottom of the file, in our extraReducers section, let's replace our builder cases from these hard-coded strings to checkoutCart.pending and checkoutCart.fulfilled. CreateAsyncThunk generates these actions for us.

[1:00] In addition to the pending and fulfilled states, createAsyncThunk also adds support for the rejected state. Here, we'll say state.checkoutState = "ERROR". This will be called anytime that the promise we send to createAsyncThunk gets rejected.

[1:16] Open up Cart.tsx. Instead of importing checkout, let's import checkoutCart from "./cartSlice". Then, scroll down into onCheckout, we'll replace checkout with checkoutCart(items). Remember, we've already pulled in items with useAppSelector from before. Now, we're dispatching a thunk that will make the API call.

[1:35] If we go back to our app, we have some logic in our Checkout API that returns an error any time we try to check out without any items. You can see that working here. If we do have items in the cart and we go to Checkout, you see loading state lasts for about half a second, and then the cart resumes its ready state.

[1:50] Just to recap what we did, we use createAsyncThunk to generate an action creator which we named checkoutCart that dispatches actions based on the response of our Checkout API call.

[2:00] Those three actions, pending, fulfilled, and rejected, we handle as cases in our extraReducers function. Rather than building these thunk functions by hand, createAsyncThunk generates and dispatches the appropriate actions for us.
