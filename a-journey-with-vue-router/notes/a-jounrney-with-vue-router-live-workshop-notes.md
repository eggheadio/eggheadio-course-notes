# **What I learned that stuck out**

How to create default routes

Change component to components when you have more than 1 child

Default Path overrides all routes that come after if you use it be careful

In the main.js we `import Home from './components/Home'`. We will import new pre-made components each section that we move to.

Create const router which will be an empty array


```js
    const router = []
```     

Inside of router will put route records which are objects. `path` and `component` are required properties to make a route

```js
    const router = [
    	{
        path: '/',
        component: Home,
        }
    ]
```

The slash we used to set the path can only be used on 1 place

We also need to create `const router` and assign to *`new* VueRouter` Inside of `VueRouter()` we place an object and and a mode property set to history

```js
    const router = new VueRouter({
      routes,
      mode: 'history',
    })
```

We can also set parameters in our routes we'll be using `:id`

```js
    {
    	path: '/blog/:id',
      name: 'blog',
    } 
```

If we try to view this it will show a blank screen. We need to add the id to the to the `<h1>`

We need to go to our Blog.vue component and on the `<h1>` line place `{this.$route.params.id}.` There are different way to do this. This works best when you just want to display something.

  ```html
   <h1>This is blog number {{this.$route.params.id}}</h1>
  ```

# **Nested Routes**

Inside of our Blog.vue component also put another `<router-view>` (copy paste)

Next go back to main.js and add to our blog route a `children` property, which will be an array with an object. Inside of the the object you'll place `path` and `components`  properties. 

****Make sure it's components instead component when you have more than one child***

## Default Routes

For default routes like 404 pages create a new object inside of our `children` array. You can set the `path` property to different things. Setting `path` to /* will override all routes after where it is placed. Unless you set it at the very bottom of the routes array. 

You can use just * with the / but that doesn't have a path directly

In this lesson we'll make the `pageNotFound` componet a path. and set an alias to * (Alias doesn't change the URL)

```js

    {
        path: 'pageNotFound',
        alias: '*',
        component: PageNotFound,
       },
```

Next add `meta` object inside of our routes array in the lesson we'll add them to the Home route and the Egghead routes. We will use the `requiresAuth` property in each component. We'll set one to the value of false and the other to true.  **The meta can be whatever we want.**

You can access the meta with `This.$route.meta.requiresAuth`


```js
    {
        path: '/',
        component: Home,
        meta: {
          requiresAuth: false,
        }
      },
      {
      path: '/egghead',
      component: Egghead,
      meta: {
        requiresAuth: true,
      }
```

****Meta is special keyword of the Vue framework***

## Navigation Guards

We add a function called `isAuthenticated` that `returns true`

BeforeEach is a global navigation guard

`router.BeforeEach` is the navigation guard syntax it takes the parameters `to` `from` and `next.`

Inside of the method we have an if statement using `.matched`  if the condition passes it goes onto the `next` function.

The next function without anything inside says just complete this hook. It will send you where you want to go.

If put a path inside `next` it will send you the that path 

****Most important part of next, next should only ever be called once through the navigation guard***

```js
    function isAuthenticated() {
      return true
    }
    
    router.beforeEach((to, from, next) => {
      if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (isAuthenticated()) {
          next()
        } else {
          next('/failed')
        }
      } else {
        next()
      }
    })
 ```

The if else statements keep you from hitting next more than once

BeforeEach is a global navigation guard. 

BeforeEnter is similar and applies only to routes where it's defined.

beforeRouteLeave() is a navigation guard that it inside a component

**Navigation Guards Docs**

[https://router.vuejs.org/guide/advanced/navigation-guards.html](https://router.vuejs.org/guide/advanced/navigation-guards.html)

## Routing inside of a component

Go to the Home.vue component create a button `v-on:click`  use the function `goToEggHead()` 

In the script tags of the Home.vue component, we'll add methods and create the `toEgghead()` function. the function will be `this.$router.push("/egghead")` 

inside of () we will place the path we want to go to.

```js

    <div id="home">
        <h1>Home Page</h1>
        <button v-onclick="toEgghead()">Go Elsewhere</button>
      </div>
    </template>
    
    
    <script>
    export default {
      name: "home"
      methods: {
        toEgghead() {
          this.$router.push("/egghead");
        }
      }
    };
    </script>
 ```

This way pushes a new path on the router

To change the path to something more complex like blog. We need to add an id into the `toBlog()` function

In methods we had an 'id' parameter and push with a template literal with the id parameter

```js
    <div id="home">
        <h1>Home Page</h1>
        <button v-onclick="toBlog(1234)">Go Elsewhere</button>
      </div>
    </template>
    
    
    <script>
    export default {
      name: "home"
      methods: {
        toBlog(id){
          this.$router.push(`/blog/${id}`);
        }
      }
    };
    </script>
    
 ```

**Path isn't the only way to define components we can also use name.**

In main.js we'll add name and call it "blog". In Home.vue we'll change what we are passing toto .push to an object using key value pairs `{name: 'blog', params: {id: id} }`

Vue router has an API called `<router-link>` where you can set the path you want to go to without all the JavaScript we we're using earlier 

`<router-link :to =" '/egghead ">`

When setting path for router link you quotes to define and quotes to say that it's a string.

It's a link that's clickable but you can add a tag like button to make it appear as a button 

`<router-link tag="button" :to =" '/egghead ">`

Vue Router API reference(including router link)

[https://router.vuejs.org/api/](https://router.vuejs.org/api/)

***Path and params cannot be used together**

# **Refactor**

Add a new file that is a router directory and create a index.js inside of it.

In main.js take everything from import vue on down to right before `new Vue` and place into index.js. Remove import app we don't need it in index.js. But keep it in main.js

Also, on our imports we have ./ we need to change all of them to ../ since they're now in a another folder

At the bottom of the index.js we need to add 

`export default router` 

then go to main.js and `import router from './router/index'`

Now to refactor the blog create a new file blog-routes.js

Remove the whole blog path and its child paths

In blog-routes.js create `blogRoutes`  which will be an array of what we just cut out of index.js and `export default blogRoutes`

```js
    const blogRoutes = [
    	{
    		path: '/blog/:id',
    		name: 'blog'
    		component: Blog,
    		children: [
    	{
    path: '/guest',
    components: GuestPost,
    	},
    ]
    
    export default blogRoutes
```

In index.js `import blogRoutes from './blog-routes'`

Then use the spread operator `...blogRoutes` to put the blogRoutes array into your index.js
