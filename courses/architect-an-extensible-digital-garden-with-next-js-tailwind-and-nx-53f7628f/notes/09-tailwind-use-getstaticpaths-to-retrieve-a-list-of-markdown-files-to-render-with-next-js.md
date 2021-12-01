# 9 - Use getStaticPaths to Retrieve a List of Markdown Files to Render With Next.js 

[Video Link]()

<TimeStamp start="0:10" end="0:15">

We create a new folder called `_articles` and under that directory we create a new file called `dynamic-routing.md`

</TimeStamp>


<TimeStamp start="1:27" end="1:37">

```jsx 
const POSTS_PATH = join(process.cwd(), '_articles')
``` 

</TimeStamp>


<TimeStamp start="2:05" end="2:10">

```jsx
const paths = readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug }}));
```

</TimeStamp>








