# 2 - Building an OpenGraph image React component in CodeSandbox, based on a Figma design

[Video Link](https://egghead.io/lessons/react-building-an-opengraph-image-react-component-in-codesandbox-based-on-a-figma-design)

- Create a CodeSandbox, and install the `@emotion/core` dependency
- This is what your code looks like before you add in your background Image

~~~ javascript
    /** @jsx jsx */
    import { jsx } from "@emotion/core";

    export default function App() {
      return (
        <div
          css={{
            width: 1200,
            height: 630,
          }}
        >
          image
        </div>
      );
    }
~~~

- Go back to the Gradient you made in the first video and copy the CSS from there inside the css element, adjusting the css attribute name from `background-image` to `backgroundImage`. (CSS attribute names in JS are camel case). My background is below:

``` js
backgroundImage: `linear-gradient(45deg, rgb(191,228,242) 0%, rgb(191,228,242) 5%,rgb(146,92,119) 5%, rgb(146,92,119) 7%,rgb(114,151,166) 7%, rgb(114,151,166) 9%,rgb(117,185,190) 9%, rgb(117,185,190) 100%)`
```

- Add in some Global styles which will inject the styles and apply them globally, I&rsquo;ll probably go back and update the fontFamily value with one of my website fonts.

``` javascript
        import { jsx, Global } from '@emotion/core'

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

- Now we&rsquo;re going to work on the rectangle our text will show up on. We&rsquo;ll wrap this in a div of its own. We&rsquo;re going to add the value `display: flex` to the top-level div.
- Here&rsquo;s my code for my rectangle div, **notice the background CSS attribute** you can grab the hex code for that from the rectangle in your Figma design. Also note that this code includes the shadow that we&rsquo;ll be adding later.

``` javascript
    <div
            css={{
              background: "#EEF6F7",
              margin: "40px",
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: 15,
              padding: "4rem",
              boxShadow: `
      0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028),
      0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042),
      0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07)`
            }}
          >
```

- Next we&rsquo;re going to start scaffolding the rest of the text for our opengraph image within this rectangle. Chris is doing title, a list of tags, and author name. But you can do whatever you want here. I&rsquo;m going to do title, type of post, and author name.

      <h1
        css={{
          color: "black"
        }}
      >
        This is a title of a blog post
      </h1>
      <div css={{ color: "black" }}>
        <span>Type of post</span>
        <span>Author Name</span>
      </div>
    </div>

- Great, we&rsquo;re getting closer! Now we want to make the div that contains our two spans (or a list and a span) separate. We&rsquo;ll add the CSS attributes `display: "flex"` and `justifyContent: "space-between"` and now they will each show up on opposite sides of the image.
- Take some time to style each of those components. If you&rsquo;re using a list, Chris walks thorugh how to remove and restyle your list to be horizontal instead of vertical.
- To allow our title to dynamically grow to fill our content we&rsquo;ll wrap it in a Textfit component like so:

``` javascript
        import Textfit from "react-textfit";

        <h1
                  css={{
                    color: "black",
                    height: "100%"
                  }}
                >
            <Textfit
                    max={140}
                    min={24}
                    style={{ minHeight: "80%", maxHeight: "80%" }}
                  >
            This is a title of a blogpost
            </Textfit>
        </h1>
```

- **What if you want to add emoji&rsquo;s to your title?** That&rsquo;s as easy as importing `react-twemoji` and wrapping your title like so:

```javascript
        import Textfit from "react-textfit";
        import Twemoji from "react-twemoji";

            <h1
                  css={{
                    color: "black",
                    height: "100%"
                  }}
                >
                  <Textfit
                    max={140}
                    min={24}
                    style={{ minHeight: "80%", maxHeight: "80%" }}
                  >
                    <Twemoji>This is a title of a blog post 🎉</Twemoji>
                  </Textfit>
                </h1>
```

- Because I want the flexibility, I&rsquo;m going to wrap my post type elment in a twemoji element as well.
- The Emoji&rsquo;s can get a bit large so I&rsquo;m going to add to my Global styles which will make the emojis as tall as the line

```  javascript
        <Global
              styles={{
                ".emoji": {
                  height: "1em",
                  width: "1em",
                  margin: "0 .05em 0 .1em",
                  verticalAlign: "-0.1em"
                },
                "*": {
                  boxSizing: "border-box",
                  margin: 0,
                  padding: 0,
                  fontFamily: "system-ui"
                }
              }}
            />
```

- Do one last round tweaking how your different elements look and bringing it in line with your Figma mock-up.

## Resources

- [Chris&rsquo;s Code Sandbox Example](https://codesandbox.io/s/building-an-opengraph-image-generation-api-with-cloudinary-netlify-functions-and-react-zjf2b?from-embed)
- [Different Code Sandbox Example](https://codesandbox.io/s/happy-mendel-uiesy?file=/src/App.js)
