# 12 - Render Markdown with next-mdx-remote in our Next.js Page Component

[Video Link]()

<TimeStamp start="0:19" end="0:22">

`yarn add next-mdx-remote --save-dev`

</TimeStamp>


<TimeStamp start="0:57" end="1:00">

```jsx 
export function renderMarkdown(markdownContent: string) {
    return serialize(markdownContent || '');
}
```

</TimeStamp>