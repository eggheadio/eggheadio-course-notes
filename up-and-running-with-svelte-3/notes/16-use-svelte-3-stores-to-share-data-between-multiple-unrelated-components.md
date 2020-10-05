# 16. Use Svelte 3 stores to share data between multiple unrelated components

[Video Link](https://egghead.io/lessons/svelte-use-svelte-3-stores-to-share-data-between-multiple-unrelated-components?pl=getting-started-with-svelte-3-05a8541a)

- Sometimes we want to be able to share data between multiple unrelated components, in Svelte we do that with _stores_
- Create a new file called `store.js` with the following contents:

```js
import { writable } from 'svelte/store'

export const store = writable(0)
```

- You can import the store in a svelte file by adding `import { store } from "./store";` and get its value by using `store.subscribe()` which allows you to get the `value` of the store
- You can update store using `store.update(n => n+1);`
- [The full documentation for stores](https://svelte.dev/docs#svelte_store)
