# Create React Feature Libraries in an Nx Workspace

**[📹 Video](https://egghead.io/lessons/egghead-create-react-feature-libraries-in-an-nx-workspace)**

Let's see why you should keep the bulk of your code inside the `libs` folder.

- Reusability of the code, you can use it on different apps.
- Bounded context, you can group together some functionality and use it in an app.
  - This makes you think what should be private and what should be public.
  - Help speed compilation/testing/linting.

In this lesson, we create a new library, but we are using a new flag `--appProject`. This flag allows us to generate a router component in that project and link it to the generated library.

```shell
yarn nx g @nrwl/react:lib future-game-detail --directory=store --appProject=store
```

In the lesson example, we are creating the `future-game-detail` inside the `store` directory under `libs` and we are setting that router component.
