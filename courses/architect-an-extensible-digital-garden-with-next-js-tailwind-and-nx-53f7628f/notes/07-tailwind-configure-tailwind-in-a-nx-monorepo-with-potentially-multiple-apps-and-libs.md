# 7 - Configure Tailwind in a Nx Monorepo With Potentially Multiple Apps and libs

[Video Link]()

<TimeStamp start="0:05" end="0:08">

[Plugins in Tailwind](https://tailwindcss.com/docs/plugins)

</TimeStamp>


<TimeStamp start="0:43" end="0:45">

`yarn add @tailwindcss/typography`

</TimeStamp>


<TimeStamp start="0:52" end="0:55">

We are going to add a new plugin in our `tailwind.config.js` file:

```jsx 
plugins: [
    require('@tailwindcss/typography')
],
```

</TimeStamp>








