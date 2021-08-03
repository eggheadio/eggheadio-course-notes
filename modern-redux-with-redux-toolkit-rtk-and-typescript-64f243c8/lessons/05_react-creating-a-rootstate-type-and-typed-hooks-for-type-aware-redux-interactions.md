# Creating a RootState type and Typed Hooks for Type-Aware Redux Interactions

[Video link](https://www.egghead.io/lessons/react-creating-a-rootstate-type-and-typed-hooks-for-type-aware-redux-interactions?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

Jamund Ferguson: [0:00] Open up the file store.ts. Type export type RootState = ReturnType<typeof store.getState>. Below that, type export type AppDispatch = typeof store.dispatch. ReturnType is a TypeScript utility that will allow you to transform the type definition of a function into its return type.

[0:25] RootState is going to contain a type definition that perfectly matches all the data that we have in our Redux store. AppDispatch, on the other hand, will be used later when we're typing the method used to dispatch actions into our Redux store.

[0:37] One last thing we need to do when we're dealing with TypeScript in Redux, let's create a new file called hooks.ts. At the top of this file, let's import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux". Let's also import those two types that we just created, RootState and AppDispatch from "./store".

[1:00] Here we're going to export const useAppDispatch = arrow function useDispatch. Then we'll pass in the type to this generic function, AppDispatch, and open and close parentheses, and export const useAppSelector: TypedUseSelectorHook. We'll pass in to this special TypeScript utility <rootState> = useSelector.

[1:25] What we just do here exactly, Redux provides useDispatch and useSelector hooks for React, but in order to have them aware of the types that we've just defined in our sort.ts file, we have to re-export new functions that are type aware. That's going to come in handy all over the place.
