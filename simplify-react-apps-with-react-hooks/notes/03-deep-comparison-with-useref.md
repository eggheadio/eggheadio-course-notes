# [Handle Deep Object Comparison in React's useEffect hook with the useRef Hook](https://egghead.io/lessons/react-handle-deep-object-comparison-in-react-s-useeffect-hook-with-the-useref-hook)

With our old Query component, we were actually using this `isEqual` from **lodash** when we had this componentDidUpdate to compare the previous `this.props.query` and the previous `this.props.variables` with the new `prevProps.query` and the new `prevProps.variables`. We are doing that because the variables can actually be an **object**.

__Old Query Component__

```javascript
componentDidUpdate(prevProps) {
    if (
      !isEqual(this.props.query, prevProps.query) ||
      !isEqual(this.props.variables, prevProps.variables)
    ) {
      this.query()
    }
  }
```

We have passed variables as a dependency in the useEffect, but what it will do is it will check the `prevVariables === variables` and if it does not find it true, it is going to rerun our callback passed inside useEffect. 
Now, this is always going to return false because the variables prop is being passed in form of an object like this

```javascript
<Query
    query={userQuery}
    variables={{username}}
    normalize={normalizeUserData}
>
```

So, every single time, it is a brand new object `{username}` and so, every single time, our useEffect callback will run.

So, to have a deep equality check on our object `variables`, we can remove the dependency array (second argument) from the useEffect call and add a condition like this and return if it is true.

```javascript
if(isEqual(previousInputs, [query, variables])) {
    return;
}
```

Now, the question arises, how will we get the prevInputs, we need to keep a reference of some sort. Hmmm 🤔
Well, we can use the `useRef` hook at our disposal.

```javascript
const previousInputs = useRef()
useEffect(() => {
    // each time, our component renders
    previousInputs.current = [query, variables]
})
```

For the first time, the previousInputs.current will be null, so the component will be rendered regardless of this. It is only after the first time, that the reference is set for comparison.
So, we will use previousInput.current in the if condition now

```javascript
if(isEqual(previousInputs.current, [query, variables])) {
    return;
}
```

In this way, we made sure that we don't run our setState call and our client call, unless our previousInputs are different from the new inputs.

So, finally the useEffect calls will look something like this:

```javascript
useEffect(() => {
    if(isEqual(previousInputs.current, [query, variables])) {
        return;
    }
    setState({fetching: true});
    client
    .request(query, variables)
    .then(res =>
        setState({
            data: normalize.res,
            error: null
            loaded: true
            fetching: false
        })
    )
    .catch(error =>
        setState({
            error,
            data: null,
            loaded: false,
            fetching: false
        })
    )
})

const previousInputs = useRef();
useEffect(() => {
    previousInputs.current = [query, variables]
})
```
