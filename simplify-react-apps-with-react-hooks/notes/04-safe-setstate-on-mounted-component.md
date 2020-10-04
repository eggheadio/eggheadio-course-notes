# [Safely setState on a Mounted React Component through the useEffect Hook](https://egghead.io/lessons/react-safely-setstate-on-a-mounted-react-component-through-the-useeffect-hook)

Q. What does safe setState mean?
Ans - Setting the state safely means checking whether our component is mounted before trying to call setState. This is done normally when the client is unable to cancel in-flight requests on its own.

__Old Query Component__

```javascript
class Query extends Component {
    ...
    ...
    componentDidMount() {
        this._isMounted = true
        this.query()
    }

    componentWillUnmount() {
        this._isMounted = false
    }


    safeSetState(...args) {
        this._isMounted && this.setState(...args)
    }
}
```

There are chances that our component is unmounted while our query is still is in out in flight. So, save us from the sideEffect, in our old component, we were using `this.safeSetState` whenever we wanted to update the state.

We have a `_isMounted` variable is set to true as soon as the component is mounted. Whenever we update state, we first check the `_isMounted` value and if it is true, we do a setState. During the time of unmounting, we equate the `_isMounted` value to false.

>Note: This is not a proper solution to the problem. We are doing this just because the client we are using, doesn't support auto-canceling requests.

**How do we implement it in our newly refactored function component?**

```javascript
const mountedRef = useRef(false)

useEffect(() => {
    mountedRef.current = true;
    return () => (mountedRef.current = false)
}, [])
```

This bit of code here takes care of the the operation componentDidMount and the componentWillUnmount lifecycle method. We had to track the mounted state of our component with `mountedRef`
When the component is mounted, mountedRef.current is marked true and as the cleanup function after the unmounting happens, the value is marked false again. The dependency array is empty because we want to let this piece of code run only once when the component is mounted.

For, `safeSetState` now,

```javascript
const safeSetState = (...args) => mountedRef && setState(...args)
```

Now, we will change setState to safeSetState wherever we feel that the component could potentially be unmounted. After this, the final code will look like this:

```javascript
useEffect(() => {
    if(isEqual(previousInputs.current, [query, variables])) {
        return;
    }
    // no need to change
    setState({fetching: true});
    client
    .request(query, variables)
    .then(res =>
        safeSetState({
            data: normalize.res,
            error: null
            loaded: true
            fetching: false
        })
    )
    .catch(error =>
        safeSetState({
            error,
            data: null,
            loaded: false,
            fetching: false
        })
    )
})
```
