# Use Run Commands to launch the API and App of an Nx Workspace

**[📹 Video](https://egghead.io/lessons/egghead-use-run-commands-to-launch-the-api-and-app-of-an-nx-workspace)**

To have the two applications working (the frontend and the backend), we need to run two commands - one to run each application.

```shell
yarn run <app name>:serve
```

For example to run both the api and the store application we can run in one terminal

```shell
yarn run api:serve
```

And in another terminal

```shell
yarn run store:serve
```

When we have both applications running we can now go to http://localhost:4200/api to get the api results.

_**Note:** Since Nx created a proxy for us, the store application is running on port 4200 whilst the api one is running on a different port. We can access the api application, because of that proxy._

## Running both applications with a single command

Nx allows us to run as many applications as we need with the command `run-many`.

```shell
yarn nx run-many --target=serve --projects=api,store --parallel=true
```

That's a lot of flags! Let's have a look at them:

- `--target` is the type of command we want to run - we want to use `serve` to run both applications
- `--projects` these are all the applications we want to run in the command, they are comma-separated
- `--parallel` is used because we want to serve both projects together at the same time
  - If we don't use it, nx would run the first project until terminated, before starting the next one

## Creating a run command to launch both applications

Let's open the `workspace.json`, inside the `store` we can see that inside the `architect` node we have a few targets like _build_, _serve_, _lint_ and _test_.

We can create a custom target that will allow us to start the `api` application together with the store. That way we won't rely on the `run-many` command.

```json
{
  // Inside the architect node
  "serveAppAndApi": {
    "builder": "@nrwl/workspace:run-commands",
    "options": {
      "commands": [
        {
          "command": "nx run api:serve"
        },
        {
          "command": "nx run store:serve"
        }
      ]
    }
  }
}
```

- Each command has to have a builder which has the implementation to run the job.
- We can now choose `options` which are commands that we want to execute.

_**Note:** `run-commands` will run the commands in parallel by default._

Now we can run our custom target with the command:

```shell
yarn nx run store:serveAppAndApi
```

> "Run commands are very powerful because you can encapsulate whatever script you want to run within your workspace configuration, where all our scripts and run commands are."

## References

- [Nx run-many command](https://nx.dev/latest/react/cli/run-many#run-many)
- [Nx run-commands](https://nx.dev/latest/react/plugins/workspace/builders/run-commands)
