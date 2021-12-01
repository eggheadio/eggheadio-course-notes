# 10 - Generate an Nx Library to Implement our Markdown Rendering for our Next.js App

[Video Link]()

<TimeStamp start="2:00" end="2:04">

Open the Nx console to generate a new library. We select the third option, "@nrwl/workspace - library" 

</TimeStamp>


<TimeStamp start="3:05" end="3:12">

1. Parse the content of our markdown and separate it into a frontmatter and content 
2. Convert markdown content => HTML

</TimeStamp>


<TimeStamp start="5:05" end="5:10">

```jsx
const articleMarkdownContent = getParsedFileContentBySlug(params.slug, POSTS_PATH);
```

</TimeStamp>

<TimeStamp start="5:25" end="5:30">

```jsx
const renderHTML = renderMarkdown(articleMarkdownContent)
```

</TimeStamp>