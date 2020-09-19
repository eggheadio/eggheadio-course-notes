# Return a Cancel Function from useEffect to Avoid Unmounting Issues

**[📹 Video](https://egghead.io/lessons/egghead-return-a-cancel-function-from-useeffect-to-avoid-unmounting-issues)**

- the pattern we've been using to cancel our asynchronous functions is the same that React uses inside the `useEffect` function
- in order to take advantage of this in our custom `useBoradcaster` hook, we need to set a varable to the broadcaster we call inside the `useEffect`. then call that function as you may recall:

```javascript
export let useBroadcaster = (broadcaster, initial = null, deps = []) => {
  let [state, setState] = useState(initial)
  useEffect(() => {
    let cancel = broadcaster((value) => {
      // cancel now can be called in the returned function from the useEffect callback
      if (value === done) {
        return
      }

      setState(value)
    })

    return () => {
      console.log("unmounted")
      cancel() // <== cancel!!!
    }
  }, deps)

  return state
}
```

## Resources and References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/cancel-use-effect/src/broadcasters.js#L103)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-fetch-a-random-word-to-start-the-react-word-game)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-exploring-the-patterns-in-the-operators)
