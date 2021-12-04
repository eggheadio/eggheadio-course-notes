## 02. Use actions to modify the state of the Redux store

`connect()` from react-redux takes a second argument that allows us to connect functions to our component's props. This argument is a callback with a `dispatch` parameter that returns an object where each key is associated with a function that dispatches an event. For example, in the callBack, we can specify `clear` to dispatch the action `clear()` to the Redux store:

`return { clear: () => dispatch(clear()) }`

In this case, the `clear()` event being dispatched returns an object `{ type: "CLEAR_STORIES"}`. Our reducer is configured to recognize this event type and handle it accordingly.

Once connected, we can access these event dispatchers via component props. For example, to dispatch a `clear` event to the store on button click:

`<button onClick={props.clear}>`
