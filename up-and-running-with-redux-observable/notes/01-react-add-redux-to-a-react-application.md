## 01. Add Redux to a React application

<Timestamp start="0:00" end="0:20">
    
No longer need to globally install create-react-app. Just use `npx create-react-app redux-obs` here.

</Timestamp>

We can give any component in our application access to the Redux store by first wrapping the App component in index.js with the Provider component from react-redux. Then, we create a store with createStore() from Redux and specify that store in the props of the Provider component.

`store = createStore(reducer)`
`<Provider store={store}>`

In our components, we can connect to the Redux store using connect() from react-redux. Export connect() as default and provide it with a callback that determines which parts of the store are connecting to the component. In a second set of parentheses, we pass in our connected component:

`export default connect(mapState())(Stories)`

With our component connected to the Redux store, we can access the state as defined by our reducer via props.
