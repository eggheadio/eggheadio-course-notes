# Use Static Generation with getStaticProps in Next.js with TypeScript

[Video Link](https://egghead.io/lessons/next-js-use-static-generation-with-getstaticprops-in-next-js-with-typescript?pl=build-a-blog-with-next-js-typescript-emotion-and-netlify-adcc)

- Next.js has two forms of pre-rendering: 📜 [Static Generation and Server-side Rendering.](https://nextjs.org/docs/basic-features/data-fetching)
- Because the content on our blog is not likely to change often we're going to have the content of our site generate at build time, to do that we're going to use `getStaticProps`.
- `getStaticProps` is a function that a page, **and only a page** can run at build time in order to pre-render the page. The props that are returned from this function are going to be passed into the page component.
- For this example we're going to use [JSON Placeholder API](https://jsonplaceholder.typicode.com/posts) to get sample posts, but Next.js supports a variety of ways to get static content.
- Here's our sample code that fetches posts (❗️Note that this goes in the `index.tsx` file):

```js
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

- 🧩 To define a type in typescript use the following syntax:

```js
type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
};
```

- When we try to pass these props in to our Posts function Typescript will throw an error, since it doesn't know what the type is of the static props. Next.js provides an `InferGetStaticPropsType` that helps Typescript infer the tyep of the static props.
- Once we add a couple more styled components we can list out all of our blog posts, my additional code looked like this:

```js
const List = styled.ul`
  list-style: square;
`;

const ListItem = styled.li`
  padding: 10px;
  text-transform: capitalize;
  margin: 40px 0;
  cursor: pointer;
  color: #252525;
  &:hover {
    background: #f0f0f0;
  }
`;

const PostTitle = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const title: string = "My Awesome Blog!";

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(posts);
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <BlogTitle>{title}</BlogTitle>
        <List>
          {posts.map((post) => (
            <ListItem key={post.id}>
              <PostTitle>{post.title}</PostTitle>
            </ListItem>
          ))}
        </List>
      </Main>
    </Container>
  );
}
```
