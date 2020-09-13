# Use Head tag in Next.js to add metatags to a site

[Video Link](https://egghead.io/lessons/next-js-use-head-tag-in-next-js-to-add-metatags-to-a-site?pl=build-a-blog-with-next-js-typescript-emotion-and-netlify-adcc)

-   Next.js has a `Head` tag where we can add metatags such as `title` or `og:title` to our site.
-   To use `Head` just `import Head from "next/head"`
-   Add the `Head` component to your `BlogPost` component and then add a `<title>` tag with the `post.title` and a `<meta property="og:title" content={post.title}/>`
-   You can put any meta tags you want into here. 📜 [Open Graph protocol Docs](https://ogp.me) 💡Why don't you try adding the image you added as an "og:image"

