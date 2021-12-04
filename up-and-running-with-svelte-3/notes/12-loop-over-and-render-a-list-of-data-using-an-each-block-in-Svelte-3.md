# 12. Loop over and render a list of data using an each block in Svelte 3

[Video Link](https://egghead.io/lessons/svelte-loop-over-and-render-a-list-of-data-using-an-each-block-in-svelte-3?pl=getting-started-with-svelte-3-05a8541a)

- You can iterate over lists of values with an `each` block
- This is the syntax for the `each` block

```html
<ul>
  {#each items as item}
  <li>{item.name}</li>
  {/each}
</ul>
```

- You can use `each` blocks to iterate over any array or array-like value
- [Svelte Documentation for each](https://svelte.dev/docs#each)
