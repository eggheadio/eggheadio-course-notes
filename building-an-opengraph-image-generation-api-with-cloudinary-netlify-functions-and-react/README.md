<h1 align="center"><a href="https://egghead.io/playlists/building-an-opengraph-image-generation-api-with-cloudinary-netlify-functions-and-react-914e">Building an OpenGraph image generation API with Cloudinary, Netlify Functions, and React</a></h1>

<p align="center"><img src="https://res.cloudinary.com/sector/image/upload/s--Ph_pJ8d3--/fn_pre:remote:aHR0cHM6Ly9yZWxheGVkLXBheW5lLWQxYmZiZS5uZXRsaWZ5LmFwcC8ubmV0bGlmeS9mdW5jdGlvbnMvZ2VuLW9wZW5ncmFwaC1pbWFnZT9hdXRob3I9Y2hyaXNiaXNjYXJkaSZ0YWdzPWZpZ21hJTI1MkNuZXRsaWZ5JTIwZnVuY3Rpb25zJTI1MkNwbGF5d3JpZ2h0JnRpdGxlPUJ1aWxkaW5nJTIwYW4lMjBPcGVuR3JhcGglMjBpbWFnZSUyMGdlbmVyYXRpb24lMjBBUEklMjB3aXRoJTIwQ2xvdWRpbmFyeSUyME5ldGxpZnklMjBGdW5jdGlvbnMlMjBhbmQlMjBSZWFjdA==/v1584740928/og-images/img-2.png" width="340"></p>


## About this course

OpenGraph images are the images you see when you paste a link into a social platform and it "unfurls" into an image, title, and description. This happens on Twitter, Discord, Slack, and many other platforms. This collection goes over everything from designing OpenGraph images in Figma, to implementing them in CodeSandbox, to returning headless browser screenshots from Netlify Functions, and finally using Cloudinary as a write-through cache.

You will come away from this collection with the ability to ship an API that you can use on any of your sites, and also on-demand, that can generate images for not only OpenGraph unfurls, but also for Instagram, GitHub, and more. Using headless browsers with playwright to generate our images means we get full access to all the responsive power of CSS and all the logical power of JS to handle layout, importing assets like pngs, choosing different fonts, and more.

The image above is generated via the project you'll build and deploy in this course


**📝 Important Note:** In order to get the OpenGraph Image working in Netlify you need [to change the Build image](https://docs.netlify.com/configure-builds/get-started/#build-image-selection) from &ldquo;Ubuntu Xenial 16.04&rdquo;, which is the default, to &ldquo;Ubuntu Trusty 14.04&rdquo;. Since this collection was published something has changed with Netlify's Build Machines and the original code no longer works on Netlify's Machines, it does, however still work on the Legacy Machines

OpenGraph images are the images you see when you paste a link into a social platform and it "unfurls" into an image, title, and description. This happens on Twitter, Discord, Slack, and many other platforms. This collection goes over everything from designing OpenGraph images in Figma, to implementing them in CodeSandbox, to returning headless browser screenshots from Netlify Functions, and finally using Cloudinary as a write-through cache.

You will come away from this collection with the ability to ship an API that you can use on any of your sites, and also on-demand, that can generate images for not only OpenGraph unfurls, but also for Instagram, GitHub, and more. Using headless browsers with playwright to generate our images means we get full access to all the responsive power of CSS and all the logical power of JS to handle layout, importing assets like pngs, choosing different fonts, and more.

## About these notes

I've used this collection twice to design my OpenGraph Images. The first time I forked the example code and skipped around the video to see how it was implemented, the second time I went through and took notes as I went. 

My notes start with the transcript or my summary of the content and may also include additional notes, clarifications, and extraneous information that I came across as I went through the collection.

## Examples of Final Code
Here are some different final implementations for you to look at:

### Implementations of the Opengraph Image Generator
- [Chris's Example Code](https://github.com/ChristopherBiscardi/egghead-opengraph-images/tree/master)
- [My Code](https://github.com/dschapman/egghead-opengraph-images)
- [Joel's Code](https://github.com/joelhooks/joelhooks-opengraph-images)
- [Ian's Code](https://github.com/theianjones/egghead-opengraph-images)
### Examples of how this generator can be called in your website
- [Ian's Website](https://github.com/theianjones/blog/blob/cdbd04ce4da107816ed45d52da6217c6d317cf59/src/components/seo.js#L35)
- [Joel's Website](https://github.com/joelhooks/joelhooks-com/blob/62c99e8e31f1b049359d9aaea026cc0bfc48aed9/src/components/SEO.js#L40)
- [My Website](https://github.com/dschapman/my-website/blob/33317ed4d09c6ea346846e07e32ec036d40d3265/src/components/seo.js#L39)

## Notes Table of Content
1. [Designing OpenGraph Unfurls in Figma](notes/01-designing-opengraph-unfurls-in-figma.md)
2. [Building an OpenGraph image React Component in Codesandbox based on a Figma Design](notes/02-building-an-opengraph-image-react-component-in-codesandbox-based-on-a-figma-design.md.md)
3. [Setting up a new Github repo to deploy functions on Netlify with Make and netlify.toml](notes/03-setting-up-a-new-github-repo-to-deploy-functions-on-netlify-with-make-and-netlify-toml.md)
4. [Scaffolding and deploying a Netlify Function in JavaScript](notes/04-scaffolding-and-deploying-a-netlify-function-in-java-script.md)
5. [Using Playwright to screenshot the DOM and return an image from a Netlify Function](notes/05-using-playwright-to-screenshot-the-dom-and-return-an-image-from-a-netlify-function.md)
6. [Compiling a React to an IIFE with Rollup to execute and render in a headless browser](notes/06_react-compiling-a-react-to-an-iife-with-rollup-to-execute-and-render-in-a-headless-browser.md)
7. [Setting the viewport on a Playwright headless browser](notes/07_puppeteer-setting-the-viewport-on-a-playwright-headless-browser.md)
8. [Testing an opengraph image with the Twitter Card Validator](notes/08_html-5-testing-an-opengraph-image-with-the-twitter-card-validator.md)
9. [Passing variables to serverless functions using query strings](notes/09_http-passing-variables-to-serverless-functions-using-query-strings.md)
10. [Using Cloudinary as a write-through cache for a Netlify Function that generates images](notes/10_javascript-using-cloudinary-as-a-write-through-cache-for-a-netlify-function-that-generates-images.md)
11. [Using _redirects files on Netlify to make .netlify function URLs more user-friendly](notes/11_netlify-using-_redirects-files-on-netlify-to-make-netlify-function-urls-more-user-friendly.md)

## Contributors ✨

<table>
  <tr>
    <td align="center"><a href="https://github.com/dschapman"><img src="https://avatars0.githubusercontent.com/u/36767987?s=460&u=ab9bc3080185245a52b84c94c44c972266ae47af&v=4" width="100px;" alt=""/><br /><sub><b>Daniel Chapman</b></sub></a><br /><a href="#review" title="Review">🖋</a></td>
    <td align="center"><a href="https://github.com/ChristopherBiscardi"><img src="https://avatars0.githubusercontent.com/u/551247?s=460&u=ce008553acd5cb32ba9f7741f764aab81a30c413&v=4" width="100px;" alt=""/><br /><sub><b>Christopher Biscardi</b></sub></a><br /><a href="#review" title="Review">🖋</a></td>
    <td align="center"><a href="https://github.com/lsminter"><img src="https://avatars2.githubusercontent.com/u/26470581?s=460&u=89e0c4f7db5c054125a372dc17b4590e297ac20d&v=4" width="100px;" alt=""/><br /><sub><b>Lucas Minter</b></sub></a><br /><a href="#review" title="Review">👀</a></td>
</table>
