# 11 - Parse a Markdown Document With gray-matter

[Video Link]()

<TimeStamp start="0:19" end="0:22">

Run `yarn add gray-matter --save-dev`

</TimeStamp>


<TimeStamp start="0:50" end="0:56">

```jsx
import matter from 'gray-matter';
const {data, content} = matter('')

return {
    frontMatter: data,
    content
}
```

</TimeStamp>


<TimeStamp start="1:30" end="1:35">

```jsx
const postFilePath = join(postsPath, `${fileName}.md`);
const fileContent = readFileSync(postFilePath);
```

</TimeStamp>

