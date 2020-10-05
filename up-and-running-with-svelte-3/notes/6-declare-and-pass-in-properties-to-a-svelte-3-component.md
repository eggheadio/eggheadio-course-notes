# 6. Declare and pass in properties to a Svelte 3 component

[Video Link](https://egghead.io/lessons/svelte-declare-and-pass-in-properties-to-a-svelte-3-component?pl=getting-started-with-svelte-3-05a8541a)

- Now our app displays a user info component that we're importing from `UserInfo.svelte`

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
<h1>My surname is {surname}</h1>
```

- And we're calling this from `App.svelte`

```html
<script>
  import UserInfo from './UserInfo.svelte'
</script>

<UserInfo />
```

- Right now we don't have a way to change the values of UserInfo when we call it.
- But we can pass them in as props and then add the `export` keyword in front of our variable declarations
- In our UserInfo component we can set a default value for our prop by adding a definition `export let name = "Joe";`
