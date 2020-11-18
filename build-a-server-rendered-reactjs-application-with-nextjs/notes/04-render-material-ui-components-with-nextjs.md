# Render Material-UI Components with Next.js

Now that we have our custom theme set up, we can start to use Material-UI components in our application.

Go ahead and create a new folder named `components` in our project, and create a new file named `header.js`.

We're going to import AppBar from the Material-UI library and use it in our `Header` component.

The goal right now is to create a simple header component with the following code:

```js
const Header = ({ title = "Next.js blogging application" }) => (
  <AppBar title={title} showMenuIconButton={false} />
);
```

At the bottom of the file we also want to make sure that the header component is the default export.

`export default Header`

With the header created, we want to use it in our application. In your `index.js` file, import the header into the file:

`import Header from '../components/header.js`

In order to use our theme, we also need to import our `withMUI` Higher Order Component (HOC):

`import withMui from '../shared/MUI/withMUI'`

At the bottom of the file, we want to wrap our exported component in the `withMui` Higher Order Component, because we want `withMui` to inject our custom styles into our application.

`export default withMui(Index);`
