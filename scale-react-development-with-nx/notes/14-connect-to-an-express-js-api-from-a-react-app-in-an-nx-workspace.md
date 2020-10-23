# Connect to an Express.js API from a React app in an Nx Workspace

**[📹 Video](https://egghead.io/lessons/egghead-connect-to-an-express-js-api-from-a-react-app-in-an-nx-workspace)**

Since we set up `store` as the frontend when we created our `api` application and Nx created that proxy for us, we can now use that url to fetch data straight from our backend.

So if we try to fetch `/api/games`, that request will use our proxy and fetch the data from out backend which is running on port 3333:

```react
fetch('/api/games')
  .then((x) => x.json())
  .then((res) => {
      setState({
          ...state,
          data: res,
          loadingState: 'success'
      })
  })
```

## References

- [WebPack dev proxy](https://webpack.js.org/configuration/dev-server/#devserverproxy)
