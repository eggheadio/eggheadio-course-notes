# 5. Create a new Svelte 3 component to render it inside of another component

[Video Link](https://egghead.io/lessons/svelte-create-a-new-svelte-3-component-to-render-it-inside-of-another-component?pl=getting-started-with-svelte-3-05a8541a)

- We start with the following code

```html
<script>
  let name = 'John'
  let surname = 'Doe'
</script>

<style>
  h1 {
    color: royalblue;
  }
</style>

<h1>My name is {name}</h1>
```

- Let&rsquo;s create a new component that we&rsquo;re going to use to display our surname
- Create a new file in your `src/` directory, let&rsquo;s call it `Surname.svelte`

```html
<script>
  let surname = 'Doe'
</script>

<h1>My surname is {surname}</h1>
```

- Of course this text is not visible because it isn&rsquo;t rendered in our app
- Let&rsquo;s add it to our component by going back to `App.svelte` removing the surname declaration, and adding `import Surname from 'Surname.svelte'`
- Notice that the h1 style tag in our `App.svelte` doesn&rsquo;t effect our surname component. If we want to style that component we can do it inside of `Surname.svelte`
