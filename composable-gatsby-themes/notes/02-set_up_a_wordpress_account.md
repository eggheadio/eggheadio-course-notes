# 02. Set up a WordPress Account

[Video Link](https://egghead.io/lessons/gatsby-set-up-a-wordpress-account#t=00)

## Summary

Set up the wordpress.com account needed for the course.

## Notes

[0:00](https://egghead.io/lessons/gatsby-set-up-a-wordpress-account#t=00) [Go to WordPress.com](https://wordpress.com/start/user?ref=logged-out-homepage-lp), sign up and **choose a Blog**, choose the topic of Blogging, and Chris calls his blog Corgi Co Blog.

[00:44](https://egghead.io/lessons/gatsby-set-up-a-wordpress-account#t=44) **Now our site has been created. We'll skip updating the home page, skip the tagline, and confirm our email address.**

[1:13](https://egghead.io/lessons/gatsby-set-up-a-wordpress-account#t=73) [gatsby-source-wordpress](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/).

There's an option for hosting wpcom app

```js
// https://www.gatsbyjs.org/packages/gatsby-source-wordpress/
auth: {
wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET
wpcom_app_clientId: "54793",
wpcom_user: "gatsbyjswpexample@gmail.com",
wpcom_pass: process.env.WORDPRESS_PASSWORD,
}
```

To do this, **we have to create an app at **[developer.WordPress.com/apps](https://developer.wordpress.com/apps).

[1:35](https://egghead.io/lessons/gatsby-set-up-a-wordpress-account#t=95) Click on Create a new application. Give your application a name with the Description of something. The website URL doesn't matter. I'm going to use my personal site. **Note that all of the fields are required even if we're not going to use them**. You will have to specify a valid redirect URL in the form of HTTPS and a valid JavaScript origin.

[2:02](https://egghead.io/lessons/gatsby-set-up-a-wordpress-account#t=122) Note that **we'll need the WORDPRESS_CLIENT_SECRET and the clientId**.
