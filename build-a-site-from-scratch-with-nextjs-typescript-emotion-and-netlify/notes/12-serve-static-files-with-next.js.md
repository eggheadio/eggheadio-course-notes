# Serve static files with Next.js

[Video Link](https://egghead.io/lessons/next-js-serve-static-files-with-next-js?pl=build-a-blog-with-next-js-typescript-emotion-and-netlify-adcc)

-   Next.js can serve static files in the `public` directory. Anything file in that directory will be served on the `/` of our website.
-   We're going to create a `BlogpostImage` styled component so we can display an image at the top of each blogpost

```js
export const BlogpostImage = styled.img`
    width: 100%;
    height; auto;
    margin: 20px 0;
`;
```

-   Add an image to the public directory of your project and add a `BlogpostImage` with a src that points to that file. [Unsplash](https://unsplash.com) is a great place to get a photo if you want a cool one.
-   You can also serve html files this way.

