# Adding React to a Vanilla Parcel Project

**[📹 Video](https://egghead.io/lessons/egghead-adding-react-to-a-vanilla-parcel-project)**

Until now all of the work has been tested by loggin content to the console, but, is not that useful.
We were building tools that we can use to create complex interactions, so in this lesson will will introduce the use of React to show some goods into the UI.

The examples here are using [Parcel](https://parceljs.org/getting_started.html) as the tool to bundle the code, live reload and serve the files. 



The first step is to organize our code, starting to move all of the operators to it's own module.



The reason to include the use of a view library as React is to solve one of the challenges that appears when rendering content into the DOM. There is a need to compare different state of the UI to, for example, decide if a listener need to be added again or not. All of the view libraries out there solve this problem with different techniques.

Since the project is using Parcel, add React to it is straigtforward, head to [the recipe page](https://parceljs.org/recipes.html) on parcel site and follow the instructions there to install the dependencies required to run a react project with it.

```bash
npm install --save react
npm install --save react-dom
npm install --save-dev parcel-bundler
```

After this, you can start working with React. Just import React into your `index.js` file and do the basic setup:

* import React library
* import the render method from `react-dom` : This is the method required to output the react content into the DOM
* create an App and render it into some element in the HTML

```javascript
import React from 'react'
import { render } from 'react-dom'
let App = () => <div>Hello from React</div>
render(<App />, document.querySelector('#root'))
```

Now update your `index.html` file to include the `#root` element, and add a little snippet that will remove some non-required messages related with react dev tools. This messages are not required for the lesson scope only since the use of React Dev Tools is a good idea in development of an app.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./styles.css" />
    <script>
      __REACT_DEVTOOLS_GLOBAL_HOOK__ = {
        supportsFiber: true,
        inject: function () {},
        onCommitFiberRoot: function () {},
        onCommitFiberUnmount: function () {},
      }
    </script>
  </head>

  <body>
    <div id="root"></div>
    <script src="src/index.js"></script>
  </body>
</html>
```

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/adding-react/index.html)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-map-a-sequence-based-on-values)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-create-a-broadcaster-in-react-with-usestate-and-useeffect-hooks)

