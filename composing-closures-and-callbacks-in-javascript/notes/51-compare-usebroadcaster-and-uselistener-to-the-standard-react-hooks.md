# Compare useBroadcaster and useListener to the Standard React Hooks

**[📹 Video](https://egghead.io/lessons/egghead-compare-usebroadcaster-and-uselistener-to-the-standard-react-hooks)**

Our implementation is not the standard React approach. Let's see how this compares by first implementing the React way by using the standards hooks: `useState`, `useEffect`, `useCallback` and `useRef`



🔑 The **useRef** hook is a way to use the  `createRef` api. The documentation considers this hook as an additional one.

> Returns a mutable ref object.
> The returned object will persis for the full lifetime of the component.

This means that **useRef** gives you the same  ref object on every render and also that this hook doesn't notify the changes and then it not cause a  re-render.

So **useRef** can be used to store a mutable value like an instance field in a class.

In this lesson we use **useRef** to hold a reference to the first render, to the timeout created and to the controller of the fetch request.

The react implementation works the same way as our implementation with broadcasters and listeners but looks verbose, mostly because of the cleanup code required to re-implement the same patterns.

You can see that the implementation of `useEffect` is similar to the `broadcaster` pattern. It accepts a function and returns a cancellation method.

All of this verbosity can also be avoided by extracting this code to some custom hooks.

```javascript
let [name, setInputValue] = useState("")
  let [books, setBooks] = useState([])
  let firstRef = useRef(true)
  let timeoutRef = useRef()
  let controllerRef = useRef()
  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false
      return
    }
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    if (controllerRef.current) controllerRef.current.abort()

    controllerRef.current = new AbortController()
    let signal = controllerRef.current.signal
    timeoutRef.current = setTimeout(async () => {
      if (name.length > 3) {
        try {
          let response = await fetch(
            `https://openlibrary.org/search.json?q=${name}`,
            { signal }
          )
          let json = await response.json()
          setBooks(json.docs)
        } catch (error) {}
      }

      if (name.length < 3) {
        setBooks([])
      }
    }, 500)

    return () => {
      if (timeoutRef.current)
        clearTimeout(timeoutRef.current)
      if (controllerRef.current)
        controllerRef.current.abort()
    }
  }, [name])
```

🔑 The main takeaway is that. This is a very imperative code in comparison with the patterns shown in the course.
The operator/broadcaster/listener allows you to confidently refactor the applied logic to some value, like updating where a filter is applied.

🔑 Is trongly recommended to create some similar patterns to extract the asynchronous logic to avoid the moving pieces and the callback hell.

##  References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/vs-react/src/broadcasters.js)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-merge-multiple-uselistener-hooks-in-react)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-remember-to-check-for-done)

