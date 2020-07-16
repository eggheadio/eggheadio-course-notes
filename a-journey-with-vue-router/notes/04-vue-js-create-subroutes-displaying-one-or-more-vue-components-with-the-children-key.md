[Video Link](https://egghead.io/lessons/vue-js-create-subroutes-displaying-one-or-more-vue-components-with-the-children-key)

# 04. Create Subroutes Displaying One or More Vue Components with the children Key

Import a new component that will be used as the sub-component

**Route to the sub-component inside the routes array. Add a `children` key with a value that's an array** 

```js
const routes = [
  {
    path: '/',
    component: Home
  }, {
    path: '/blog:id',
    component: Blog,
    children: [
    ]
  }, {
    path: '/egghead',
    component: Egghead
  }
]
```

Inside the array make an object, called a route record. Set the path key to `'guest'`, and the component key to `GuestPost`

```js
...
{
    path: '/blog:id',
    component: Blog,
    children: [
      {path: 'guest', component: GuestPost}
    ]
  }
...
```

Inside of Blog.vue (The component you want the sub-component to show in) add the `router-view` tag. This will map to the sub navigation that was created. Add /guest to the end of the URL to view it in the browser.

```html
<template>
  <div id="blog">
    <h1>This is blog number {{this.$route.params.id}}</h1>
    <router-view></router-view>
  </div>
</template>
```

You can also set the path to  `/guest` instead of  just `guest` and vist the sub-component directly through `localhost8080/guest`

**You can use multiple more than one sub-component at the same time**

Add another `router-view` tag in Blog.vue give it a name. In the video we will use `second`.

```html
<template>
  <div id="blog">
    <h1>This is blog number {{this.$route.params.id}}</h1>
    <router-view></router-view>
    <router-view name="second"></router-view>
  </div>
</template>
```
**In main.js change the `component` value insides the routes array to `components`**

Components is the key and the value of components is an object

You can set the key to `default` or `first` to point to the GuestPost value.
**If using the key first, add `name="first"` to the router-view tag**

You can use the key `second` to route the the `Egghead` value component.



```html
<template>
  <div id="blog">
    <h1>This is blog number {{this.$route.params.id}}</h1>
    <router-view name="first"></router-view>
     <router-vie name="second"></router-view>
  </div>
</template>
```
```js
  {
    path: "/blog/:id",
    component: Blog,
    props: true,
    children: [
      {
        path: "",
        components: {
          first: GuestPost,
          second: Egghead
        }
      }
  ```




# Resources

[Nested Routes Docs](https://router.vuejs.org/guide/essentials/nested-routes.html)
