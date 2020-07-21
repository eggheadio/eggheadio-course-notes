# 05. Overview of Gatsby Site Example Project

[Code Link](https://github.com/christopherbiscardi/advanced-gatsby-themes-workshop-code/tree/master)

[Video Link](https://egghead.io/lessons/gatsby-overview-of-gatsby-site-example-project)

## Summary

We cover all of the functionality in the example project, such as sourcing content from WordPress, Shopify, and local MDX files.

## Notes

[0:00](https://egghead.io/lessons/gatsby-overview-of-gatsby-site-example-project) Chris goes over all the different parts of the application we are building:

- Home Page
- Pricing Page
- Company page
- Blog (sourced from wordpress)
- Dev Blog (sourced from mdx)
- The SWAG store (sourced from shopify)

An authenticated [reach router](https://reach.tech/router) app.

[0:41](https://egghead.io/lessons/gatsby-overview-of-gatsby-site-example-project#t=41) If you look at `www/gatsby-browser.js` and `www/gatsby-ssr.js` contain a `wrap-root-element`. This component imports our `ThemeProvider` from [theme-ui](https://theme-ui.com/) and wraps our app with that component.

This wrap root element also sets some global styles as well as [passes some MDX components down to mdx](https://theme-ui.com/mdx-components).

[0:56](https://egghead.io/lessons/gatsby-overview-of-gatsby-site-example-project#t=56) `www/gatsby-node.js` is where all of our pages are created. We can inspect that file and see that we are getting our dev blog posts from mdx and our marketing posts from word press.

[1:52](https://egghead.io/lessons/gatsby-overview-of-gatsby-site-example-project#t=112) The marketing and dev Gatsby templates to render the posts are two separate files right now but we will combine them later in the course.

[2:13](https://egghead.io/lessons/gatsby-overview-of-gatsby-site-example-project#t=133) `www/src/pages/app.js` contains our reach router app. We would put any of our authenticated content here.
