# 6 - Configure Tailwind Purging in a Nx Workspace

[Video Link]()

<TimeStamp start="0:36" end="0:38">

`yarn run build site` 

</TimeStamp>

<TimeStamp start="1:08" end="1:12">

Optimizing for production [documentation](https://tailwindcss.com/docs/optimizing-for-production)

</TimeStamp>

<TimeStamp start="4:00" end="4:06">

Inside our `tailwind.config.js` file we are going to add the following:

```jsx
const { join } = require('path');

const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
purge: [join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
...createGlobPatternsForDependencies(__dirname)],
}
```

</TimeStamp>





