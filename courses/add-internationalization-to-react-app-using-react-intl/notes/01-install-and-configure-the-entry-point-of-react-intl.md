# Install and Configure the Entry Point of react-intl

**[📹 Video](https://egghead.io/lessons/react-install-and-configure-the-entry-point-of-react-intl)**

## Starting your project with Create-React-App ⚡
Before the course begins, we will need to create our React project folder with Create-React-App.

In the terminal, navigate to the directory of your choice, and run the following commands:

To install the necessary files and create the necessary folders,
```bash
npx create-react-app my-app
```
To navigate to your new project folder,
```bash
cd my-app
```
To start your development server,
```bash
yarn start
```
Our next step is to install some dependencies, so you may now want to stop your development server with `Ctrl+C` now that we know our project works.
## Installing Dependencies ⚡
To add react-intl to our project, we run in the terminal
```bash
yarn add react-intl
```
## Creating our Messages file ⚡
We'll now create a file to store all our messages in our app.

In our **src** folder, we create a **messages.js** file, and within we'll export an object with keys that correspond to the languages that our app will support:

⚠ Note: The course uses `'es-ES'` and `'fr-FR'`, but these codes aren't supported by Google Chrome's French and Spanish language settings, so these notes use `'es'` and `'fr'` instead.
## messages.js
```js
export default {
  'en-US': {},
  'es': {},
  'fr': {}
}
```

## Defining user Locale and using the IntlProvider component ⚡
We can now navigate to our entry-point file, **src/index.js**, and import from the **src/messages.js** file that we just created. We'll now import what we need from the react-intl package.

### Deprecation ⚠
As of writing these notes (7/28/2020), react-intl no longer comes with CLDR data, but instead relies on native Intl API. You can read more about these updates [here](https://formatjs.io/docs/react-intl/upgrade-guide-3x/#migrate-to-using-native-intl-apis).

For our sake, this just means that we no longer need to import `addLocaleData` and each language's locale file that we want to support.

The only import that we need to add now, along with our `messages`, is `IntlProvider`: a required component to use react-intl.
### index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// New Imports
import messages from `./messages`;
import { IntlProvider } from 'react-intl';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
With everything imported, we now want to define the user's `locale`:

### index.js
```js
...

let locale = (navigator.languages && navigator.languages[0])
             || navigator.language
             || navigator.userLanguage
             || 'en-US';

ReactDOM.render(
  ...
);
```

Our `locale` variable first checks for `navigator.languages` and evaluates to `navigator.languages[0]` if that exists.

"The first value in the array is typically the preferred language of the user"

If `navigator.languages` isn't supported by the browser, `locale` evaluates to `navigator.language`. If that isn't supported by the browser, `locale` evaluates to `navigator.userlanguage`, and if that isn't supported by the browser, `locale` will finally evaluate to `en-US`.

Now that `IntlProvider` is imported, we'll wrap our `App` component with it.

### index.js
```js
...

let locale = (navigator.languages && navigator.languages[0])
             || navigator.language
             || navigator.userLanguage
             || 'en-US';

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages[locale]}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
); 
```

We first pass in a `locale` prop and provide it with our `locale` variable, which tells react-intl to use the locale as defined by our variable.

Then, we tell our `IntlProvider` what messages to use by passing in a `messages` prop with value `messages[locale]`, as we want the messages associated with the user's defined `locale`.


## Resources 📖
- [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html)
- [Migrate to using native Intl APIs - react-intl](https://formatjs.io/docs/react-intl/upgrade-guide-3x/#migrate-to-using-native-intl-apis)
- [ISO Language Codes](https://www.andiamo.co.uk/resources/iso-language-codes/)