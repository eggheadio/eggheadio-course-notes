# Use Storybook to Develop React Components in Nx

**[📹 Video](https://egghead.io/lessons/egghead-use-storybook-to-develop-react-components-in-nx)**

Nx comes with a dedicated packaged for storybook - `@nrwl/storybook` that adds a series of useful code generators to add storybook to an existing React library.

Let's install the storybook package.

```shell
yarn add -D @nrwl/storybook
```

Now we can run the following command to create a Storybook for our shared components.

```shell
yarn nx generate @nrwl/react:storybook-configuration store-ui-share --configureCypress --generateStories
```

_**Note:** Our Header component is inside the `store-ui-share` so this is the name of the product that we want to add the Storybook configuration._

Let's take a brief look at these flags.

- `--configureCypress` set up a Cypress test configuration
- `--generateStories` generate stories automatically for components inside the `store-ui-share` library

We can run Storybook with the command:

```shell
yarn nx run store-ui-shared:storybook
```

Storybook will be run on http://localhost:4400, we can go to this url in our browser and see all the available stories that were automatically generated for us.

## References

- [Storybook](https://storybook.js.org/)
