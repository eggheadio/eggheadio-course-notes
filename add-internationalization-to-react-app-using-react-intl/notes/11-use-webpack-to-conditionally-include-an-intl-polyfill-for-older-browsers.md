# Use Webpack to Conditionally Include an Intl Polyfill for Older Browsers

**[📹 Video](https://egghead.io/lessons/react-use-webpack-to-conditionally-include-an-intl-polyfill-for-older-browsers)**

## Deprecation ⚠
The migration to using native Intl APIs in react-intl v3 may have rendered this lesson obsolete. In the [resources](#resources-) for these lesson notes, I've included a link to the react-intl v2 -> v3 upgrade guide and specifically the *Migrate to using native Intl APIs* section.

Furthermore, `require.ensure()` is disabled as of Create React App 2.0. Conditionally loading polyfills is now going to require some implementation [like this](https://2ality.com/2017/01/import-operator.html#conditional-loading-of-modules).

The following notes will cover the video lesson content. If you have ideas about how to update the lesson code in order to implement the functionality described in this lesson on newer versions of react-intl and Create React App, please contribute to these notes!

## Adding Dependencies ⚡
In the terminal, we run
```bash
yarn add intl
```

## Conditionally Including Intl Polyfill ⚡
After the package is installed, we need to navigate to **src/index.js** and conditionally include it.

Here's what we want: If `window.Intl` doesn't exist, we are going to `ensure` that the `intl` polyfill, as well as all of our needed locale files, are in this project.

### index.js
```js
...
import App from './App';
import './index.css';

if (!window.Intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/en.js',
    'intl/locale-data/jsonp/fr.js',
    'intl/locale-data/jsonp/es.js'
  ], (require) => {
    require('intl');
    require('intl/locale-data/jsonp/en.js');
    require('intl/locale-data/jsonp/fr.js');
    require('intl/locale-data/jsonp/es.js');
  })
}

...
```
Next, we're going to wrap our "business" logic in a function. In other words, we'll be moving all of the code that follows what we've just added into a `runApp()` function.

### index.js
```js
...
function runApp() {
  let locale = (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage
  || 'en-US';

  ReactDOM.render(
    <IntlProvider locale={locale} defaultLocale="en-US" messages={flattenMessages(messages[locale])}>
    <App />
    </IntlProvider>,
  document.getElementById('root')
  );
}
```

The reason for this is so that we don't penalize browsers that do understand `window.Intl` by adding all of the defined polyfills. 

We will now need to instantiate `runApp()` after our `require.ensure()` method. Furthemore, we'll need to add an `else` statement containing only `runApp()` for browsers that support `window.Intl`.
### index.js
```js
if (!window.Intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/en.js',
    'intl/locale-data/jsonp/fr.js',
    'intl/locale-data/jsonp/es.js'
  ], (require) => {
    require('intl');
    require('intl/locale-data/jsonp/en.js');
    require('intl/locale-data/jsonp/fr.js');
    require('intl/locale-data/jsonp/es.js');
  })
  runApp()
} else {
  runApp()
}
```

## Resources 📖
- [Upgrade Guide v2 -> v3 - react-intl](https://formatjs.io/docs/react-intl/upgrade-guide-3x/)
- [Migrate to using native Intl APIs](https://formatjs.io/docs/react-intl/upgrade-guide-3x/#migrate-to-using-native-intl-apis)
- [Create React App 2.0 - Breaking Changes](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html#breaking-changes)
