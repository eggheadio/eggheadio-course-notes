# Install and use external npm packages in an Nx Workspace

**[📹 Video](https://egghead.io/lessons/egghead-install-and-use-external-npm-packages-in-an-nx-workspace)**

We can install npm packages in an Nx Workspace like we install any npm package.

### Using yarn:

```shell
yarn add <package name>
```

### Using npx:

```shell
npx install <package name>
```

The thing to keep in mind is that, since we have a global `package.json` file, the package that we are installing, will be available for the entire workspace.

## References

- [Material UI website](https://material-ui.com/)
