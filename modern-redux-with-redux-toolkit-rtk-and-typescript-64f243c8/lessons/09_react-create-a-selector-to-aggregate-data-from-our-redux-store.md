# Create a Selector to Aggregate Data from our Redux Store

[Video link](https://www.egghead.io/lessons/react-create-a-selector-to-aggregate-data-from-our-redux-store?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

Jamund Ferguson: [0:00] Back in our cartSlice, near the bottom of the file, let's export a function called getNumItems(). getNumItems is going to take a state which is going to be the RootState. We don't have RootState yet here, so let's import that type from "../../app/store".

[0:20] For this function, we're going to create a variable called numItems and set it to . We'll return that at the end. In the middle, we're going to use a for loop, for(let id in state.cart.items) { numItems += state.cart.items [id] }. What we've just created is called a selector.

[0:40] Back in CartLink.tsx, let's import that selector by typing import { getNumItems } from "./cartSlice". We also need to import { useAppSelector } from "../../app/hooks". At the top of our CartLink function, we can say const numItems = useAppSelector() and then pass in that getNumItems function.

[1:05] Amazingly, TypeScript knows that this is going to be a number. We're going to use a simple ternary to display the number when it exists, otherwise we'll display the word Cart. Down here, where it says Cart, we will add {numItems ? numItems : "Cart"}. Essentially, if there are any items display that number, otherwise, display the word Cart.

[1:25] Check out what happens if we go back into our app. We've got nothing in our cart right now, but as I click Add to Cart, you see that number going up.

[1:32] Just to recap what we did, we created a selector called getNumItems. A selector is simply a function that takes the Redux state and returns any value it wants. The useAppSelector function allows us to pass in a selector and grab values from the Redux state and we'll re-render our component anytime that value changes.
