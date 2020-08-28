# 6 - Compiling a React to an IIFE with Rollup to execute and render in a headless browser

[Video Link](https://egghead.io/lessons/react-compiling-a-react-to-an-iife-with-rollup-to-execute-and-render-in-a-headless-browser)

**Summary:** This video will walk through adding our opengraph image we wrote in codesandbox to our serverless function. Because we will need to compile everything to something that will run in our Headless Chromium instance, everything will need to be compiled which we'll do using the Rollup utility.

- If we hit our serverless function now, it'll run Playwright, which runs Headless Chromium, and lets us take a screenshot of the resulting DOM, then returns that and shows us the image that we've captured.

- The photo we've taken right now is just a string in the DOM. What we want is our Open Graph image that we coded up in CodeSandbox and designed in Figma. We'll start by creating a new file in a new directory. Here we have `image.js` in `src`.

- **It uses a couple packages that we'll have to install.** It also uses language features that aren't native to the browser. **We'll have to compile this file into something that can run in the Chromium instance.**

- To compile our app to something that can run in the Chromium instance, we'll use [Rollup](https://rollupjs.org/guide/en/). We'll also need `[rollup-plugin-babel]`. Rollup can be operated just on the command line. In our case, we'll create a `rollup.config.js`file.

```
yarn add --dev rollup
```

- In our rollup config, we'll import rollup-plugin-babel and use it with an input file of src/image.js, which is our component we just pulled out of CodeSandbox, with an output of image.js.

``` js
// functions/gen-opengraph-image/src/image.js

const config = {
  input: 'src/image.js',
  output: [
    {
      file: `image.js`,
      format: 'iife',
    },
  ],
  plugins: [],
}
```

- If we try to run yarn rollup with a config file of rollup.config.js, we can see that we haven't installed babel-core. We'll also want to install babel-preset-react and, optionally, babel-preset-env.

- `yarn add --dev @babel/core @babel/preset-react`

- We can try running the rollup config again. In this case, we run into an unexpected token. This is an unexpected token because `rollup-plugin-babel` without any config doesn't understand what JSX is. *So we're going to have to make sure that babel knows what React is*

- `yarn rollup -c rollup.config.js`

- In `babelrc`, we can set the presets to `preset-env` and `preset-react`. `preset-env` is pretty aggressive by default. We don't really have to worry about setting the options yet.

```js
// functions/gen-opengraph-image/.babelrc
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

- We do know that we're only running in Chromium. If we wanted to modify the way that babel was transforming our code into runnable code in the Chromium instance, **we could do it just for what Chromium supports and not for any legacy browsers.**

- If we look at `image.js`, you can see that we have a compiled file. We no longer have any JSX. We are now calling the JSX function from `@emotion/core` instead of `react.createElement`. This leaves us with the problem of how to render our component into the actual page in Playwright.

📝**Note:** If you haven't [changed the Build image selection](https://docs.netlify.com/configure-builds/get-started/#build-image-selection) in Netlify from &ldquo;Ubuntu Xenial 16.04&rdquo; which is the default to &ldquo;Ubuntu Trusty 14.04&rdquo;, now would be a great time to do that. The newer build image doesn't seem to handle `FS` well and this part of the code will break.

- Since we're going to run this code inside of the Chromium instance, we can pull it in as a `string` using `FS`. `FS` allows us to read the file into memory when we start the function.

```js
// gen-opengraph-image.js

const playwright = require('playwright-aws-lambda')
const fs = require('fs')
const script = fs.readFileSync('./image.js', 'utf-8')
```

- After setting the `HTML` with the `corgi` id, we'll add a `script` tag to the page. This script tag will run in the browser and will be the component that we compiled out.

```js
await page.addScriptTag({ content: script })
const boundingRect = await page.evaluate(() => {
  const corgi = document.getElementById('corgi')
  const { x, y, width, height } = corgi.children[0].getBoundingClientRect()
  return { x, y, width, height }
})
```

- **Before we commit, we'll have to do two more things.** One is add a script that will call rollup for us to the package.json of the function. This will be ``rollup -c rollup.config.js``. In our `Makefile`, after we install, we will run `build`.

```Makefile
install:
 cd functions/gen-opengraph-image && npm i && npm run build
```

- If we run the function in production now that we've built, we see that we get the same result. **If we looked back at our component, we can see that this doesn't do anything. We export the component directly but don't render it.**

- We'll `import { render } from "react-dom"` and we'll render `<App />` on the `corgi` id.

```
// gen-opengraph-image.js

render(<App />, document.getElementById('corgi'))
```

- After taking advantage of `react-dom`, we'll change our `div` to say no corgis here, so that we can tell if our app is being rendered or not.

```html
<body>
  <div id="corgi"><div>NO CORGIS HERE</div></div>
</body>
```

- Note that we'll also need to change our format from CJS to IIFE.

```js
// rollup.config.js file
{
  file: `image.js`,
  format: "iife"
}
```

- If we look at the compiled `image.js` file, we can see that it doesn't include any of the `imports` that we have. It relies on the variable globals. To solve this, we'll use a plugin called `rollup/plugin-node-resolve`.

- Now that we're including the modules and node modules in our bundle, we're running into a problem. **We have to be able to resolve all the `imports`. In this case, we don't have the `babel/runtime` helpers around.**

- After including `plugin-node-resolve` and also the `plugin-commonjs` module and rerunning build, we're met with another error, `Missing shims for Node.js built-ins`. This is because we're creating a browser that depends on process.

```js
// functions/gen-opengraph-image/rollup.config.js

import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const config = {
  input: 'src/image.js',
  output: [
    {
      file: `image.js`,
      format: 'iife',
    },
  ],
  plugins: [resolve(), babel(), commonjs()],
}
```

- Many packages in the node ecosystem depend on `process.env` to inject environment variables. We can see that process is being accessed and also that `react` is being accessed. We haven't installed React yet, so we need to do that.

- Then we'll add `rollup-plugin-node-builtins`, which gives us a couple of similar errors. It turns out that one of these errors, for process, is possible to fix by using `plugin-node-globals`, while the other, `createContext` is not exported by `node_modules/react/index.js` and needs to be handled in a different way.

- Because React doesn't have an ESM build, it currently relies on the `commonjs exports`. This is why in the commonjs plugin, we need to add a set of `named exports` for the `ReactDOM` and `React` packages. We can do this by importing them into our rollup config and then just putting the `keys` in the `named exports`. This doesn't put all of React in our config. It just uses the `namedExports`.

```js
import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import replace from '@rollup/plugin-replace'
import React from 'react'
import ReactDOM from 'react-dom'

const config = {
  input: 'src/image.js',
  output: [
    {
      file: `image.js`,
      format: 'iife',
    },
  ],
  plugins: [
    resolve(),
    babel(),
    commonjs({
      namedExports: {
        'react-dom': Object.keys(ReactDOM),
        react: Object.keys(React),
      },
    }),
    globals(),
    builtins(),
  ],
}

export default config
```

- **This has put us in a position where Babel is running on all of React.** We can see this because Babel has deoptimized the styling of the compiled `ReactDOM` development.

- There's a key insight here in that `process.env.NODE_ENV` is used to optimize packages like React quite often. We can solve this special case by using `rollup/plugin-replace` and then using it in our config to replace `process.env.NODE_ENV` with production. `replace({"process.env.NODE_ENV": JSON.stringify("production")}),` We've also excluded node modules, so we don't get any more React warning due to the file size.

```js
// rollup.config.js

const config = {
  input: 'src/image.js',
  output: [
    {
      file: `image.js`,
      format: 'iife',
    },
  ],
  plugins: [
    resolve({
      preferBuiltins: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs({
      namedExports: {
        'react-dom': Object.keys(ReactDOM),
        react: Object.keys(React),
      },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    globals(),
    builtins(),
  ],
}
```

- The final warning we'll see is for `built-ins`. This is a behavior that we'll look for either in `FS` package in `node modules` or the `FS` package that's built in, depending on which option we use here. **That may seem like a lot, but Rollup comes as a very minimum set of ES module first functionality.**

- **This means that to interact with the ecosystem that was built for CommonJS, we need these extra plugins.** If you are able to work in an ES modules first environment, many of these plugins won't be necessary.

- If we look at our image now, that's returned from the serverless function, we can see **that we're successfully taking and returning our screenshot.** The sizing isn't quite right, but we'll configure setting the viewport in the next video.

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1586898822/transcript-images/06-viewport.jpg)
