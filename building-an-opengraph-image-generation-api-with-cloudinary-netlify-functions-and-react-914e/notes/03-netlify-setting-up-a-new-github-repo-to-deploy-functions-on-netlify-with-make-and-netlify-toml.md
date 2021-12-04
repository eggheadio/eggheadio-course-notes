# Setting up a new Github repo to deploy functions on Netlify with Make and netlify.toml

[Video Link](https://egghead.io/lessons/git-setting-up-a-new-github-repo-to-deploy-functions-on-netlify-with-make-and-netlify-toml)


<TimeStamp start="0:01" end="0:08">

We need to set up a git repo and deploy it to Netlify, which is where we're going to deploy our functions. 

</TimeStamp>

<TimeStamp start="0:09" end="0:17">

To make a new directory run, initialize the git repo and open VS Code CLI to open the directory run the following:

```bash
mkdir egghead-opengraph-images
cd egghead-opengraph-images
git init
code .
```

</TimeStamp>

<TimeStamp start="0:18" end="0:27">

To initialize a new package.json run `yarn init -y`. Then, create an `index.html` by running `touch index.html`. 

</TimeStamp>

<TimeStamp start="0:29" end="0:49">

❓ **What is Make?:** Make is a tool which controls the generation of executables and other non-source files of a program from the program's source files. In other words Make knows how to build our program based on a series of commands. This way Netlify's servers know how to deploy our functions. 

</TimeStamp>

<TimeStamp start="0:52" end="1:04">

It's important that each command we put into this install command is started by a tab at the beginning of a line. ` echo "installed"`

</TimeStamp>

<TimeStamp start="1:15" end="1:41">

Create this repo on Github. Chris uses [the hub api](https://hub.github.com), which allows you to use github from the command line. You can also clone Chris's code - here is [the commit for this lesson](https://github.com/christopherbiscardi/egghead-opengraph-images/tree/473d3883fd525c6c5d6391a6e16f8356b8666a42). But you can also copy or fork the final code and modify it accordingly.

</TimeStamp>

<TimeStamp start="1:43" end="1:50">

Next, we need to deploy the site from [netlify](https://www.netlify.com/) and choose a new site from GitHub

</TimeStamp>

<TimeStamp start="2:06" end="2:24">

**NOTE: Later on in order to get this function working in Netlify you need [to change the Build image selection](https://docs.netlify.com/configure-builds/get-started/#build-image-selection) from "Ubuntu Xenial 16.04" which is the default to "Ubuntu Trusty 14.04".**

</TimeStamp>

<TimeStamp start="2:25" end="2:47">

The Makefile is visible at /Makefile. This isn't an issue, but if you wanted to change it you would just make a subdirectory and change the published directory.

</TimeStamp>

