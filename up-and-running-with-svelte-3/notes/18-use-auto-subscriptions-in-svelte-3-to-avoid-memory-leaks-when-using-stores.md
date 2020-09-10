# 18. Use auto-subscriptions in Svelte 3 to avoid memory leaks when using Stores

[Video Link](https://egghead.io/lessons/svelte-use-auto-subscriptions-in-svelte-3-to-avoid-memory-leaks-when-using-stores?pl=getting-started-with-svelte-3-05a8541a)

- Whenever you use stores in Svelte you need to watch for memory leaks.
- `store.subscribe()` returns an unsubscribe function when you call it.
- One way to make sure there are no memory leaks is to import `onDestroy` from svelte and add the unsubscribe function that wwas returned from `store.subscribe()` to `onDestroy`.
- There's also a Svelte way to do this - instead of calling `store.subscribe()` simly reference the store variable with a `$` symbol in front of it - `$store`. Svelte will then take care of cleaning up the store after we've finished with it.
