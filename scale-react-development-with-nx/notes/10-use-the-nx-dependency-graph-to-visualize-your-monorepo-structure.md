# Use the Nx Dependency Graph to Visualize your Monorepo Structure

**[📹 Video](https://egghead.io/lessons/egghead-use-the-nx-dependency-graph-to-visualize-your-monorepo-structure)**

> "Behind the scenes, Nx understands the structure of your workspace. It create that dependency graph that understands the relationship between applications that live up here and libraries down here, or even between the libraries."

We can launch the visual tool that draws the dependency graph with the command:

```shell
yarn nx dep-graph
```

Then you can go to http://127.0.0.1:4211 in your browser, to see and interact with the graph.

The visual tool starts empty, but you can select apps, projects and libraries by using the checkboxes. You can also click the _Select All_ button to see a visual representation of your whole monorepo.

**Good to know**

A few things that are good to know about the graph representation of your project:

- Applications are represented by squares
- Libraries are represented by circles
- The arrows show the libraries that an application imports

If you click on each element of the graph you can focus the view on that element to get a better understanding of what relationships each element has.
