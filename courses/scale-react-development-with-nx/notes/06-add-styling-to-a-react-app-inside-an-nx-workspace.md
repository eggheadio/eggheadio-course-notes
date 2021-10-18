# Add Styling to a React app inside an Nx workspace

**[📹 Video](https://egghead.io/lessons/egghead-add-styling-to-a-react-app-inside-an-nx-workspace)**

When we ran the command to create our workspace on [lesson 1](https://egghead.io/lessons/egghead-create-a-new-empty-nx-workspace) we have selected to use SASS for our stylesheet, so any style being placed inside the `styles.scss` file will be compiled for us.

There are a few ways you can manage your stylesheets.

- You can import them into that `styles.scss` file
- Update the `styles` array inside the `build` in the `workspace.json` file
  - Any file added to the array will be compiled at build time

## Using the `style` flag

If you already know what sort of file extension you want to use for your styles, you can use the `--style` flag together with the `npx generate` command to specify a format.

For example to use Less you can run the command

```shell
yarn npx generate @nrwl/react:application --style less
```

_**Note:** Nx will save your style options and will use that throughout the whole workspace._
