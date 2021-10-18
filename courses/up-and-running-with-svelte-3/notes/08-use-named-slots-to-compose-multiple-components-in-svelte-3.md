# 8. Use named slots to compose multiple components in Svelte 3

[Video Link](https://egghead.io/lessons/svelte-use-named-slots-to-compose-multiple-components-in-svelte-3?pl=getting-started-with-svelte-3-05a8541a)

- We have a box component that is showcasing our App
- We want to be able to inject whatever we want into the `<header>`, `<body>`, and `<footer>`
- In order to do that in our box component we are going to add named slots
- Named slots are slots with the attribute `name`. For example: `<slot name="header" />`
- Then in `App.svelte` we are going to had content to these slots. We do that by creating whatever elements we want with the attribute `slot` set to one of the names of we set in `Box.svelte`:

```html
<Box>
  <h1 slot="header">Title of the paper</h1>
  <span slot="body">Description of the paper</span>
  <span slot="footer">Footer text</span>
</Box>
```

- In this example each of these elements will be placed into the appropriate named slot.
