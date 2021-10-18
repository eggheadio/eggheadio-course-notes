# Use static generation for dynamic blog pages with Next.js

[Video Link](https://egghead.io/lessons/next-js-use-static-generation-for-dynamic-blog-pages-with-next-js?pl=build-a-blog-with-next-js-typescript-emotion-and-netlify-adcc)

- We're going to setup the content of our website to be statically generated at build time.
- First edit `posts/[title].tsx` to `posts/[id].tsx` because the dynamic part of the address will be the id of the blog post.
- In order to get the content at build time we are going to use a getStaticProps function that is similar to the one we have on `index.tsx`. So to begin with, copy and paste the function we made there to `[id].tsx`.
- We also want the `Post` type we created in `index.tsx` so let's export that and import it in our `[id].tsx` file.
- This is the current state of `[id.tsx]`:

```js
import { Article } from "@components/Article";
import { Post } from "../index";

export default function BlogPost() {
  return (
    <Article>
      <h1>Post title</h1>
      <p>Lorem ipsum</p>
    </Article>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};
```

- The problem is that right now we are getting all the blog posts, but we want to only get one. Luckily `getStaticProps` receives context as a prop, and if we destructure it we can get a `params` object.
- In order to get the type for this prop we will use `GetStaticPropsContext` from next.
- We're also going to adjust the API call so that we only get posts with a certain API
- And we're going to create an `emptyPost` which we're going to return if we don't find a post with a given `id` in `params`
- Then we're going to pass in the post as a destructured prop to our `BlogPost` element and replace the `h1` and `p` contents with `{post.title}` and `{post.body}` respectively
- We also need to give TypeScript the type of `post` and so we're going to add the type declaration `InferGetStaticPropsType<typeof getStaticProps>`
- At this stage of the lesson, this is the state of our code:

```js
import { Article } from "@components/Article";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Post } from "../index";

export default function BlogPost({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </Article>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;

  const emptyPost: Post = {
    title: "Post not found",
    body: "",
    id: 0,
    userId: 0,
  };

  if (!params?.id) {
    return {
      props: {
        post: emptyPost,
      },
    };
  }

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  const post: Post = await res.json();

  return {
    props: {
      post,
    },
  };
};
```

- If we save and attempt to visit a page at this point we'd get an error that says `getStaticPaths` is required. This is because Next.js needs to know what urls to generate content for. _After all it can't just generate content for every single possible url, that would result in an infinite loop ∞_
- If a page has dynamic routes then the `getStaticPaths` function is necessary to tell Next.js which urls to generate at build time
- `getStaticPaths` returns a `paths` variable with a list of paths (strings) for Next.js to generate content for. It also returns `fallback` which is a boolean that determins whether Next.js should generate a fallback page or just return a 404.

```js
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
```

- Now all of the pages defined by `getStaticPaths` will be generated at build time which helps ensure the best SEO and performance as possible.
