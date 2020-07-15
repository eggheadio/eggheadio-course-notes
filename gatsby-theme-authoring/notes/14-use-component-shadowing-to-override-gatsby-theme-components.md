# Use Component Shadowing to Override Gatsby Theme Components

**[📹 Video](https://egghead.io/lessons/gatsby-use-component-shadowing-to-override-gatsby-theme-components)**

## Summary

In this lesson we learn how to modify theme styles.

## ⚡ Component Shadowing
We return once more to component shadowing to modify components.

This time, we plan to **change theme colors in our theme-test project**.

## ⚡ Issues I Faced
Following the lesson, I ran into issues importing the theme. **These issues were fixed after following the written lesson found in the [resources](#resources) below.** The following notes pertain to the written lesson, and employ lodash.merge

## ⚡ Back to the Blue Banner
In the root folder of theme-test, add src/gatsby-plugin-theme-ui/index.js

Inside `index.js`:
```javascript
import merge from "lodash.merge"
import { theme } from "@jlengstorf/gatsby-theme-events"
export default merge({}, theme, {
 colors: {
   primary: "blue",
 },
})
```
Above, we import from lodash.merge. We will need to install this now:
```bash
yarn add lodash.merge
```
Restarting the dev server with
```bash
gatsby develop
```
Allows us to see a page with a blue header instead of a purple one.
- *"The new object exported from index.js uses `lodash.merge` to deeply merge the base UI theme with the theme overrides of your choice. In this case, changing the primary color to blue."*

## ⚡ Overriding components
Now, to get back on track with the video again, we will first create a folder with the same title as your theme inside src
- **With a namespaced theme, this will be two directories deep."**

For this example, we will create @jlengstorf/gatsby-theme-events
- "Anything inside `theme-test/src/@jlengstorf/gatsby-theme-events` will “shadow” the components in @jlengstorf/gatsby-theme-events.

We now create a new file to override the layout component: `theme-test/src/@jlengstorf/gatsby-theme-events/components/layout.js`

In `layout.js`, we add the following. I've provided what is added in both the video and in the Gatsby docs found in [resources](#resouces), as both options worked for me:

### src/<npm_username>/<theme_name>/components/layout.js
(following the video):
```javascript
import React from 'react';

export default ({ children }) => <>
{children}
<p>Added via component shadowing</p>
</>;
```
(following the Gatsby docs):
```javascript
import React from "react"

export default function Layout({ children }) {
  return <>{children}</>
}
```

Restarting the dev server:
```bash
gatsby develop
```
Allows us to see the effect of our component shadowing.
## Resources
- [Lesson 14 Code](https://github.com/ParkerGits/authoring-gatsby-themes/tree/14-use-component-shadowing-to-override-gatsby-theme-components)
- [Gatsby - Use component shadowing to override theme components](https://www.gatsbyjs.org/tutorial/building-a-theme/#use-component-shadowing-to-override-theme-components)
- [Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
