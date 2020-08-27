# Setting up a new Github repo to deploy functions on Netlify with Make and netlify.toml

[Video Link](https://egghead.io/lessons/git-setting-up-a-new-github-repo-to-deploy-functions-on-netlify-with-make-and-netlify-toml)

- We&rsquo;ve designed and implemented the React component for our OpenGraph image. Next, we need to set up a git repo and deploy it to Netlify, which is where we&rsquo;re going to deploy our functions. After making a directory, we can initialize a new git repo.
- Next, we&rsquo;ll use the VS Code CLI to open this directory.

``` bash
        mkdir egghead-opengraph-images
        cd egghead-opengraph-images
        git init
        code .
```

- We&rsquo;ll start by initializing a new package.json. Then, we&rsquo;ll create an `index.html`. This `index.html` will deploy by default when we deploy it in Netlify, so we can check to make sure that the deployment worked.

``` bash
        yarn init -y
        touch index.html
```

- We&rsquo;ll also need that `netlify.toml` with a build section that specifies the directory the functions will live in and also the command we will use to build everything. In this case, because we will end up with multiple functions and those functions need to have their dependencies installed separately, we&rsquo;re going to use Make. **All our functions will live in the functions directory.**
- ❓ **What is Make?:** Make is a tool which controls the generation of executables and other non-source files of a program from the program&rsquo;s source files. In other words Make knows how to build our program based on a series of commands. This way Netlify&rsquo;s servers know how to deploy our functions.

```
    # netlify.toml

    [build]
      functions = "functions"
      command = "make install"
```

- To use Make, we&rsquo;ll create a Makefile with an install command. It&rsquo;s important that each command we put into this install command is started by a tab at the beginning of a line.

```
        Makefileinstall:
         echo "installed"
```

- Create this repo on Github. Chris uses [the hub api](https://hub.github.com), which allows you to use github from the command line. You can also clone Chris&rsquo;s code - here is [the commit for this lesson](https://github.com/christopherbiscardi/egghead-opengraph-images/tree/473d3883fd525c6c5d6391a6e16f8356b8666a42). But you can also copy or fork the final code and modify it accordingly.
- Deploy the site from netlify
- **NOTE: Later on in order to get this function working in Netlify you need [to change the Build image selection](https://docs.netlify.com/configure-builds/get-started/#build-image-selection) from &ldquo;Ubuntu Xenial 16.04&rdquo; which is the default to &ldquo;Ubuntu Trusty 14.04&rdquo;.**
- The Makefile is visible at /Makefile. This isn&rsquo;t an issue, but if you wanted to change it you would just make a subdirectory and change the published directory.
