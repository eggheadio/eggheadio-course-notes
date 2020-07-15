# Create Data Driven Pages in Gatsby with GraphQL and createPages

**[📹 Video](https://egghead.io/lessons/gatsby-create-data-driven-pages-in-gatsby-with-graphql-and-createpages)**

## Summary

In this lesson we learn how to use the createPages API hook.

## ⚡ Creating our first page
In this lesson we learn how to use the createPages API hook.

To begin our final step in gatsby-node.js, we set up the call to create the root page:

### gatsby-theme-events/gatsby-node.js
```javascript
exports.createPages = async ({ actions, graphql, reporter }) => {
  const basePath = '/';
  actions.createPage({
    path: basePath,
    component: require.resolve('.src/templates/events.js')
  });
```
The basePath defaults to the root path, and the createPage method creates a page at the basePath.

## ⚡ Querying the events
Next, we'll set it up so we can query for events.

The following will allow us to **retrieve all events, sorted by start date, in ascending order,** and will **allow us to handle the error in case the GraphQL query failed.**
```js
exports.createPages = ({ actions, graphql, reporter }) => {
  ...

  const result = await graphql(`
    query {
      allEvent(sort: { fields: startDate, order: ASC }) {
        nodes {
          id
          slug
        }
      }
    }
  `)
}
```
## ⚡ Creating individual event pages
Next, we'll create a page for each event by grabbing the event nodes queried from GraphQL, looping through the events, and using createPage.
```javascript
  const events = result.data.allEvent.nodes;

  events.forEach(event => {
    const slug = event.slug;

    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/event.js'),
      context: {
        eventID: event.id
      }
    });
  });
}
```
## ⚡ Creating the components
Now, we need to actually create the event.js and events.js components.

First, create src/templates/events.js within gatsby-theme-events.

### events.js
```javascript
import React from 'react';

const EventsTemplate = () => <p>TODO build the events page</p>;

export default EventsTemplate;
```
Then, create an event.js within src/templates, and within that:
### event.js
```javascript
import React from 'react';

const EventTemplate = () => <p>TODO build the events page</p>;

export default EventTemplate;
```
## ⚡ Testing it all out
We can now run Gatsby in development mode:
```bash
yarn workspace gatsby-theme-events develop
```
And navigate to localhost:8000 to see our events page.

![Localhost events page](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1593019627/transcript-images/05-create-data-driven-pages-in-gatsby-with-graph-ql-and-create-pages.png)

If we trigger the 404 page, we'll see that our event pages have also been created! 🎉

![Localhost events page](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1593019628/transcript-images/05-create-data-driven-pages-in-gatsby-with-graph-ql-and-create-pages-individual-pages.png)

## Resources
- [Lesson 5 Code](https://github.com/ParkerGits/authoring-gatsby-themes/tree/05-gatsby-create-data-driven-pages-in-gatsby-with-graphql-and-createpages)
- [Create data-driven pages using GraphQL and createPages](https://www.gatsbyjs.org/tutorial/building-a-theme/#create-data-driven-pages-using-graphql-and-createpages)
- [createPages API](https://www.gatsbyjs.org/docs/node-apis/#createPages)
