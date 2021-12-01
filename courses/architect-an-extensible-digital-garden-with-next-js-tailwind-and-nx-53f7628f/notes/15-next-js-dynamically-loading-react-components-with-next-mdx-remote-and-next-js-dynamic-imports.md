# 15 - Dynamically Loading React Components with next-mdx-remote and Next.js Dynamic imports

[Video Link]()

<TimeStamp start="0:30" end="0:33">

`import dynamic from 'next/dynamic'`

</TimeStamp>


<TimeStamp start="0:42" end="0:46">

```jsx
const mdxElements = {
    Youtube: dynamic(async () => {
        const components = await import('@juridev/shared/mdx-elements');
        return components.Youtube;
    }),
}
```

</TimeStamp>