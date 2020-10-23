# Scale CI runs with Nx Affected Commands

**[📹 Video](https://egghead.io/lessons/egghead-scale-ci-runs-with-nx-affected-commands)**

One of the issues with working with monorepos is that the more our workspace grows, the slower our CI will be.

Also, you probably don't want to build the whole workspace if you have changed a few files in a part of the workspace like an application.

Nx provides an _affected command_ that helps us build only the things that have changed.

```shell
yarn nx affected:<target> --base=<branch - defaults master>
```

We can have a visual representation of the changes done on our workspace with the command:

```shell
yarn nx affected:dep-graph --base=16-adjust-jest-test
```

Let's say that on our CI we want to run all the affected tests and linting for the changes that we are trying to merge.


We can run the `test` target for all affected changes.

```shell
yarn nx affected:test --base=16-adjust-jest-test
```

Then we can run the `lint` target for all the affected changes.

```shell
yarn nx affected:lint --base=16-adjust-jest-test
```

> " As you can imagine, this is really powerful especially in your CI configuration. For instance, to run all the test cases, you would just use the test target here on your CI configuration to run only those projects that have been touched by a given PR."

## References

- [Affected command](https://nx.dev/latest/react/cli/affected#affected)