# Using Jest in Watch Mode with test.todo to Test a Redux Reducer

<TimeStamp start="0:18" end="0:25">

Copy the export actions associated with all three cartSlice reducer methods: `{ addToCart, removeFromCart, updateQuantity }`

</TimeStamp>

<TimeStamp start="0:28" end="0:35">

Paste the actions you copied into an import statement in `cartSlice.test.ts`: `import cartReducer, { addToCart, removeFromCart, updateQuantity } from "./cartSlice";`

</TimeStamp>

<TimeStamp start="0:55" end="1:15">

Run the command `npx jest --watch` to start Jest in watch mode. All files are included by default. Press the 'p' key to filter on a specific pattern and then type `cartSlice` as your pattern to only watch that single file.

</TimeStamp>

<TimeStamp start="3:10" end="3:25">

Add the `CartState` type to your import statement to be able to specify your `initialState` to be of type `CartState`. Your import statement should now be: `import cartReducer, { CartState, addToCart, removeFromCart, updateQuantity } from "./cartSlice";`

</TimeStamp>
