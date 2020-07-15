# Publish a Gatsby Theme to npm

**[📹 Video](https://egghead.io/lessons/gatsby-publish-a-gatsby-theme-to-npm)**

## Summary

In this lesson we'll learn how to *make your Gatsby theme available for use by anyone in the community*.

## ⚡ Publishing our Theme

We first need to **update our package.json** before publishing our theme to npm.

## ⚡ Namespacing

In gatsby-theme-events/package.json, we want to *namespace our theme* in order to keep track of who published the theme and to avoid naming collisions:
### gatsby-theme-events/package.json
```javascript
{
  "name": "@yournpmusername/gatsby-theme-events",
  "version": "1.0.0",
  // ...
}
```
## ⚡ Logging into npm
We need to now *make sure we're logged in to npm*.

In the terminal:
```bash
npm whoami
```
If you haven't already authorized your user for your machine, it will ask you to run
```bash
npm adduser
```
The terminal will now prompt you for a username, password, and email.

**For the sake of following along with the lesson, the namespace in your package.json will need to be your own.**

## ⚡ Publishing the theme
Change directories into the gatsby-theme-events directory:
```
cd gatsby-theme-events/
```
and publish:
```
npm publish --access public
```

Now it’s published! After publishing, you’ll be able to find your theme on npm at npmjs.com/{yourpackagename}
## Resources
- [Lesson 12 Code](https://github.com/ParkerGits/authoring-gatsby-themes/tree/12-publish-a-gatsby-theme-to-npm)
- [Gatsby - Publish a theme to npm](https://www.gatsbyjs.org/tutorial/building-a-theme/#publish-a-theme-to-npm)
- [npm: Contributing packages to the registry](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [npm publish (cli command)](https://docs.npmjs.com/cli/publish)
