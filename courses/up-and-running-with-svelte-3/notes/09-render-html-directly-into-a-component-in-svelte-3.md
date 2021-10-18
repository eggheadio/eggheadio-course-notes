# 9. Render HTML directly into a component in Svelte 3

[Video Link](https://egghead.io/lessons/svelte-render-html-directly-into-a-component-in-svelte-3?pl=getting-started-with-svelte-3-05a8541a)

- We have a simple `<textarea>` component, and whatever we have typed into it we would like to render in the `div` below it.
- To do that we're going to `bind` the `value` of the `textarea` to the `stringToRender` variable like so `<textarea bind:value={stringToRender}/>`
- What if we wanted to paste in some HTML and have it render inside of the div? To do that we'll add the `@html` syntax in front of the variable like so:

```
<div>
    {@html stringToRender}
</div>
```

- Note that Svelte doesn't sanitize any string that you decide to use so make sure not to expose your users to an attack.
