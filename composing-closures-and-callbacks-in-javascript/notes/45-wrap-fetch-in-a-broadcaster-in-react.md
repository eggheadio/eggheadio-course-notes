# Wrap Fetch in a Broadcaster in React

[📹 Video](https://egghead.io/lessons/egghead-wrap-fetch-in-a-broadcaster-in-react)

- `async/await` does not work for the `getURL` broadcaster because async functions always return a promise no matter what you return from them, so there's no way we can bypass it and cancel it before it resolves the promise.
- for this broadcaster we used the normal `them` syntax.
- by modifying the `useBoradcaster` hook when we added an initial value to the hook, we can pass the initial value to the broadcaster passed to the useBpradcaster custom hook and avoid errors in the React's initial render.

## Resources and References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/fetch-broadcaster/src/index.js)
