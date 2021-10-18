 # 02. Use react-axe to Audit Accessibility Issues at Runtime during Development

**[📹 Video](https://egghead.io/lessons/react-use-react-axe-to-audit-accessibility-issues-at-runtime-during-development)**

**[💻 CodeSandbox](https://codesandbox.io/s/gallant-hugle-4xqre?from-embed)**


Install `react-axe` plugin:

`npm install --save-dev react-axe`

* To initialize the plugin, you'll have to add it to the file that starts your application (typically something like `app.js` or `index.js`).

* 👍Initialize it before rendering your first React component and make sure it runs only in development (to avoid performance overhead and console.logs in the production). 

```js
if (process.env.NODE_ENV !== 'production') {
    var axe = require('react-axe');
    // axe will be run 1s after a re-rendering
    // the forth argument is a custom config object
    axe(React, ReactDOM, 1000, config);
}
```

```js
var config = {
    rules: [
        {
            id: 'radiogroup',
            enabled: true
        }
    ]
};
```
* Any errors and warnings will be displayed in the browser developer console (at this time, the plugin works best with Chrome).

* Click on the provided link to learn more about the issue (severity level and which WCAGG standard you are breaking).
