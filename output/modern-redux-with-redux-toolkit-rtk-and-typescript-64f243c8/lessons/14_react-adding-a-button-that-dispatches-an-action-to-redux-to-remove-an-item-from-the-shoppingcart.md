# Adding a Button that Dispatches an Action To Redux to Remove an Item from the ShoppingCart

[Video link](https://www.egghead.io/lessons/react-adding-a-button-that-dispatches-an-action-to-redux-to-remove-an-item-from-the-shoppingcart?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

Jamund Ferguson: [0:00] Open up the file cartSlice.ts, and in the reducers object let's add a new method called removeFromCart. removeFromCart is going to take two arguments -- state and an action of type PayloadAction, where you also need to pass in the payload type, which is going to be a string for the id. All we have to do here is say delete state.items [action.payload] .

[0:21] Then, at the bottom of the file where we export addToCart, let's also export the action for removeFromCart.

[0:27] In Cart.tsx, let's import removeFromCart action and let's also import useAppDispatch. At the top of the component type const dispatch = useAppDispatch and then down in our removeFromCart button, let's add an onClick handler which calls dispatch(removeFromCart) and pass in the id.

[0:48] Now, in my app, if I go to Products, add a couple things to my cart, hit back to the cart. When I remove them from the cart, you can see them removing from the Shopping Cart page. You can also see that the quantity immediately updates in my shopping cart icon.
