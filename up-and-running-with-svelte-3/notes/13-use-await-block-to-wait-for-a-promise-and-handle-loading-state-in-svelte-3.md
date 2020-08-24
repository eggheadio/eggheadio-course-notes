# 13. Use await block to wait for a promise and handle loading state in Svelte 3

[Video Link](https://egghead.io/lessons/svelte-use-await-block-to-wait-for-a-promise-and-handle-loading-state-in-svelte-3?pl=getting-started-with-svelte-3-05a8541a)

- In Svelte when you are waiting for asynchronous data you can use `await` blocks
- First, inside the `script` tag, assign your `async` function to a variable, we&rsquo;re calling it `promise` here
- Then, we can use an await block with the following syntax

```
{#await promise then result}
    <h1>{result}</h1>
{/await}
```

- If you want to display something while you wait for the function to return then you can use this syntax:

```
{#await promise}
    <h1>Loading...</h1>
{:then result}
    <h1>{result}</h1>
{/await}
```
