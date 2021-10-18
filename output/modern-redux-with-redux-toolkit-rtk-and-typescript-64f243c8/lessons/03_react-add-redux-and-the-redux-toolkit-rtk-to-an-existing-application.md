# Add Redux and the Redux Toolkit (RTK) to an Existing Application

[Video link](https://www.egghead.io/lessons/react-add-redux-and-the-redux-toolkit-rtk-to-an-existing-application?pl=modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8)

Instructor: [0:00] Open up a new terminal window and head into the same folder. Then type npm install react-redux and then npm install @reduxjs/toolkit. With those installed, head back into your IDE, and inside the app folder, create a file called store.ts.

[0:15] Inside of store, type import {configureStore} from '@reduxjs/toolkit.' Below that, type export const store = configureStore. Pass in an object with a single key of reducer, which, for now, just has an empty object.

[0:31] Now, open up your main.tsx file. At the top of the file, import {Provider} from 'react-redux' and also import store from './app/store.' We're going to wrap our app in a Provider component, and we're going to pass in as a prop our Redux store. Wrapping our app in this Provider allows any component in our application to access our Redux store.

[0:56] Now that we've set up Redux, I wanted to show you this cool diagram about how Redux works. This comes from the Concepts and Data Flow section of the Redux docs, and it concisely covers Redux's core design.

[1:06] Over here on the right, you can see the Redux store itself. This is the single immutable source of truth for the global state in your application. It's all stored in here. UI components subscribe to updates for specific pieces of data in that store using something called a selector.

[1:21] Anytime that piece of data changes, your component will be re-rendered. When you want to change data in the Redux store, you can't do it directly. Instead, you need to dispatch an action.

[1:32] An action, as you can see here, is a simple object describing an event that occurred. It includes a type property and a payload with some kind of data. When an action makes it into your Redux store, Redux passes it to any number of reducer functions.

[1:45] Reducers are functions that take in the current global state and the action, and return a new global state. After all of your reducers have had a chance to respond to that action, any subscribed UI components will be re-rendered with the new data. This one-way data flow makes it easy to trace how changes occur in Redux applications.

[2:06] I'm excited to show you how to put this to work in your applications using Redux and RTK.
