# 04 - Customizing Tailwind’s Color Palette With Your Brand


## Notes

<TimeStamp start="0:34" end="0:45">

Go to [Figma](https://www.figma.com/) and collect all the colors you need. ANd then map out the colors with the screen, that will help you to get a better picture of your design and what you need. 

</TimeStamp>

<TimeStamp start="1:48" end="1:35">

If you go to `tailwind.config.js` and add the following:

```jsx
theme:{
    extend: {
        colors: {
            gray: {
                'paste the values you created in figma'
            }
        }
    }
}
```

</TimeStamp>
