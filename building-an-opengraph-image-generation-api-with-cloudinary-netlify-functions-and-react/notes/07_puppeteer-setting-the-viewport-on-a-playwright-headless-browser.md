# 7 - Setting the viewport on a Playwright headless browser

[Video Link](https://egghead.io/lessons/puppeteer-setting-the-viewport-on-a-playwright-headless-browser)

- Our serverless function image generation is working, but you'll see that **the dimensions that are getting returned from a page that a value will call are smaller than the actual image**. This is because we haven't set the viewport yet.

- Right before we set content, we can set the `ViewportSize` to whatever we want. In our case, **we'll set it for the same dimensions that we used in figma,** and our CodeSandbox.

```js
// functions/gen-opengraph-image/gen-opengraph-image.js

page.ViewportSize({
  width: 1200,
  height: 630,
})
```

- Now we see our image, which I'll save to my desktop.

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1586898829/transcript-images/07-viewport-final.jpg)
