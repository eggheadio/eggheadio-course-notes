# Map a Sequence of Values in React with useBroadcaster

[📹 Video](https://egghead.io/lessons/egghead-map-a-sequence-of-values-in-react-with-usebroadcaster)

In this lesson, we see how we can map a sequence of values in React with our `useBroadcaster` hook. The sequence that we are mapping to is the string _Hi my name is John!_ which we split by spaces.

## Delaying the message

```javascript
let delayMessage = value =>
  hardCode(value)(createTimeout(500))
```

In case you are wondering why we created the `delayMessage`, if we don't delay this message, we will map through the sequence so quickly that we can't see exactly what is being shown.

Also, because we delayed the message, we can see that _John!_ never shows in the browser.

## Why _John!_ didn't show

Since our `useBroadcaster` isn't handling the `done` it is being passed directly into the `setState`.

```javascript
export let useBroadcaster = (broadcaster, deps = []) => {
    let [state, setState] = useState(null)
    useEffect(() => {
        broadcaster(setState)
    }, deps)

    return state
}
```

Instead of setting the state in `broadcaster`, we can instead check what kind of value is being passed. If the value is done, we will just return instead of setting it into the state. This will prevent the state to be the `done Symbol`.

```javascript
export let useBroadcaster = (broadcaster, deps = []) => {
    let [state, setState] = useState(null)
    useEffect(() => {
        broadcaster(value => {
            if (value === done) {
                return // At the moment we don't want to do anything with done
            }

            // If value is not done, set the state to that value
            setState(value)
        })
    }, deps)

    return state
}
```

In essence, we are checking:

- if the value is done and returning so we don't do anything
- if the value is not done, we set the state to that value

## References

- [useBroadcaster hook - lesson 38](https://egghead.io/lessons/egghead-create-a-custom-usebroadcaster-hook)
- [mapSequence - lesson 35](https://egghead.io/lessons/javascript-map-a-sequence-based-on-values)
- [hardCode - lesson 26](https://egghead.io/lessons/javascript-building-a-counter-ui-by-composing-callbacks)