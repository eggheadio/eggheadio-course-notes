# 06. Create a Marketing Gatsby Theme

[Code Link](https://github.com/christopherbiscardi/advanced-gatsby-themes-workshop-code/tree/02-a-marketing-theme)

[Video Link](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme)

## Summary

The marketing pages will be our first theme. All themes after this will build on top of the foundation we create here.

## Notes

[0:00](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme) Extracting out the marketing theme into its own package allows the marketing team to have autonomy.

First we need to create the theme folder in `packages/` and initialize a package.json file.

```bash
mkdir -p packages/gatsby-theme-marketing
cd packages/gatsby-theme-marketing
yarn init -y // -y skips all the questions yarn init asks.
```

[0:38](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=38) We want to move the `www/src/pages{theme.js, company.js, index.js, pricing.js}` into our new theme package.

[0:51](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=51) First, we need to create a `src/pages` directory in this theme: `mkdir -p src/pages`.

Chris drags and drops the theme, company, index, and pricing files from `www/src/pages` to `packages/gatsby-theme-marketing/src/pages`.

[1:14](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=114) Add gatsby-theme-marketing as a dependency in `www/package.json`.

```js
// www/package.json
{
"name": "www",
"version": "1.0.0",
"main": "index.js",
"author": "christopherbiscardi <chris@christopherbiscardi.com> (@chrisbiscardi)",
"license": "MIT",
"dependencies": {

...

"gatsby-source-wordpress": "^3.1.43",
"gatsby-theme-marketing": "*",
"gatsby-transformer-sharp": "^2.2.23",
"react": "^16.10.2",
"react-dom": "^16.10.2",
"shopify-buy": "^2.8.0",
"theme-ui": "^0.2.44"
},
```

We also have to add `gatsby-theme-marketing` to our `www/gatsby-config.js`.

```js
// www/gatsby-config.js
module.exports = {
plugins: [
`gatsby-theme-marketing`,
`gatsby-plugin-mdx`,
`gatsby-plugin-sharp`,
`gatsby-transformer-sharp`,

...
]
};
```

[1:48](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=108) Now we can run `yarn` to install our theme into www app. We will run into an error saying that the build can't find `gatsby-theme-marketing` even though we just added it to our config. This is because node's require algorithm requires a main file file in our `package.json`. This can be an empty file, Chris likes to put `// boop` in it so that it indicates the file is there on purpose.

```js
// gatsby-theme-marketing/package.json
{
  "name": "gatsby-theme-marketing",
  "version": "1.0.0",
  "main": "index.js",
  //...
```

[2:22](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=144) Now we are getting an error from `company.js` and `index.js`. We are missing some components that we need to copy over (not moving). Chris copies the whole components folder into the theme.

```bash
# While in packages/gatsby-theme-marketing
cp -R ../../www/src/components ./src/
```

Note that when we view our site now, nothing has changed, even though the new files are coming from our theme and not the site itself.

The components that we copied over depend on `react`, `react-dom`, `gatsby`, `theme-ui`, and `@theme-ui/presets`. We need to add `theme-ui` and `@theme-ui/presets` to our `packages/gatsby-theme-marketing/package.json`. We can skip `react`, `react-dom`, and `gatsby` because we are building a theme and Gatsby guarantees that these will be installed. If we don't add `theme-ui` and `@theme-ui/presets`, then when someone installs our theme, those packages won't get installed.

[4:01](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=241) Now we need to copy `gatsby-ssr.js`, `gatsby-browser.js`, and `wrap-root-elements.js` to our theme in `packages/gatsby-theme-marketing`.

[4:20](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=260) We need to modify the `wrap-root-elements.js` file because it is injecting global styles. This will conflict with the consumers of our theme. So we remove the `Global` component and import.

_before_

```js
import React from 'react'
import {ThemeProvider} from 'theme-ui'
import {Global} from '@emotion/core'
import {deep} from '@theme-ui/presets'
import * as H from './src/components/headings'
import * as Text from './src/components/text'

const components = {
  ...H,
  ...Text,
}

export default ({element}) => (
  <ThemeProvider theme={deep} components={components}>
    <Global styles={{body: {background: deep.colors.background}}} />
    {element}
  </ThemeProvider>
)
```

_after_

```
// packages/gatsby-theme-marketing/wrap-root-element.js
import React from "react";
import { MyThemeContext } from "./src/context";
import { swiss } from "@theme-ui/presets";
import theme from "./src/theme";
import * as H from "./src/components/headings";
import * as Text from "./src/components/text";

export default ({ element }) => (
  <ThemeProvider theme={swiss} components={components}>
    {element}
  </ThemeProvider>
);
```

[4:44](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=264) Notice we changes the theme preset as well. This makes it more obvious that we are using a separate theme for our marketing pages.

[5:00](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=300) You will notice that the colors changed for the site. But they also changed for our `www` pages as well (dev blog and shopify sales page).

[5:15](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=15) What's happening here?

> The problem of conflicting theme providers, conflicting React context or other global elements of your app, it's an easy trap to fall into when developing themes for general consumption.

[5:28](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=328) **We have a solution now and that's using our own React Context for our theme.** We'll add isolated-theme-ui to the dependencies list in `gatsby-theme-marketing`.

```json
// packages/gatsby-theme-marketing/package.json
{
  "name": "gatsby-theme-marketing",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "@theme-ui/presets": "^0.2.44",
    "theme-ui": "^0.2.44",
    "isolated-theme-ui": "1.0.1"
  },
...
}
```

Then we\'ll create a new file and source called, src/context.js This file imports a JSX pragma and an MDX pragma from the isolated-theme-ui package.

[Read more about JS Pragmas here.](https://www.gatsbyjs.org/blog/2019-08-02-what-is-jsx-pragma/)

```js
//  packages/gatsby-theme-marketing/src/context.js
import React from 'react'
import {jsxPragma, mdxPragma} from 'isolated-theme-ui'

export const MyThemeContext = React.createContext({
  theme: {},
  components: {},
})

// our custom pragmas, bootstrapped with our context
export const jsx = jsxPragma(MyThemeContext)
export const mdx = mdxPragma(MyThemeContext)
```

[6:17](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=367) We are now creating our own context that won\'t conflict with any other `theme-ui`.

[6:29](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=387) We now want to create a `packages/gatsby-theme-marketing/src/theme.js` file to export our theme preset in. This will allow any user of our theme to override the default theme that we set.

It needs to be in the `src` folder because gatsby allows anything in this folder to be overridden by the user of our theme.

```js
// packages/gatsby-theme-marketing/src/theme.js
import {swiss} from '@theme-ui/presets'

export default swiss
```

[6:49](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme) We're now going to get rid of the theme provider from theme UI because we're going to use our own. We'll Import MyThemeContext from the context.js file we just created as well as the theme from the token's file we just created.

We will replace theme provider with MyThemeContext.Provider imported from our bootstrap context. We'll also set theme and components as their own keys and the values for the provider. Now that we've provided our tokens through own context, we can use them in our components.

[7:00](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=420) Now we need to use the theme provider that we just created.

_before_

```js
// packages/gatsby-theme-marketing/wrap-root-element.js
import React from "react";
import { ThemeProvider } from "theme-ui";
import { Global } from "@emotion/core";
import { deep } from "@theme-ui/presets";
import _ as H from './src/components/headings'
import _ as Text from './src/components/text'

const components = {
...H,
...Text
};

export default ({ element }) => (
  <ThemeProvider theme={deep} components={components}>
  <Global styles={{ body: { background: deep.colors.background } }} />
    {element}
  </ThemeProvider>
);
```

_after_

```js
// packages/gatsby-theme-marketing/wrap-root-element.js
import React from "react";
import { MyThemeContext } from "./src/context";

import theme from "./src/theme";
import _ as H from "./src/components/headings";
import _ as Text from "./src/components/text";

const components = {
...H,
...Text
};

export default ({ element }) => (
  <MyThemeContext.Provider
  value={{
  theme,
  components
  }}
  >
    {element}
  </MyThemeContext.Provider>
);
```

[7:18](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=438) Now we need to go through and replace any `jsx` pragma import from `theme-ui` and replace with our own import from context. This needs to happen in all the components in `packages/gatsby-theme-marketing/src/components`

```js
import {jsx} from '../context'
```

We'll do the same in the other components' files, heading.js. Finally, we can re-introduce the global styles that we removed earlier from wrap-root-elements.js into each of the pages that we'll be rendering from our theme.
[7:42](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=462) Now we need to get our pages (`packages/gatsby-theme-marketing/src/pages`) using our theme. We removed the `Global` component from our `wrap-root-element.js` so we need to re-introduce it.

```js
// packages/gatsby-theme-marketing/src/pages/company.js
import React, {useContext} from 'react'
import {Global} from '@emotion/core'
import {MyThemeContext} from '../context'
import Header from '../components/header'
import * as H from '../components/headings'
import * as Text from '../components/text'

export default props => {
  const {theme} = useContext(MyThemeContext)
  return (
    <div>
      <Global styles={{body: {backgroundColor: theme.colors.background}}} />
      <Header />
      <H.h1>Company Page</H.h1>
      <Text.p>about us and stuff</Text.p>
      <H.h2>Employees</H.h2>
      <Text.p>hopefully they don't leave</Text.p>
      <H.h2>Investors</H.h2>
      <Text.p>Thanks for money yo</Text.p>
    </div>
  )
}
```

[8:02](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=482) > **Note that using the Global component and page templates and pages that we control in our theme is OK because the Global component we'll mount and unmount when those pages mount and amount.** 
We need to add this `Global` component that uses our themes colors in each of the `pages/` as well.
We've now created a completely isolated theme that a team could take and style how they want their site to look.
[8:56](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=536) Chris shows how the `www` user of our theme can override the default theme by shadowing that file in its `src` folder.

```js
// www/src/gatsby-theme-marketing/theme.js
import {deep} from '@theme-ui/presets'

export default deep
```

More reading on Component Shadowing: [What is component shadowing? (article)](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/) [Component Shadowing in Gatsby Themes (docs)](https://www.gatsbyjs.org/docs/themes/shadowing/) [How shadowing works(docs)](https://www.gatsbyjs.org/docs/how-shadowing-works/)
[9:42](https://egghead.io/lessons/gatsby-create-a-marketing-gatsby-theme#t=582) **This allows us to install our theme into any site without worrying about breaking anything on that site and without worrying about that site breaking us.**
