# Running a React App in the Browser with Nx

**[📹 Video](https://egghead.io/lessons/egghead-running-a-react-app-in-the-browser-with-nx)**

Let's talk about the `workspace.json` - this file contains all the projects available in the workspace, current configuration and how you can run, build, test or anything that you can do in your projects.

```json
{
  "version": 1,
  "projects": {
  },
  "cli": {
  },
  "schematics": {
  },
  "defaultProject": "store"
}
```

Inside `projects` we can see all the projects inside our workspace. Currently we have `store` and `store-e2e`.

```json
 "store": {
      "root": "apps/store",
      "sourceRoot": "apps/store/src",
      "projectType": "application",
      "schematics": {},
      "architect": {
        "build": {},
        "serve": {},
        "lint": {},
        "test": {}
      }
 }
```

If we open the `store`, we can see the basic information for the application, we also have this `architect` which contains all the targets that an app can run.

- Build the app
- Serve the app
- Lint the app
- Test the app


## Running the React App

To running the React Application we need to `serve` the app. If we open `serve` we can see a few things:

```json
{
    "serve": {
        "builder": "@nrwl/web:dev-server",
        "options": {
            "buildTarget": "store:build"
        },
        "configurations": {
            "production": {
                "buildTarget": "store:build:production"
            }
        }
    }
}
```

- The `builder` entry is responsible for running the application
- The `options` allow you to pass options to the command, for example to change a port
- 

Let's go into our command line and use the command to run the React Application.

```shell
yarn nx run <name of the project>:serve
```

So in our case we will run `yarn nx run store:serve`

_**Note:** `workspace.json` contains a `defaultProject`, this allows us to run the command `yarn start` to run the `serve` command of the project set as default. Have a look at `package.json`._

## References

- [List of available options for the serve command](https://nx.dev/latest/react/plugins/web/builders/dev-server)