# 01. Set up ESLint to Audit Accessibility Issues in React

**[📹 Video](https://egghead.io/lessons/react-v2-00-a-beginners-guide-to-react-introduction?pl=a-beginners-guide-to-react-v2-6c4d)**


👍 Automate accessibility checks in React with an eslint plugin. 

To install both `eslint` and the accessibility plugin [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) run:

`npm install eslint eslint-plugin-jsx-a11y --save-dev`

Make sure to only add it to development dependencies.

Add the a11y plugin to your `.eslintrc.json` file.
You'll have to:
1. add the plugin to the plugins array
2. specify the rules

Example configuration:

```js
{
  "extends": [
    "react-app"
  ],
  "plugins": [
    "jsx-a11y"
  ],
  "rules": {
    // display a warning when images are missing alt text
    "jsx-ayy1/alt-text": "warn"
  }
}
```

* 🤔 Check [other supported rules](https://www.npmjs.com/package/eslint-plugin-jsx-a11y#supported-rules). 

* You can also extend an existing set of rules to either `strict` or `recommended` ([Differences between the two](https://github.com/evcohen/eslint-plugin-jsx-a11y#difference-between-recommended-and-strict-mode)).

```js
{
  "extends": [
    "react-app",
    "plugin": jsx-a11y/recommended
  ]
}
```

* To run it, you'll have to add a script to your `package.json` file.

```js
"scripts": {
  // useful if you have a test script
  "pretest": "npm run lint"
  // eslint command followed by directory your want to lint
  "lint": "eslint src"
},
```

* Any errors found will be displayed in your command line console.
