[Video Link](https://egghead.io/lessons/vue-js-access-route-parameters-in-a-vue-component)

# 03. Access Route Parameters in a Vue Component

**There are three way to access the id parameter to navigate to your route.** 



First you can add `:id` to the end of the value you have set for path

```js
{
    path: '/blog:id',
    component: Blog,
  }
```

Then in the Blog.vue component file you can access the `id` right inside the template

```js
<template>
  <div id="blog">
    <h1>This is blog number {{this.$route.params.id}}</h1>
  </div>
</template>
```

**This way makes a strict connection with the route and limits the flexibility of the component**

You can also access the id with a JavaScript function in videos example call it `id()` and return `this.$route.params.id` from the `id` fumction and use id inside the template 

```js
<template>
  <div id="blog">
    <h1>This is blog number {{id}}</h1>
  </div>
</template>

<script>
  export default {
    name: "blog",
    computed: {
      id() {
        return this.$route.params.id
      }
    }
  };
</script>
```

The last way is to go back to the App.vue file. On the object inside of the routes array, add a key called props and set its value to true 

```js
const routes = [
...
{
    path: '/blog:id',
    component: Blog,
    props: true
  }
...
]
```

Go back to Blog.vue and inside the `export default` object make a props key and set it's value to `["id"]`

```js
<script>
  export default {
    name: "blog",
    props: ["id"]
  };
</script>
```



   **Resources**

  [Passing Props to Route Components Docs](https://router.vuejs.org/guide/essentials/passing-props.html#boolean-mode)
  

