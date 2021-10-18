# [Preload React Components with the useEffect Hook](https://egghead.io/lessons/react-preload-react-components-with-the-useeffect-hook)

Sometimes, it is great to pre-load the next page before hand because we know that the user is always going to navigate to it after the current page. For example, in our use-case:
While users are filling out the form on our home page, it would be a good idea to pre-load the next page they will be going to so they don't have to wait for it to load once they've finished filling out the form. `useEffect` hook makes this really easy.

We are right now using `React.lazy` to dynamically load our pages. Suppose, our user is running on very low connectivity, the next page (User) will take time to load and that can be a bad user experience. Instead, what we can do is load `User` also at the time of loading `Home`.

One method to do this is that in our Home component, we will useEffect and inside it we will preload the User page. When the component mounts, this piece of code will run

```javascript
function Home() {
  useEffect(() => {
    // preload the next page
    import('../user')
  }, [])

  ...
}
```

Now, if I refresh, after the resources for Home page are fetched and the bundles and chunks for `Home` are loaded, we're actually going to follow up with a request for our other chunks that we need for the `User` page.
