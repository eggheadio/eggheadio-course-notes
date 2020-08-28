# Migrate authentication from a plain react app to a Gatsby App

[📹 Video link](https://www.egghead.io/lessons/gatsby-migrate-authentication-from-a-plain-react-app-to-a-gatsby-app)

## Notes

In the current state of our Gatsby app, the client-only route to our authenticated content is visible to anyone. Let's fix is.

Inside of `index.js` in the [Create-React-App version](https://codesandbox.io/s/optimistic-jepsen-1zqmb?from-embed=&file=/src/index.js) of our app, notice that we have `PrivateRoute`s with components.

## Updating our Gatsby App

Create a new file `private-route.js` inside of `src/components` and save the file.

Inside of Gatsby's `app.js` file, we will replace the `<Profile/>` and `<Stats/>` components with the `PrivateRoute` versions.

We will also add the `<Login>` component that we will bring over from the Create-React-App version into `components/login.js` in our Gatsby project.

```js
// inside app.js

const App = () => {
  return (
    <Router>
      <PrivateRoute component={Profile} path="app/profile" />
      <PrivateRoute component={Stats} path="app/stats" />
      <Login path="app/login" />
    </Router>
  )
}
```
