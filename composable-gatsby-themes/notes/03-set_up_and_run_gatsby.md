# 03. Setup and Run a Gatsby Site

[Code Link](https://github.com/christopherbiscardi/advanced-gatsby-themes-workshop-code/tree/master)

[Video Link](<[00:00](https://egghead.io/lessons/gatsby-setup-and-run-a-gatsby-site#t=0)>)

## Summary

Our starting point is a fully functioning Gatsby site that we'll break down into themes.

## Notes

[00:00](https://egghead.io/lessons/gatsby-setup-and-run-a-gatsby-site#t=0) **The advanced Gatsby themes workshop code for this course is setup into a set of branches.**
First, clone the repo and `cd` into it.

```bash
git clone https://github.com/ChristopherBiscardi/advanced-gatsby-themes-workshop-code.git
cd advanced-gatsby-themes-workshop-code
ls
```

[00:17](https://egghead.io/lessons/gatsby-setup-and-run-a-gatsby-site#t=17) We are going to set up [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/).

NPM doesnt have an equivalent to yarn workspaces.

`yarn` to install.

[00:33](https://egghead.io/lessons/gatsby-setup-and-run-a-gatsby-site#t=33) We have a couple commands we can run for this project.

```js
// package.json
{
"develop": "gatsby develop",
"build": "gatsby build",
"clean": "gatsby clean"
}
```

We can use `yarn develop` to start our project.

[00:48](https://egghead.io/lessons/gatsby-setup-and-run-a-gatsby-site#t=48) There will be a number of errors when we build the project.

[01:05](https://egghead.io/lessons/gatsby-setup-and-run-a-gatsby-site#t=65) We need to update the name of our shopify `shopName` to the one that we chose.

**before**

```js
// gatsby-config.js
resolve: "gatsby-source-shopify",
options: {
// ...
// ...
// ...
shopName: "corgico-dev",
}
```

**after**

```js
// gatsby-config.js
resolve: "gatsby-source-shopify",
options: {
// ...
// ...
// ...
shopName: "your-shop-name",
}
```

[01:19](https://egghead.io/lessons/gatsby-setup-and-run-a-gatsby-site#t=79) Then change the `gatsby-source-wordpress` url:

**before**

```js
resolve: "gatsby-source-wordpress",
options: {
baseUrl: "advancedgatsbythemescourse.wordpress.com",
protocol: 'https:,
hostingWPCOM: true,
...
}
```

**after**

```js
resolve: "gatsby-source-wordpress",
options: {
baseUrl: "your-url",
protocol: 'https:,
hostingWPCOM: true,
...
}
```

[01:34](https://egghead.io/lessons/gatsby-setup-and-run-a-gatsby-site#t=94) Now we have to create an `.env.development` file. We can use this file to set the environment variables our app needs to run (remember that the `SHOPIFY_ACCESS_TOKEN` is the store front api token and not the admin api token).

```js
WORDPRESS_CLIENT_SECRET={your-client-secret}
WORDPRESS_CLIENT_ID={your-client-id}
WORDPRESS_EMAIL={your-wordpress-email}
WORDPRESS_PASSWORD={your-wordpress-password}
SHOPIFY_ACCESS_TOKEN={your-shopify-access-token}
GATSBY_SHOPIFY_ACCESS_TOKEN={your-gatsby-shopify-access-token}
```
