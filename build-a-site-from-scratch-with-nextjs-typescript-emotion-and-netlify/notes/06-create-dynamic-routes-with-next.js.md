# Create dynamic routes with next.js

[Video Link](https://egghead.io/lessons/next-js-create-dynamic-routes-with-next-js?pl=build-a-blog-with-next-js-typescript-emotion-and-netlify-adcc)

-   Next.js supports dynamic pages using `[]` in the filename to define the dynamic part of the route
-   Create a folder called posts, and within it create a file called `posts/[title].tsx`

```js
import { Article } from "../../components/Article"

export default function Post() {
    return (
        <Article>
            <h1>Post title</h1>
            <p>Lorem ipsum</p>
        </Article>
    )
}
```

-   This creates a function Post that renders an article component at any url we provide under the posts directory.
-   To render dynamic content from the route we need to use `useRouter` and assign it to a variable

```js
import { useRouter } from "next/router";
```

-   To use the data from the router, assign it to a variable then log out the `query` component to see what's contained inside of it:

```js
const router = useRouter()
console.log(router.query)
```

-   In the conosle we'll see that there is a title variable, we can assign that to a variable and render it to the page:

```js
const {title} = router.query
...
<h1>Post Title: {title}</h1>
```

-   Note that url parameters are also passed to the router and are available in the query object.
