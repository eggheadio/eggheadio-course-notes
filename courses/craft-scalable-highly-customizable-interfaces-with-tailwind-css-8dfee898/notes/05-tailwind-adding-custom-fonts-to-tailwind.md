# 05 - Adding Custom Fonts to Tailwind


## Notes

<TimeStamp start="0:34" end="0:45 ">

After uploading the fonts in your project, create a new `styles.css` file and paste all the fonts rules. Dont forget to import the css file in your `_app.js`

</TimeStamp>

<TimeStamp start="1:20" end="1:25">
 
Add directly to the className the font, `style={{fontFamily: "Whitney"}}`

</TimeStamp>

<TimeStamp start="4:30" end="4:40">
 
By default Tailwind applies sans over our application, but if we change the default in tailwind.config, we will see our app is using the customized font. 

```jsx
import defaultTheme = require("tailwindcss/defaultTheme");
extend: {
    fontFamily: {
        sans: ["Whitney", "Open Sans", ...defaultTheme.fontFamily.sans] //create a fallback font
        title: ["Ginto", "Open Sans", ...defaultTheme.fontFamily.sans]
    }
}
```

</TimeStamp>
