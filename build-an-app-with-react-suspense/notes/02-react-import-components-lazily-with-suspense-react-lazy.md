# Import Components Lazily with Suspense React.lazy

**[📹 Video](https://egghead.io/lessons/react-import-components-lazily-with-suspense-react-lazy)**

We'll start with a simple task, import a component, but using Suspense.

Here is a [📄 blog post](https://reactjs.org/docs/code-splitting.html#reactlazy) that mention code splitting by using React.Suspense


* First change the import statement to use it as a function. The result of this import will be assigned to a `const`

```javascript
const PokemonDetail = import("./pokemon-detail")
```
* This dynamic import returns a Promise
* As a [📄 Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), it will have pending, error and success status
* The Promise need to be wrapped by some function that manage the different states and communicate with Suspense boundaries. This function is `React.lazy`
* `React.lazy` expectes a function and to simplify you can use an [📄arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
```javascript
const PokemonDetail = React.lazy(() => import("./pokemon-detail"))
```

At this moment the app fails but React shows an error with a clear indication about what needs to be done. Add a Suspense component higher in the tree and provide a fallback component as loading indicator or placeholder.

```jsx
<React.Suspense fallback="loading pokemon">
    <PokemonDetail />
</React.Suspense>
```


By using `React.lazy` and `React.Suspense` you will have at least two source files or chunks, one that holds the code of the main code and another that only have the code for the Detail component, this is known as code splitting, an improvement that helps to minify the amount of javascript that need to be parsed and executed on the first load.


In relation with the loading indicator, is hard too see it because of the speed of the loading process but [🛠 React dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es) offers a good way to emulate the suspense behavior (min [📄 03:24](https://egghead.io/lessons/react-import-components-lazily-with-suspense-react-lazy#t=204)) 

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-build-an-app-with-react-suspense-intro-and-setup)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-catch-errors-with-a-react-error-boundary-component)
