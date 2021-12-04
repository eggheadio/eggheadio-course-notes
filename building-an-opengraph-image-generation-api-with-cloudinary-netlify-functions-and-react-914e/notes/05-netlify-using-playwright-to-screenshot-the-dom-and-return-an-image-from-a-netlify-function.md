# 5 - Using Playwright to screenshot the DOM and return an image from a Netlify Function

[Video Link](https://egghead.io/lessons/netlify-using-playwright-to-screenshot-the-dom-and-return-an-image-from-a-netlify-function)

<TimeStamp start="0:01" end="0:15">

We are going to install [Playwright](https://github.com/microsoft/playwright), which is the library that will run headless browsers for us, whether it's Chromium-based, Firefox, or Webkit-based. If we install Playwright, the regular package, it installs all three browsers for us for convenience.
  
</TimeStamp>

<TimeStamp start="0:37" end="0:50">

We're going to use [Playwright AWS Lambda](https://github.com/JupiterOne/playwright-aws-lambda). To add this package run `npm install playwright-core playwright-aws-lambda --save`

</TimeStamp>

<TimeStamp start="3:44" end="3:54">

In the `Makefile` run the following : `cd functions/gen-opengraph-image && npm i`

</TimeStamp>

