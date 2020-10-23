# Create a Shared React Library in an Nx Workspace

**[📹 Video](https://egghead.io/lessons/egghead-create-a-shared-react-library-in-an-nx-workspace)**

> "The real power of Nx comes when you have to scale your development across different teams and across different applications. Nx is actually designed to work in large monorepos where you have most of your applications or a subset of correlated applications within the same workspace."

Let's look at the difference between **Applications** and **Library**.

In essence, the applications living inside the `apps` folder will use different libraries, so they will bundle the code inside the `libs` folder.

The Library will contain code that we want to import from the `apps` folder. This is where all our components and other code will live and the amount of code inside the `libs` folder is always larger than the one in the `apps` folder.

## Create a React Library 

Similar to how we can create a new React Application, we will use the command line to create a new Library.

```shell
yarn nx g @nrwl/react:lib <name of library> --directory=<name of directory>
```

Since you can have different applications in your Nx workspace, it's a good idea to put new libraries inside a directory that contain the name of the application that will use this library. 

This is why we used the `--directory` flag, to create a new library inside a `store` folder, since we will use this library on our store.

## Generating a React Component

When we create a React Library, Nx will also generate a placeholder component for us. Let's see how you can generate a React component with the command line.

```shell
yarn nx g @nrwl/react:component <name of component> --project=<name of library>
```

Remember that we created a `ui-shared` library earlier. By using the `--project` flag, we can specify which library should this component be generated in. This flag takes the combination of the library path.

**Example:*

```shell
yarn nx g @nrwl/react:component header --project=store-ui-shared
```

This command will create a header component inside the `store` and inside the `ui-shared` folder.

_**Note:** You can go into `workspace.json` and inside `projects` you can see a `store-ui-shared` node created - this is what we use in the `--projects` flag._

After running the component generate command, Nx will ask if you want the component to be exported.

If you are using the component in the Application and is not an internal component to the library, then you should select yes.

## Using the newly created component

Since we exported this component, we can open the `tsconfig.base.json` file and scroll down to `paths` to see the paths of each created component.

```json
  
{
  "compileOnSave": false,
  "compilerOptions": {
    "rootDir": ".",
    "sourceMap": true,
    "declaration": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "es2015",
    "module": "esnext",
    "typeRoots": ["node_modules/@types"],
    "lib": ["es2017", "dom"],
    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@nxegghead/store/ui-shared": ["libs/store/ui-shared/src/index.ts"]
    }
  },
  "exclude": ["node_modules", "tmp"]
```

You can see that we have `@nxegghead/store/ui-shared` created inside `paths`. This is what we need to use to import our component.

```react
import { Header } from @nxegghead/store/ui-shared
```