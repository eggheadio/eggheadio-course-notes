# [Extract Generic React Hook Code into Custom React Hooks](https://egghead.io/lessons/react-extract-generic-react-hook-code-into-custom-react-hooks)

The hooks code is regular JavaScript, extracting it to its own function is trivial and it enables code sharing in a really nice way. It also allows encapsulation and separation of concerns really cleanly.

Let us start by looking at our state setup code

```javascript
const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {loaded: false, fetching: false, data: null, error: null}
)
```

This looks a bit complex by the look of it. Also, if we want to use it again in some other component, we again have to write this same piece of code and it is not generic enough, if we want to use a different initialState object.

Let us try to write a function (a custom hook) `useSetState` that will make it generic and reusable

```javascript
function useSetState(initialState) {
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    initialState,
  )
  return [state, setState];
}
```

Note that we have used initialState as the argument of the hook, so that whatever state object is passed to, this hook return a getter and setter for it.
>If you would like a more comprehensive useSetState hook, give the npm module `use-legacy-state` a try.

---
Coming onto the next piece of code that we can make generic

```javascript
const mountedRef = useRef(false)

useEffect(() => {
    mountedRef.current = true;
    return () => (mountedRef.current = false)
}, [])
const safeSetState = (...args) => mountedRef && setState(...args)
```

This seems like a usefully generic function. Let us try to make a custom hook `useSafeSetState` for this

```javascript
function useSafeSetState(initialState) {
    const [state, setState] = useSetState(initialState);
    const mountedRef = useRef(false)

    useEffect(() => {
        mountedRef.current = true;
        return () => (mountedRef.current = false)
    }, [])
    const safeSetState = (...args) => mountedRef && setState(...args)
    return [state, safeSetState]
}
```

Accordingly, we will update at respective places and use this custom hook for setting states safely in a more generic way.

---

# [Track Values Over the Course of Renders with React useRef in a Custom usePrevious Hook](https://egghead.io/lessons/react-track-values-over-the-course-of-renders-with-react-useref-in-a-custom-useprevious-hook)

We have one more segment of code in our `Query` component, where we are getting and tracking previous value of our inputs

```javascript
const previousInputs = useRef()
useEffect(() => {
    // each time, our component renders
    previousInputs.current = [query, variables]
})
```

This again is a generic operation and can be separated out in its own custom hook implementation

```javascript
function usePrevious(previousValue) {
    const ref = useRef()
    useEffect(() => {
        ref.current = previousValue
    })
    return ref.current
}
```

In this way, we can use the `usePrevious` hook in our old code

```javascript
const previousInputs = usePrevious([query, variables]);
```

As this is returning the `.current` value of the reference, we can use the early return in the useEffect as

```javascript
// not previousInputs.current
if(isEqual(previousInputs , [query, variables])) {
    return
}
```
