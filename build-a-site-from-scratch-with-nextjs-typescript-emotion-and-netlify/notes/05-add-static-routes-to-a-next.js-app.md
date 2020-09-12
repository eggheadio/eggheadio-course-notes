# Add static routes to a Next.js app

[Video Link](https://egghead.io/lessons/egghead-add-static-routes-to-a-next-js-app?pl=build-a-blog-with-next-js-typescript-emotion-and-netlify-adcc)

-   Next.js allows us to create multiple pages in the pages directory, and each page is associated with a route based on its filename.
-   So if we create a file `pages/about.tsx` and export a component then we will have a page at <http://localhost:3000/about>

```js
export default function About() {

    return(
        <Article>
            <h1>About this blog</h1>
            <main>
                <p>This is the best blog ever</p>
            </main>
        </Article>
    );
}
```
- The Article component (`components/Article.tsx`):
```js
import styled from "@emotion/styled";

export const Article = styled.article`
    margin: 0 auto;
    max-width:500px;
`
```
-   The url will be the same as the filename. If the file is nested inside of a directory under pages, then the route will be nested in the same way.
-   These are just React components so you can import other comoponents and use them when creating pages.
-   These pages are generated in advance by Next.js by default
-   📜 [Next.js Docs on Routing](https://nextjs.org/docs/routing/introduction)
