# 4 - Understanding Next.js getStaticPaths   

[Video Link]()

<TimeStamp start="0:15" end="0:20">

Documentation for [`getStaticPaths`](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation). We use `getStaticPaths` for dynamic routes.

</TimeStamp>

<TimeStamp start="0:29" end="0:38">

For example, this is how our article structure should look like: 

```jsx
juri.dev/articles/[slug]
```
[slug] will be replace for the actual route of each article. 

</TimeStamp>

<TimeStamp start="2:40" end="2:43">

`yarn nx g @nrwl/next:page --name="[slug]" --style=none --directory=articles`

</TimeStamp>

<TimeStamp start="3:33" end="3:40">

Our [slug].tsx file should look like this:

```jsx 
export interface ArticleProps {}

export function Article(props: ArticleProps) {
    return (
        <div>
            <h1>Welcome to Slug!</h1>                   
        </div>
    )
}

export default Article;
```

</TimeStamp>

<TimeStamp start="3:51" end="4:00">

```jsx 
export const getStaticPaths: GetStartedPaths<ArticleProps> = async () => {
    return {
        paths: [
            {
                params: {
                    slug: 'page1'
                }

            },
            {
                params: {
                    slug: 'page2'
                }

            }
        ],
        fallback: false,
    };
};
```

</TimeStamp>

<TimeStamp start="5:30" end="5:40">

```jsx
export const getStaticProps: GetStaticProps<ArticleProps> = async ({
    params, 
}: {
    params: ArticleProps;
}) => {
    return {
        props: {
            slug: params.slug,
        }
    }
}
```

</TimeStamp>

