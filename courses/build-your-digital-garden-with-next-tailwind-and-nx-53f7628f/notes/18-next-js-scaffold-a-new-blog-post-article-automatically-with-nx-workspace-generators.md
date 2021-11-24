# 18 -  Scaffold a New Blog Post Article Automatically With Nx Workspace Generators

[Video Link]()

<TimeStamp start="1:40" end="1:43">

Run `yarn nx g @nrwl/workspace:workspace-generator new-article`

</TimeStamp>


<TimeStamp start="2:35" end="2:40">

In the new schema file we are going to add author and excerpt, the code should look like this: 

```json 
"author":{
    "type": "string",
    "description": "The author of the article"
}, 

"excerpt": {
    "type": "string",
    "description": "An excerpt that summarizes the blog post in a single line"
}
...
"required": ["title", "author"]
```

</TimeStamp>

<TimeStamp start="4:08" end="4:10">

Create a new file called `_normalizedTitle_.mdx`

</TimeStamp>

<TimeStamp start="4:22" end="4:24">

[EJS documentation](https://ejs.co)

</TimeStamp>

<TimeStamp start="4:35" end="4:40">

You'll need to use the following syntax: 

```jsx
title: '<%= title %>'
excerpt: '<%= excerpt %>'
date: '<%= creationDate %>'
author:
    name: '<%= author %>'
```

</TimeStamp>
<TimeStamp start="7:43" end="7:45">

`yarn nx workspace-generator new-article "my generated article" --author=juri`

</TimeStamp>
