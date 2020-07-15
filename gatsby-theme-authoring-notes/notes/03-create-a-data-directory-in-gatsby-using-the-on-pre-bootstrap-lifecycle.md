# Create a Data Directory in Gatsby using the onPreBootstrap lifecycle

**[📹 Video](https://egghead.io/lessons/gatsby-create-a-data-directory-in-gatsby-using-the-onprebootstrap-lifecycle)**

## Summary

In this lesson we learn how to make sure the data directory exists so gatsby-source-filesystem doesn't throw an error.

## gatsby-node.js
Within the gatsby-theme-events folder, create a file named gatsby-node.js

In our gatsby-node.js, we need to
1. Make sure the data directory exists

We need to do this so `gatsby-source-filesystem` doesn't throw an error.


2. Define the event type

If we don't have any events defined, we should get back an empty array, not an error.

3. Define resolvers for any custom fields (slug)

We are going to have a custom `slug` field. We want to be able to query this along with all of the other event data.

4. Query for events and create pages

## ⚡ Making sure the data directory exists
**gatsby-source-filesystem will throw an error** if you fire up your theme and the “data” directory doesn’t exist. To guard against this, you’ll use the onPreBootstrap API hook to check if the data directory exists, and, if not, create it:


### gatsby-theme-events/gatsby-node.js
```javascript
const fs = require('fs');

exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = 'data';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};
```
With this code, **if the data directory doesn't exist, it will create it.** Now we have ensured that the data directory exists.


## Resources
- [Lesson 3 Code](https://github.com/ParkerGits/authoring-gatsby-themes/tree/03-gatsby-create-a-data-directory-in-gatsby-using-the-onprebootstrap-lifecycle)
- [Gatsby - Create a data directory using the onPreBootstrap lifecycle](https://www.gatsbyjs.org/tutorial/building-a-theme/#create-a-data-directory-using-the-onprebootstrap-lifecycle)
- [The gatsby-node.js API file](https://www.gatsbyjs.org/docs/api-files-gatsby-node/)
- [Gatsby theme conventions](https://www.gatsbyjs.org/docs/themes/conventions/)
- [Node file system module](https://nodejs.org/api/fs.html)
