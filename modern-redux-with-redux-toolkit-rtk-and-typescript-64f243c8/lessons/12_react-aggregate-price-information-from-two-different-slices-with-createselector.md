# Aggregate Price Information From Two Different Slices with createSelector

[Video link](https://www.egghead.io/lessons/react-aggregate-price-information-from-two-different-slices-with-createselector?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

Jamund Ferguson: [0:00] Open up cartSlice.ts, and at the bottom of the file type export const getTotalPrice = createSelector(). This time we're going to pass in three functions.

[0:12] The first one is going to take state of type RootState and return state.cart.items. The second one is also going to take in state and return state.products.products. Lastly, we're going to pass in a function that takes in items as its first argument and products as its second. Here, we're going to calculate the total value of all the products in your shopping cart.

[0:35] Type let total =  for (let id in items) { total += products [id] .price * items[id] }. This is the price of an individual item times the number of items you have in your cart. Then, we're going to return total.toFixed(2). This will essentially round us to the nearest two decimal places. We've just created a selector that relies on two pieces of state rather than one.

[1:03] Inside of Cart.tsx, we are going to import { getTotalPrice } from "./cartSlice" and at the top of the page const totalPrice = useAppSelector(getTotalPrice). Then, down at the bottom of the file where we have hard-coded ., let's put in totalPrice.

[1:24] If we go to our Shopping Cart now, it's currently . Let's add some bananas, some chocolates. You can see that our total is now calculated properly.
