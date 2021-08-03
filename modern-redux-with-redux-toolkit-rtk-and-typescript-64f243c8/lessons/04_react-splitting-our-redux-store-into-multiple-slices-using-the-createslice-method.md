# Splitting our Redux Store into Multiple Slices using the createSlice Method

[Video link](https://www.egghead.io/lessons/react-splitting-our-redux-store-into-multiple-slices-using-the-createslice-method?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

Jamund Ferguson: [0:00] In order to manage our data effectively, we're going to split up our Redux store into multiple slices.

[0:05] Slices are a fairly new concept in Redux, but they're just the way to keep your data organized. A single slice file, we usually export a reducer and any actions or selectors associated with that data. Each of our main features cart and products are going to have their own slices of the Redux store.

[0:21] First, inside of cart, create a new file called cartSlice.ts. Inside of cartSlice, type import { createSlice } from "@reduxjs/toolkit". Below that, type export interface CartState. For that, we're going to have a key of items, and it's going to have an object that has a key, which is a productID of type string and a value, which will be a number.

[0:46] An interface is the most common way to define the shape of an object with TypeScript. Here, we've defined the CartState interface, which describes what the data is going to look like in this slice of our store. This syntax right here is used to tell TypeScript to expect that our items property will be an object where the keys are productID strings and the values are numbers.

[1:06] Below that const initialState of type CartState = items with an empty object. Now type const cartSlice = createSlice. Pass in an object. First, it takes a name which we'll just call this "cart". Then we'll pass in the initialState and we can also pass in an empty reducers object, which we'll fill out later. Finally, let's export default cartSlice.reducer.

[1:28] In Redux, a reducer function processes actions passed into the Redux store, and potentially returns an updated version of the state. When we break out our store into slices, each slice gets its own reducer that handles updates for that part of the data.

[1:42] Go into your products folder and add a new file called productsSlice.ts. Inside there import { createSlice } from "@reduxjs/toolkit". We're also going to import { Product } from "../../app/api". If you remember in api.ts we make a definition for the product type based on what gets returned from our products that JSON call.

[2:07] Type export interface ProductsState { products: { [id: string] and for the value it's going to be an object of type Product. Underneath that, create your initial state with the type of ProductState, and that's going to equal an object with a key of products and a value of empty object.

[2:28] Now, type const productsSlice = createSlice. Pass in an object. First it will have a name, we'll call it products, and then we'll pass in the initialState and an empty reducers object, which we will fill out more later. Lastly, we can export default productsSlice.reducer.

[2:48] Let's go back in the store.ts and import cartReducer from "../features/cart/cartSlice" and import productsReducer from "../features/products/products Slice". Now that we've got those two reducers, we can pass them into our reducer object by typing cart: cartReducer and products: productsReducer.

[3:09] Now, even though we've split up our data into slices, we can still interact with it as one single data store.
