# Generate a new React app with Nx

**[📹 Video](https://egghead.io/lessons/egghead-generate-a-new-react-app-with-nx)**

When using the `nx list` command, we can see all the plugins available to be used in our workspace. We can use plugins for next, nest, node, angular, etc. There are also community plugins that give us more options like support for vue or go - just to name two of the options.

## Creating a React App

We can install `@nrwl/react` to get a react app started.

Using yarn

```shell
yarn add @nrwl/react
```

Using npx

```shell
npx i @nrwl/react
```

Now we can run `yarn nx list @nrwl/react` to see all the possibilities that this plugin gives us.

- Create an application
- Create a library
- Create a component
- Create a redux slice for a project
- Set up storybook
- Generate storybook story
- Create a cypress spec

_**Note:** Juri is using yarn on the course, so this notes will only contain the yarn version of running the commands, but you can use npx instead._

### Let's create the React Application

By running the command `yarn nx generate @nrwl/react:application <name>` you can also use `yarn nx g @nrwl/react:application <name>` for short.

When running this command, nx will ask you what kind of stylesheet format you want to use - for example: CSS, SASS, Stylus, etc.

We can also append the `--dry-run` flag to the previous command to allow us to see all the files that this command woudl create.

When creating a React Application there are a few configuration files that are automatically created for us.

- `.eslintrc`
- `babel.config.json`
- `jest.config.js`

