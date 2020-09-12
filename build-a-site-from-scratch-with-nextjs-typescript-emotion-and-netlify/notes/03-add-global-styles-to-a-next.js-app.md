# Add global styles to a Next.js app

[Video Link](https://egghead.io/lessons/next-js-add-global-styles-to-a-next-js-app?pl=build-a-blog-with-next-js-typescript-emotion-and-netlify-adcc)

-   We're going to clean out the content and set up how we're going to be styling our site
-   📝 In later versions of Next.js (At least in 9.5.3) many of the changes that Tomasz makes to the css styles are already present in the `create-next-app` template.
-   📝The `<style>` tags are no longer present in the `index.tsx` file in later versions of the `create-next-app`, additionally the `_app.js` file is present by default. Let's rename it to `_app.tsx`
-   Next.js uses the `App` component to initialize pages. You can override page initialization which allows us to add global.css files. 📝 The `global.css` file file is in the `styles/` folder of the project in newer versions of `create-next-app`. 📜 [Documentation Link](https://nextjs.org/docs/advanced-features/custom-app)
    -   The updated `_app.tsx` file should look similar to this:

```js
import '../styles/globals.css'
import {AppProps} from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
```

-   You can change the font file in `global.css` to verify that global styles are working.

