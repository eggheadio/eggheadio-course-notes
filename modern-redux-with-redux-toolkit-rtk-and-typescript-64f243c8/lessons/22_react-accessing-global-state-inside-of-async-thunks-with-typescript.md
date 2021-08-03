# Accessing Global State inside of Async Thunks with TypeScript

[Video link](https://www.egghead.io/lessons/react-accessing-global-state-inside-of-async-thunks-with-typescript?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

Jamund Ferguson: [0:00] Open up cartSlice.ts and head into the createAsyncThunk() method. I'm going to rename the argument CartItems to _ and add a second argument. This one's called thunkAPI.

[0:09] In the first line of our function let's type const state = thunkAPI.getState(), and below that const items = state.cart.items. Then in Cart.tsx, when we call checkoutCart(), we don't need to pass in the items any longer. We're pulling it directly from the current state.

[0:28] The only problem with this approach is that TypeScript doesn't understand what's happening. In order to type this properly, we can say here const state = getState() as RootState, which will correct the type issue, or we can fully type this createAsynkThunk() method using the generic syntax here.

[0:47] First, it needs to know the checkout response, which in this case is going to be success: boolean. Then, it wants to know the type of your first argument. In this case, that would be our _ argument, which is currently undefined because we're no longer passing the cart items.

[1:00] The third argument here is going to be an object with the property of state, and that is going to be of type RootState.

[1:06] It looks something like this when it's all typed out, but with that, we will have full type support by TypeScript. This works fine, but it's easier just to tell it that state is RootState and then all of our types work perfectly.
