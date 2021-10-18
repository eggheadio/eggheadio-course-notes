# Access Redux Data in a Component with the TypeScript-enabled useAppSelector hook

[Video link](https://www.egghead.io/lessons/react-access-redux-data-in-a-component-with-the-typescript-enabled-useappselector-hook?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

Jamund Ferguson: [0:00] The Products page in our application is made up of data dynamically loaded from a JSON file. That call happens inside of Products.tsx inside of this useEffect hook, which calls getProducts and then sets them into local component state. We're going to comment out this code and pull the products data from Redux instead.

[0:17] At the top of the file import { useAppSelector } from "../../app/hooks". Then, down in our component, type const products = useAppSelector. Let's pass in an arrow function which takes in the state and let's let TypeScript complete the rest. We type state, we select products, and we want products. We can see here also that because we use useAppSelector, our products list is typed properly.

[0:45] Because we store products in Redux as an object and not an array, we have to update how we map over this. We can simply type Object.values to convert that object into an array of products. With that in place if we go back to the Products page, you'll see an empty screen.

[1:02] We can test that it's working by going into productsSlice and in our initial state adding one fake product. We'll give it an id of 123 and a name of "fake product". We'll save that. You'll notice TypeScript is mad because it's missing a few values, but it's good enough to power a fake product on our page.
