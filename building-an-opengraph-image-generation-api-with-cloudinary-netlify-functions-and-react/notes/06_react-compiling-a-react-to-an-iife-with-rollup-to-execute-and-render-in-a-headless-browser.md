# 6 - Compiling a React to an IIFE with Rollup to execute and render in a headless browser

[Video Link](https://egghead.io/lessons/react-compiling-a-react-to-an-iife-with-rollup-to-execute-and-render-in-a-headless-browser)


<TimeStamp start="0:01" end="0:18">

**Summary:** This video will walk through adding our opengraph image we wrote in codesandbox to our serverless function. Because we will need to compile everything to something that will run in our Headless Chromium instance, everything will need to be compiled which we'll do using the Rollup utility.

</TimeStamp>
<TimeStamp start="0:37" end="0:45">

 We'll use [Rollup](https://rollupjs.org/guide/en/). To download this dependency run `yarn add --dev rollup`

</TimeStamp>

<TimeStamp start="1:04" end="1:09">

Run `yarn add --dev @babel/core @babel/preset-react`

</TimeStamp>
<TimeStamp start="1:45" end="1:59">

📝**Note:** If you haven't [changed the Build image selection](https://docs.netlify.com/configure-builds/get-started/#build-image-selection) in Netlify from &ldquo;Ubuntu Xenial 16.04&rdquo; which is the default to &ldquo;Ubuntu Trusty 14.04&rdquo;, now would be a great time to do that. The newer build image doesn't seem to handle `FS` well and this part of the code will break.


</TimeStamp>
<TimeStamp start="2:03" end="2:08">

`FS` allows us to read the file into memory when we start the function.

</TimeStamp>
<TimeStamp start="2:20" end="2:24">

In your `package.json` file add `rollup -c rollup.config.js`

</TimeStamp>

<TimeStamp start="2:20" end="2:24">

 In our `Makefile`, we run `cd functions/gen-opengraph-image && npm i && npm run build`

</TimeStamp>

