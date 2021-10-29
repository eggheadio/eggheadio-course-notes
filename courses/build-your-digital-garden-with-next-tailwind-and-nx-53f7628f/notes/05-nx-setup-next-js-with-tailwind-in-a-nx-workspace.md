# 5 - Setup Next.js with Tailwind in a Nx Workspace

[Video Link]()

<TimeStamp start="0:02" end="0:05">

We are going to use Tailwind to make sure our portfolio looks nice and stunning. You can find more information in Tailwind in their [website](https://tailwindcss.com)

</TimeStamp>


<TimeStamp start="0:36" end="0:40">

`yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest`

</TimeStamp>

<TimeStamp start="1:30" end="1:35">

Inside the folder site `cd apps/site` we run `npx tailwindcss init -p`


</TimeStamp>

<TimeStamp start="2:56" end="3:00">

Inside our `style.css` file we need to add the following:

```jsx
@tailwind base;
@tailwind components;
@tailwind utilities;
```
</TimeStamp>


