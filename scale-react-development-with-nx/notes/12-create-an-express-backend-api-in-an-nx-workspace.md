# Create an Express Backend API in an Nx Workspace

**[📹 Video](https://egghead.io/lessons/egghead-create-an-express-backend-api-in-an-nx-workspace)**

As we have seen before, we can install a various number of plugins in our Nx workspace.

Let's install [Express](https://expressjs.com/) to create an API for the project.

```shell
yarn add -D @nrwl/express
```

After installation of this plugin, we can now generate a new express application with the command:

```shell
yarn nx generate @nrwl/express:application <name>
```

You can also use useful flags on this command. For example, using the `--frontendProject` flag will set up that project as the frontend and Nx will automatically set up a proxy for us.

```shell
yarn add -D @nrwl/express api --frontendProject=store
```

This command will start a new application called `api` and set up `store` as our frontend project.

If we run this command, we can see that inside our `store` folder, a `proxy.conf.json` file was set up by Nx.

```json
// content of proxy.conf.json
{
  "/api": {
    "target": "http://localhost:3333",
    "secure": false
  }
}
```

Now if we run our store application, the `/api` route will be forward to http://localhost:3333.


## References

- [Why Nx?](https://nx.dev/latest/react/getting-started/why-nx)
- [ExpressJs](https://expressjs.com/)