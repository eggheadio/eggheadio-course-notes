# 04. Convert Gatsby Site to Yarn Workspace Project

[Code Link](https://github.com/christopherbiscardi/advanced-gatsby-themes-workshop-code/tree/01-yarn-workspaces)

[Video Link](https://egghead.io/lessons/gatsby-convert-gatsby-site-to-yarn-workspace-project#t=0)

## Summary

Since we'll be building a number of themes we'll also take advantage of Yarn Workspaces to coordinate linking all of those packages where they need to go. This is especially useful if you plan on building a suite of themes.

## Notes

[00:00](https://egghead.io/lessons/gatsby-convert-gatsby-site-to-yarn-workspace-project#t=0) To facilitate building themes, especially multiple themes that interact with each other, we're going to convert our project from it's typical Gatsby site, through [Yarn workspaces]([Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)) project.

````bash
mkdir www
mv * www/'
```

[00:21](https://egghead.io/lessons/gatsby-convert-gatsby-site-to-yarn-workspace-project#t=21) Remove the yarn.lock in the www folder, as well be using one of the root of our project.

`rm www/yarn.lock`

[00:42](https://egghead.io/lessons/gatsby-convert-gatsby-site-to-yarn-workspace-project#t=42) We can also take the README.md and put it the root of our project, but it doesn\'t matter a whole lot.

`mv www/README.md .`

[01:01](https://egghead.io/lessons/gatsby-convert-gatsby-site-to-yarn-workspace-project#t=61) `ls .` and then hit tab, we can see that the .env.development file is still in the root.

`mv .env.development www/`

[01:21](https://egghead.io/lessons/gatsby-convert-gatsby-site-to-yarn-workspace-project#t=81) We\'ll also initialize a new package.json in the root of our project with `yarn init -y`. This is the file that the workspace will use to keep track of our local projects.

Make sure to have `"pivate": true` set so you don\'t accidentally publish your project.

[01:33](https://egghead.io/lessons/gatsby-convert-gatsby-site-to-yarn-workspace-project#t=93) Add these fields to your root package json file:

_before_

```js
// www/package.json
 {
"name": "advanced-gatsby-themes-workshop-code",
"version": "1.0.0",
"main": "index.js",
"repository": "git@github.com:ChristopherBiscardi/advanced-gatsby-themes-workshop-code.git",
"author": "ChristopherBiscardi <chris@christopherbiscardi.com>",
"license": "MIT",
"private": true,
}
```

_after_

```js
// www/package.json
{
...
"private": true,
"workspaces": [
"package/*",
"www"
]
}
```

Any package inside of `package/` is a valid workspace.

[01:50](https://egghead.io/lessons/gatsby-convert-gatsby-site-to-yarn-workspace-project#t=110) We also want to go into `www/package.json` and change the name to `www` so that it is easier to run commands later on.

Run `yarn` in the root of the project to see if things are set up correctly.

[02:12](https://egghead.io/lessons/gatsby-convert-gatsby-site-to-yarn-workspace-project#t=132) run `yarn workspace www develop` to run our gatsby blog.

[03:01](https://egghead.io/lessons/gatsby-convert-gatsby-site-to-yarn-workspace-project#t=181) The last thing we do in this lesson is make the packages directory with `mkdir packages`.

### Notes from the comments:

if you don\'t want to switch to yarn to just get workspaces, consider using [lerna](https://github.com/lerna/lerna/) instead.

It does everything Yarn offers with additional features, eg: managing workspace versions, running commands within each workspace, and publishing workspaces.
````
