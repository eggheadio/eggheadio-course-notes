# Building your React app with Nx

**[📹 Video](https://egghead.io/lessons/egghead-building-your-react-app-with-nx)**

As we have been doing throughout the course, we can open the `workspace.json` file and see what targets are available to us.

To build our project we can run the command:

```shell
yarn nx run store:build --configuration=production
```

Alternatively you can run the `nx build` command that is set up for us by Nx

```shell
yarn nx build store --configuration=production
```

You can see that we _production_ to the `--configuration` flag, that tells Nx that you are building for production.

After running the command we can see that the production ready build was created on `dist/app/store`.

