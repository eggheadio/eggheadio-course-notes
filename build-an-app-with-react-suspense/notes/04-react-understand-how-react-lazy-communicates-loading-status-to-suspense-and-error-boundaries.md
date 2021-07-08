# Understand How React.lazy Communicates Loading Status to Suspense and Error Boundaries

**[📹 Video](https://egghead.io/lessons/react-understand-how-react-lazy-communicates-loading-status-to-suspense-and-error-boundaries)**

At this point we're using a dynamic import and Suspense to lazily load the PokemonDetail component. 

In this lesson you'll learn how to manage errors by using Error Boundaries to catch the error an show some nice message to the user.

Remember that the dynamic import function `import()` returns a [📄 Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that can be rejected, and that case an error can be shown.

To simulate this situation you can just pass `Promise.reject()` as the content of the callback function for `React.lazy` and see what happens in the app and in the console.

Error reporting in react is nice so is worth it to always check the console to see what React is saying about the issue.

In this case there are 3 errors, the second one is the one that interest the more since shows a stack trace and also a message that talks about [📄 Error Boundaries](https://reactjs.org/docs/error-boundaries.html)

This is the code for a basic Error Boundary

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```

and then implement it by wrapping the component that could be causing an error by using `<ErrorBoundary>` this will protect the application of the errored component but allowing the rest of the applicatoin to render.

Error Boundary is just a component so can take props, in this example the `fallback` prop is provided and then used to render a custom component or message inside the `ErrorBoundary` render method

Since this component is a class based one you can add default values for the props by using a static property.

```jsx
static defaultProps = {
    fallback: <div>Something went wrong</div>
}
```

Is common that an application just use one of this error boundaries so is a good practice to move it out of the main entry file to an external component.

🔑 Just remeber that by moving the code of a component to another file you need to add `React` into the module because of the just of `jsx` by just importing it and also don't forget to export the component in this case by just prepending the keywords `export default` to the class definition.

```jsx
import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```
---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-catch-errors-with-a-react-error-boundary-component)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-wrap-fetch-requests-to-communicate-pending-error-and-success-status-to-react-suspense)
