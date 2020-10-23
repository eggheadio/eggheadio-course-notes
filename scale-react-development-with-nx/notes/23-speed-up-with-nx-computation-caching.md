# Speed up with Nx computation Caching

**[📹 Video](https://egghead.io/lessons/egghead-speed-up-with-nx-computation-caching)**

> "Nx shines when it comes to scale your monorepo to the masses."

Nx uses a computation cache. Which means that whenever we run a command, Nx will cache it so if we run the same command again it will get the results from the cache and return it.

This is useful because in large monorepos using cache will save us a large chunk of time. Also, if we haven't touched a particular part of our workspace there is no point of running a _test_ for example on that project since nothing has changed.

Nx also has a flag that allows you to skip the cache when running the `affected` command.

```shell
yarn nx affected:test --all --skip-nx-cache
```

## Nx cloud

When we created our Nx workspace, we got prompted if we wanted to use Nx cloud. 

Nx cloud brings benefits when dealing with cache because it will be shared among all the users of our workspace. So our coworkers can benefit from it.