# Create a Reducer with Redux Toolkit and Dispatch its Action with the useAppDispatch hook

[Video link](https://www.egghead.io/lessons/react-create-a-reducer-with-redux-toolkit-and-dispatch-its-action-with-the-useappdispatch-hook?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

Jamund Ferguson: [0:01] In productsSlice.ts, make sure to clear out any fake products you created in your initialState, and down here in reducers let's add a new reducer method called receivedProducts. That method is going to take state, and it's also going to take something called an action. It's going to have the type of PayloadAction.

[0:16] PayloadAction is a special type that we're going to import from react.js/toolkit. That type takes in as an argument the value that we want our action payload to look like. In this case, our payload is going to be an array of Product.

[0:30] Let's save those products into a variable called products, and let's convert them into an object by looping over them. For each product we'll say state.products [product.id] = product. We're essentially converting our product array into a products object.

[0:52] Now that we've created that reducer method, we can export an action for it by typing export const { receivedProducts } = productsSlice.actions. Redux Toolkit automatically generates action creators for each of the reducer methods that we pass into it.

[1:10] Let's go back to products. Let's import { receivedProducts } from "./productsSlice". We also need to import { useAppDispatch } from "../../app/hooks".

[1:19] Here at the top of the Products() component, type const dispatch = useAppDispatch(). We'll then remove our useState line here. We'll bring our useEffect hook back into it, but instead of calling setProducts, once the products are received, we are going to call dispatch(receivedProducts(products)).

[1:38] You can see how dispatching this into Redux isn't that much harder than setting products on the local component state. It's two methods instead of one, but at the end of the day, it's just a single line of code that's pretty easy to read. Now we can remove the unneeded useState import and the unneeded Product import.

[1:54] If we go back to our products page, it's fully working, but instead of being powered by local component state, it's now powered by Redux.
