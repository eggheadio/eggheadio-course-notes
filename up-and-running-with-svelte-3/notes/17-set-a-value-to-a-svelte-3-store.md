## 17. Set a value to a Svelte 3 store

[Video Link](https://egghead.io/lessons/svelte-set-a-value-to-a-svelte-3-store?pl=getting-started-with-svelte-3-05a8541a)

- Sometimes we know the exact value that we want to set our store to.
- For that we use the set method of store, in our example we want to set the value of store to whatever the user enters in the form which we can do by adding the following to our event handler: `store.set(event.target.value)`
