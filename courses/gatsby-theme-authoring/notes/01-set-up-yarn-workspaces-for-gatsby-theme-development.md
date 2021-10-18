# Set up Yarn Workspaces for Gatsby Theme Development

**[📹 Video](https://egghead.io/lessons/gatsby-set-up-yarn-workspaces-for-gatsby-theme-development)**
## ⚡ Summary

In this lesson, we learn how to structure folders and configure Yarn workspaces to make the development of Gatsby themes easier.
## ⚡ Yarn Workspaces

In this first lesson, the instructor walks us through the setup of Yarn Workspaces for our project.
- More information and documentation on Yarn Workspaces can be found in the [resources](#resources) below.
- In short, Yarn workspaces allow us to setup our package architecture such that installing all of our packages requires only a *single pass* of **yarn install**

Before opening up the terminal, here's what each package.json file should look like:


### gatsby-theme-events/package.json
```javascript
{
  "name": "gatsby-theme-events",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "build": "gatsby build",
    "clean": "gatsby clean",
    "develop": "gatsby develop"
  }
}
```

### site/package.json
```javascript
{
  "private": true,
  "name": "site",
  "version": "1.0.0",
  "license": "MIT",
  "scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop",
    "clean": "gatsby clean"
  }
}
```

### package.json (main project folder)
```javascript
{
  "private": true,
  "workspaces": [
    "gatsby-theme-events",
    "site"
  ]
}
```

Next we'll create `gatsby-theme-events/index.js` and leave it empty except for a comment.

### gatsby-theme-events/index.js

```js
// this file is empty!
```

Now, in the terminal, we add **React, React-DOM, Gatsby,** and **our Gatsby Theme** to Site:
```
yarn workspace site add gatsby react react-dom gatsby-theme-events@*
```
- "The reason we use '@\*' is because we want the workspace to pick up an unpublished theme"
Your site/package.json should now include:
```javascript
"dependencies": {
  "gatsby": "^2.22.11",
  "gatsby-theme-events": "*",
  "react": "^16.13.1",
  "react-dom": "^16.13.1"
}
```

After running the following,
```
yarn workspaces info
```
We can see that the site uses the gatsby-theme-events from the workspace:
```javascript
"workspaceDependencies": [
  "gatsby-theme-events"
]
```
Now, to our gatsby-theme-events, we add React, React-DOM, and Gatsby firstly as a Peer Dependency
```bash
yarn workspace gatsby-theme-events add -P react react-dom gatsby
```
Then as a Dev Dependency
```bash
yarn workspace gatsby-theme-events add -D react react-dom gatsby
```
Now, gatsby-theme-events/package.json should include the following
```javascript
  "peerDependencies": {
    "gatsby": "^2.22.11",
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  },
  "devDependencies": {
    "gatsby": "^2.22.11",
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  }
```
An article outlining *the difference between Peer Dependencies and Dev Dependencies* can be found in the [resources](#resources) below.

Now, **to start up Gatsby in development mode for our site**, we run
```
yarn workspace site develop
```
and for our gatsby-theme-events
```
yarn workspace gatsby-theme-events develop
```
The console provides you with the localhost address for your project, which should give you a 404 page.


### Issues I Faced
My page appeared not with a 404, as it did with the instructor, but instead with an error. If this is the case, you may need to switch NODE_ENV from production to development.

In the terminal, for windows:
```
set NODE_ENV=development
```
Linux or other Unix based system:
```
export NODE_ENV=development
```
Note that this only changes NODE_ENV for the current terminal, and will be reset upon closing out of the terminal.

If there is a better solution to this problem, please contribute!

## Resources
- [Lesson 1 Code](https://github.com/ParkerGits/authoring-gatsby-themes/tree/01-gatsby-set-up-yarn-workspaces-for-gatsby-theme-development)
- [Yarn Workspaces, Why and How?](https://classic.yarnpkg.com/en/docs/workspaces/)
- [What are Yarn Workspaces? - Daniel Bischoff](https://www.danielbischoff.com/blog/2018-03-04--share-code-workspaces/)
- [What are Peer Dependencies?](https://flaviocopes.com/npm-peer-dependencies/)
- [npm docs: private](https://docs.npmjs.com/files/package.json#private)
- [npm docs: main](https://docs.npmjs.com/files/package.json#main)
