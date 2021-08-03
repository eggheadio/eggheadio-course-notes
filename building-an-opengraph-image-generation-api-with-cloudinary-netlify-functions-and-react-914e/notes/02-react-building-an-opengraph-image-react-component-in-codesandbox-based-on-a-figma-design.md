# 2 - Building an OpenGraph image React component in CodeSandbox, based on a Figma design

[Video Link](https://egghead.io/lessons/react-building-an-opengraph-image-react-component-in-codesandbox-based-on-a-figma-design)

<TimeStamp start="0:05" end="0:10">

Create a new React CodeSandbox [here](https://codesandbox.io/s)

</TimeStamp>

<TimeStamp start="0:35" end="0:50">

`@emotion/core` has been renamed as `@emotion/react`. We need to import in the `App.js` file the following: `import { jsx } from "@emotion/react";` and install `@emotion/react` dependency. We also need to add a pragma at the top of the file `/** @jsx jsx */`

</TimeStamp>

<TimeStamp start="1:33" end="1:44">

This is what your code looks like before you add in your background Image

``` jsx
        <div
          css={{
            width: 1200,
            height: 630,
          }}
        >
          image
        </div>
```

</TimeStamp>

<TimeStamp start="1:48" end="2:05">

Go back to the Gradient you made in the first video (or the notepad suggested in the first lesson) and copy the CSS from there and paste it inside the css element on your code, adjust the css attribute name from `background-image` to `backgroundImage` and wrap the css properties in quotes. (CSS attribute names in JS are camel case)

</TimeStamp>

<TimeStamp start="2:16" end="2:20">

You need to import global styles, `import { jsx, Global } from "@emotion/react";`

</TimeStamp>

<TimeStamp start="2:36" end="2:50">

Adding in some Global styles will inject the styles and apply them globally.

```jsx
        /** **/
        <Global
          styles={{
            '*': {
              boxSizing: 'border-box',
              margin: 0,
              padding: 0,
              fontFamily: 'system-ui',
            },
          }}
        />
        // ... //
```

</TimeStamp>

<TimeStamp start="2:51" end="2:56">

You need to wrap the image text in a div of its own.

</TimeStamp>

<TimeStamp start="2:57" end="3:46">

Now we're going to work on the rectangle our text will show up on, we're going to add some background color and margin. Also, on the top-level div we need to add `position: absolute` and `display:flex`  to set up our rectangle to fit in the area that we want.

</TimeStamp>

<TimeStamp start="4:07" end="4:20">

Next we're going to start scaffolding the rest of the text for our opengraph image within this rectangle. Chris is doing title, a list of tags, and author name. But you can do whatever you want here. 

</TimeStamp>

<TimeStamp start="4:40" end="5:30">

Great, we're getting closer! Now we want to make the div that contains our two spans (or a list and a span) separate. We'll add the CSS attributes `display: "flex"` and `justifyContent: "space-between"` and now they will each show up on opposite sides of the image.

</TimeStamp>

<TimeStamp start="5:32" end="5:45">

Take some time to style each of those components. If you're using a list, Chris walks through how to remove and restyle your list to be horizontal instead of vertical.

</TimeStamp>

<TimeStamp start="9:46" end="9:53">

To allow our title to dynamically grow to fill our content we'll import `import Textfit from 'react-textfit';` and add it as a dependency. 

</TimeStamp>

<TimeStamp start="11:46" end="12:03">

To add a `box-shadow` go to [this site](https://shadows.brumm.af/) and add it into your div component on your background card. 

</TimeStamp>

<TimeStamp start="12:05" end="12:15">

- Do one last round tweaking how your different elements look and bringing it in line with your Figma mock-up.

</TimeStamp>

<TimeStamp start="12:16" end="12:30">

**Resources** [Chris&rsquo;s Code Sandbox Example](https://codesandbox.io/s/building-an-opengraph-image-generation-api-with-cloudinary-netlify-functions-and-react-zjf2b?from-embed)
and [Different Code Sandbox Example](https://codesandbox.io/s/happy-mendel-uiesy?file=/src/App.js)

</TimeStamp>
