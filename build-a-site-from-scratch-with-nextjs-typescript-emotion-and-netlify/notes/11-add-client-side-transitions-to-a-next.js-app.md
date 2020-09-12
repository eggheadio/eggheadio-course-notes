# Add client-side transitions to a Next.js app

[Video Link](https://egghead.io/lessons/egghead-add-client-side-transitions-to-a-next-js-app?pl=build-a-blog-with-next-js-typescript-emotion-and-netlify-adcc)

-   In order to link from one page to another in our Next.js site we're going to import the `Link` component from `next/link`
-   📜 [Next.js Documentation for Link](https://nextjs.org/docs/api-reference/next/link)
-   For static pages we just provide the Link component with a `href` property linking to the page
-   For dynamic pages we must set the `href` property to our dynamic page (in our case `posts/[id]`) and also set the `as` property as it will be shown in the browser: ``as={`posts/${posts.id}`}``
