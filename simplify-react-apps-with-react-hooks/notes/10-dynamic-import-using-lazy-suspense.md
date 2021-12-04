# [Dynamically Import React Components with React.lazy and Suspense](https://egghead.io/lessons/react-dynamically-import-react-components-with-react-lazy-and-suspense)

With React 16.6.0, [React Suspense](https://reactjs.org/docs/concurrent-mode-suspense.html) was officially released as a stable feature (with limited support for [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy)).
Suspense lets your components “wait” for something before they can render.
The React.lazy function lets you render a dynamic import as a regular component. This helps in code-splitting and lets you ship minimal JS code for the first time and let the components to render lazily when needed.

**Before**

```javascript
import OtherComponent from './OtherComponent';
```

**After**

```javascript
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

This will automatically load the bundle containing the OtherComponent when this component is first rendered.

Coming to our code, we are already using `react-loadable` library which does the same thing.
What we are doing here is that we are dynamic importing our Home and User pages so that we can leverage [code-splitting](https://reactjs.org/docs/code-splitting.html) and make our users download less of our application all at once. Here we are passing the pages to Reach Router and when the right url path hits, the component is loaded and rendered.

**src/index.js**

```javascript
const Home = loadable({
  loader: () => import('./screens/home'),
  loading: LoadingFallback,
})

const User = loadable({
  loader: () => import('./screens/user'),
  loading: LoadingFallback,
})

function App() {
  return (
    <ThemeProvider>
      <GitHubContext.Provider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Router>
            <Home path="/" />
            <User path="/:username" />
          </Router>
        </ErrorBoundary>
      </GitHubContext.Provider>
    </ThemeProvider>
  )
}
```

React has now got the 
We can get rid of the `react-loadable` import and refactor this to

```javascript
const Home = React.lazy(() => import('./screens/home'))
const User = React.lazy(() => import('./screens/user'))
```

If we save this and go over here, we're going to get a big error that says "A component suspended while rendering but no fallback UI was specified." We need to add a Suspense fallback component higher in the tree to provide a loading indicator or some sort of placeholder to display.
<p align="center"><img src="https://res.cloudinary.com/dg3gyk0gu/image/upload/w_1200,c_limit/v1543803154/transcript-images/react-dynamically-import-react-components-with-react-lazy-and-suspense-component-suspended-error.jpg" width="900"></p>

We are going to pull in Suspense from "react" and wrap our component tree with Suspense just one level down the `<ErrorBoundary/>`.

```javascript
<ThemeProvider>
    <GitHubContext.Provider>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Suspense
        fallback={
            <LoadingMessagePage>Loading Application</LoadingMessagePage>
        }
    >
        <Router>
            <Home path="/" />
            <User path="/:username" />
        </Router>
    </Suspense>
    </ErrorBoundary>
    </GitHubContext.Provider>
</ThemeProvider>
```

If an error is thrown in any of the pages, Suspense will throw it and ErrorBoundary will catch it.

**Summarizing what we did:**
We're importing `Suspense` and using `React.lazy`. Then we provide our Suspense inside of our `<ErrorBoundary>`, somewhere above where we're using React.lazy components and we're providing a fallback for the `<LoadingMessagePage>` of Loading Application.
