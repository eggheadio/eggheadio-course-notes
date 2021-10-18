[Video Link](https://egghead.io/lessons/react-start-a-virtual-reality-project-with-react-360)

# 01. Set up Vue-Router and add the Root Application Route



Use `npm to insall --save vue-router` to install Vue Router. The `--save` flag to add it to the package.json. Then run the app with the `npm run serve` 

Inside of main.js, `import VueRouter from vue router`. Then use the `Vue.use` function and pass in `VueRouter`

Then you'll create an emtpy routes array

```js
import VueRouter from 'vue-router'
.
.
.
Vue.use(VueRouter)

const routes = []
```

Use `const router = new VueRouter` to create a new instance of `vue-router`. Inside of the new `VueRouter` add your empty routes array you created. Set the `mode` key to the value of `history` then add the `router` to the Vue app

```js
const router = new VueRouter({
   routes,
   mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
```

In the `App.vue` file we add the `<router-view>` tag inside of the the div tags with the id of app.
```html
 <div id="app">
    <router-view></router-view>
  </div>
```

All route components will ppear in `<router view>`

In the main.js folder inside the empty `routes`array. Create a route record which is an object. It requres a path key and component key. Set the path key to `'/'` and the component key to Home.

**Make sure to import the Home component**

```js
import Home from './components/Home'
.
.
.
const routes = [
  {
    path: '/',
    component: Home
  }
]
```

   **Resources**
   
   [Installation Docs](https://router.vuejs.org/installation.html#direct-download-cdn)

   [Getting Started Docs](https://router.vuejs.org/guide/#html)
