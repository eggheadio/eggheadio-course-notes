# Linting a React app with Nx

**[📹 Video](https://egghead.io/lessons/egghead-linting-a-react-app-with-nx)**

Nx also generates a `.eslintrc` files when we start a new workspace - this file contains some linting rules that are set up for us.

Since the lint rules were set up for us we can run the lint command:

```shell
yarn nx run store:lint
```

This will lint our `store` applications for potential issues.