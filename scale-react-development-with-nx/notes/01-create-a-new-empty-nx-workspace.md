# Create a new empty Nx Workspace

**[📹 Video](https://egghead.io/lessons/egghead-create-a-new-empty-nx-workspace)**

> Nx is a set of extensible dev tools for monorepos, which helps you develop like Google, Facebook, and Microsoft.
> [Nx site](https://nx.dev/react)

We can create and configure a new NX workspace with the command

```shell
npx create-nx-workspace <workspace name>
```

Running this command will give you a set of options that allows you to create the best workspace for your needs.

- empty 
- oss
- web components
- angular
- angular-nest
- react
- react-express

Then it will also ask you about which CLI should be activated in your workspace

- NX - used for all workspaces
- Angular CLI - used for Angular workspaces

Finally, you get asked if you want to use the NX cloud, this is the commercial version of NX. There is a free tier which provides better performance and distribution of cache between co-workers.

## The Nx workspace

The workspace contains different files and folders.

- `Apps` folder - contains all the applications we want to host
- `Libs` folder - contains all the code, usually, applications will link to code inside this folder
- A single `node_modules` folder for the workspace
- The `package.json` serves as the global file for packages for the whole workspace
- `workspace.json` contains all the configuration of your projects and how to build it
- `nx.json` contains the configuration of the workspace