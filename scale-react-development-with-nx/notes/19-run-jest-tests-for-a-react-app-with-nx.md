# Run Jest tests for a React app with Nx

**[📹 Video](https://egghead.io/lessons/egghead-run-jest-tests-for-a-react-app-with-nx)**

When we generate an Application or Library inside an Nx workspace, Nx will preconfigure Jest and will set some basic tests.

We can run our tests with the command:

```shell
yarn nx run store:test
```

If we run this command, the basic tests that were created will fail, because we have changed our application so we need to update our tests.

If you want to have the same experience with jest by using the jest watcher, if you pass the `--watch` flag to the previous command.

```shell
yarn nx run store:test --watch
```
