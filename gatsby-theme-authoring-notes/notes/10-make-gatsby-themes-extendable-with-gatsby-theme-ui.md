# Make Gatsby Themes extendable with gatsby-theme-ui

**[📹 Video](https://egghead.io/lessons/gatsby-make-gatsby-themes-extendable-with-gatsby-theme-ui)**

## Summary

In this lesson we learn how to create a theme.js file and allow people using your theme to apply their own design by defining design tokens with theme-ui.

## ⚡ Installing `gatsby-theme-ui`
We can make our Gatsby theme styles "extendable" using the **gatsby-plugin-theme-ui** package.
- How is it extendable? gatsby-plugin-theme-ui takes a *global theme context object* and makes it *available to all themes that use gatsby-plugin-theme-ui*.

Install the package via terminal:
```
yarn workspace gatsby-theme-events add gatsby-plugin-theme-ui theme-ui @emotion/core @emotion/styled @mdx-js/react
```
## ⚡ Adding `gatsby-theme-ui` to our project
Now that the package is installed, we add the gatsby-plugin-theme-ui plugin to gatsby-theme-events/gatsby-config.js:
### gatsby-theme-events/src/theme.js
```javascript
module.exports = ({ contentPath = "data", basePath = "/" }) => ({
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      // ...
```

To use this plugin, we create a theme.js file within gatsby-theme-events/src.

*gatsby-plugin-theme-ui uses Theme UI, which is part of a System UI network of tools*
- In other words, gatsby-plugin-theme-ui will give us an object that follows the System UI theme specification.

Within theme.js:
### gatsby-theme-events/src/theme.js
```javascript
export const theme = {

}
```
We will first define a space array, which will *contain data associated with styling widths such as margin, padding, etc.* These values are set in pixels.
```javascript
export const theme = {
  space: [0, 4, 8, 16, 32],
}
```
Next, we set the *fonts and font-sizes*:
```javascript
export const theme = {
  space: [0, 4, 8, 16, 32],
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
}
```
For *line heights*, 1.45 is good for legibility in our body text, and heading text with larger fonts will have smaller line heights.
```javascript
export const theme = {
  // ...
  lineHeights: {
    body: 1.45,
    heading: 1.1,
  },
}
```
Now we *set up colors*, with an array of shades of gray, a background color of white, and a primary color of "rebecca purple"
```javascript
export const theme = {
  // ...
  colors: {
    gray: ["#efefef", "#ddd", "#333", "#111"],
    background: "#fff",
    primary: "rebeccapurple",
  },
}
```
Now we *define sizes of containers and documents*. For more information regarding Viewport concepts, check out the [resources](#resources):
```javascript
export const theme = {
  // ...
  sizes: {
    default: "90vw",
    max: "540px",
  },
}
```
We can finally start *setting some styles*. Theme UI provides some ** special components**.

**DEPRECATION WARNING: The components Header, Main, and Layout are now deprecated as of version 0.3.** In order to continue with the lesson, we will use the theme.js from the Gatsby docs found in [resources](#resources).

To our theme, we define heading and container styles, like so:
```javascript
export const theme = {
  // ...
  text: {
    heading: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: "0 auto",
      maxWidth: "max",
      padding: 3,
      width: "default",
      a: {
        color: "inherit",
      },
    },
  },
  layout: {
    container: {
      margin: "0 auto",
      maxWidth: "max",
      width: "default",
      padding: 3,
      color: "gray.2",
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "body",
    },
  },
}
```
Finally, we can *design basic HTML markup*:
```javascript
export const theme = {
  // ...
  styles: {
    // ...
    h1: {
      color: 'gray.3',
      fontSize: 5,
      fontWeight: 'bold',
      lineHeight: 'heading',
      margin: '1rem 0 0'
    },
    ul: {
      borderTop: '1px solid',
      borderColor: 'gray.0',
      listStyle: 'none',
      padding: 0
    },
    li: {
      borderBottom: '1px solid',
      borderColor: 'gray.1',
      padding: 2,
      '&:focus-within, &:hover': {
        backgroundColor: 'gray.0'
      }
    }    
  }
};
```
## ⚡ Important!
For me, this important piece of information is cut off in the video:
At the bottom of your theme.js, remember to export the theme!:
```javascript
export const theme = {
  // ...
};
export default theme;
```

All in all, your `theme.js` should look like the following:
```js
export const theme = {
  space: [0, 4, 8, 16, 32],
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    body: 1.45,
    heading: 1.1,
  },
  colors: {
    gray: ["#efefef", "#ddd", "#333", "#111"],
    background: "#fff",
    primary: "rebeccapurple",
  },
  sizes: {
    default: "90vw",
    max: "540px",
  },
  text: {
    heading: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: "0 auto",
      maxWidth: "max",
      padding: 3,
      width: "default",
      a: {
        color: "inherit",
      },
    },
  },
  layout: {
    container: {
      margin: "0 auto",
      maxWidth: "max",
      width: "default",
      padding: 3,
      color: "gray.2",
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "body",
    },
  },
  styles: {
    h1: {
      color: "gray.3",
      fontSize: 5,
      fontWeight: "bold",
      lineHeight: "heading",
      margin: "1rem 0 0",
    },
    ul: {
      borderTop: "1px solid",
      borderColor: "gray.0",
      listStyle: "none",
      padding: 0,
    },
    li: {
      borderBottom: "1px solid",
      borderColor: "gray.1",
      padding: 2,
      "&:focus-within,&:hover": {
        backgroundColor: "gray.0",
      },
    },
  },
}

export default theme
```

## Resources
- [Lesson 10 Code](https://github.com/ParkerGits/authoring-gatsby-themes/tree/10-make-gatsby-themes-extendable-with-gatsby-theme-ui)
- [Viewport concepts](https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts)
- [Gatsby - Make themes extendable with gatsby-plugin-theme-ui](https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts)
- [Gatsby - Theme UI](https://www.gatsbyjs.org/docs/theme-ui/)  
