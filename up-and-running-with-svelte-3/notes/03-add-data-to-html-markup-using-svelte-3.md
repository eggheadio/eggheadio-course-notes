# 3. Add data to HTML markup using Svelte 3

[Video Link](https://egghead.io/lessons/svelte-add-data-to-html-markup-using-svelte-3?pl=getting-started-with-svelte-3-05a8541a)

- First erase all the content from App.svelte and replace it with this content.

  ```html
  <script>
    let name = 'Your Name Goes Here'
  </script>

  <h1>Hello {name}!</h1>
  ```

- The variable inside of the curly braces should get rendered in your h1 tag when you switch back to your browser.
- The variable is a regular Javascript variable and so you can use other elements on it.
- Try using `name.toUpperCase()`
