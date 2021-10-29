# 14 - Use React Components for Native HTML Tags with MDX and Next.js

[Video Link]()

<TimeStamp start="1:00" end="1:03">

Create a new component called `custom-link`

</TimeStamp>


<TimeStamp start="1:37" end="1:40">

In our `index.ts` you need to add `export * from './lib/custom-link/custom-link';`

</TimeStamp>

<TimeStamp start="1:57" end="1:59">

```jsx
const mdxElements = {
    Youtube, 
    a: CustomLink,
};
```

</TimeStamp>

