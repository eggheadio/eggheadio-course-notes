[Video Link](https://egghead.io/lessons/vue-js-create-routes-in-vue-and-understand-the-path-hierarchy)

# 02. Create Routes in Vue and Understand the Path Hierarchy

First in main.js import new page components, in this example they will be `Egghead` and `Blog`

```js
import Egghead from './components/Egghead'
import Blog from './components/Blog'
```

Inside the `routes` array create new **route records** which are objects. Make a key named `path` and set to the value '/blog'. Make another route record object with a key named component and set it to 'Blog'. 


For the `Egghead` component creaate another object set the path key to `/blog` and the componet key to Egghead.  

When you the visit /blog the Blog component will display not Egghead. That's because **when you have matching routes the first route record is given higher priority and gets shown** 



   **Resources**

  [Route Matching Docs](https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes)
