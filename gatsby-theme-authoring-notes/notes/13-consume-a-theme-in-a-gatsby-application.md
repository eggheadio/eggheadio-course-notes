# Consume a Theme in a Gatsby Application

**[📹 Video](https://egghead.io/lessons/gatsby-consume-a-theme-in-a-gatsby-application)**

## Summary

In this lesson we learn how to install our theme in a new project and add data to it.

## ⚡ Installing the theme in a new project
Open up your terminal, move into a new folder, and create a new directory called theme-test:
```bash
mkdir theme-test
```
Change directories to this new directory:
```bash
cd theme-test/
```
Set up the project:
```bash
yarn init -y
```
Now add your packages, including the theme you just made:
```bash
yarn add react react-dom gatsby @<npm_username>/<theme_name>
```
**Note:** If you didn't publish a theme, use @jlengstorf/gatsby-theme-events instead.
Open up your theme-test folder and make a gatsby-config.js.

Inside, create a module.exports, and add your theme in the plugins array:
### gatsby-config.js
```javascript
module.exports = {
  plugins: ["@jlengstorf/gatsby-theme-events"],
}
```

## ⚡ Installing the Gatsby CLI
Run the following in termianl:
```
yarn global add gatsby-cli
```
## ⚡ Run the site
To start the site, run the following in the terminal at the `/theme-test` directory:
```
gatsby develop
```
At localhost:8000, we can see our theme installed.

To add some data, create a `data/events.yml` in the root project folder.

In the `events.yml`:
### /data/events.yml
```
- name: Party
  location: My House
  start_date: 2019-06-26
  end_date: 2019-06-26
  url: https://jason.af/party
```
Back at localhost:8000 we can see our event displayed with just a few lines of code.
## Resources
- [Lesson 13 Code](https://github.com/ParkerGits/authoring-gatsby-themes/tree/13-consume-a-theme-in-a-gatsby-application)
- [Consume a theme in a Gatsby application](https://www.gatsbyjs.org/tutorial/building-a-theme/#consume-a-theme-in-a-gatsby-application)
