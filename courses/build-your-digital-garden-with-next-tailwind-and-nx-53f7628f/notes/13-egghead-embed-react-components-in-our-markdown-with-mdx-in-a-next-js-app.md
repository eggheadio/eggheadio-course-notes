# 13 - Embed React Components in our Markdown with MDX in a Next.js app

[Video Link]()

<TimeStamp start="0:50" end="0:52">

[MDX Documentation](https://mdxjs.com)

</TimeStamp>


<TimeStamp start="1:13" end="1:16">

Don't forget to rename your files, by changing the extension from `.md` to `.mdx`

</TimeStamp>

<TimeStamp start="1:54" end="1:56">

`yarn nx g @nrwl/react:library mdx-elements --directory=shared --dry-run`

</TimeStamp>
<TimeStamp start="2:55" end="1:00">

By using the Nx console we create a new React component called youtube and we select the *shared-mdx-elements* library

</TimeStamp>

<TimeStamp start="3:14" end="3:17">

```jsx
export interface YoutubeProps{
    title: string,
    uid: string
}
```

</TimeStamp>

<TimeStamp start="3:29" end="3:35">

Our function to embed a Youtube video should look like this: 

```jsx
export function Youtube(props: YoutubeProps) {
    return (
        <div>
            <iframe
                src={`https://www.youtube.com/embed/${props.uid}`}
                width="100%"
                height="500px"
                title={props.title}
                ></iframe>
    )
}
```

</TimeStamp>

<TimeStamp start="3:55" end="3:58">

In the file `index.ts` under our new library `./lib/youtube` we need to add the follow:

```jsx
import * from './lib/youtube/youtube';
```

</TimeStamp>


