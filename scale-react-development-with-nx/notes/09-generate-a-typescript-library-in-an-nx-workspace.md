# Generate a TypeScript library in an Nx Workspace

**[📹 Video](https://egghead.io/lessons/egghead-generate-a-typescript-library-in-an-nx-workspacece)**

To create a plain TypeScript library, we can run the command

```shell
yarn nx g @nrwl/workspace:lib <name of library> --directory=<directory name>
```

_**Note:** Since we are using a plain TypeScript, we don't need to use `@nrwl/react` plugin, we instead just generate a library inside the workspace with the command `@nrwl/workspace:lib`._

Similar to creating components, we can check how this TypeScript library is being exported by looking in the `paths` node inside the `tsconfig.base.json` file. Then we can use that to import the TypeScript library inside our Application.

```react
import { formatRating } from '@nxegghead/store/util-formatters'
```

_**Note:** `formatRating` was just a function that we used in this new library that we created._
