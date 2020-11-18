# Implement a custom Material-UI theme on the server using a Higher-order component

We're going to want to create a folder to hold the files that contains the styles for our application. In your project directory, inside of the `shared` folder, create a folder titled `MUI`. Inside of the `MUI` folder, create a file named `withMUI.js`.

Here is the starter code for our Higher Order Component:

```js
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Head from 'next/head';
import {
  PRIMARY_COLOR,
  PRIMARY_COLOR_TWO,
  PRIMARY_COLOR_THREE,
  ACCENT_COLOR_ONE,
  ACCENT_COLOR_TWO,
  ACCENT_COLOR_THREE
} from './theme';

try {
  injectTapEventPlugin();
} catch (e) {
  // Can only be called once per application lifecycle
}

const withMaterialUI = ComposedComponent => {
  class HOC extends Component {

    render() {
      return (

          )
      }
   }
      return HOC;
}

export default withMaterialUI;
```

A higher order component (HOC) is a component that takes a component and adds additional functionality.

Since we're using Next.js, and will be rendering code from the server, we want to make sure that we are loading the same code on both the client and the server. This will be accomplished by using Next's `getInitialProps` hook.

📝 - You can read more about `getInitialProps` [here](https://nextjs.org/docs/api-reference/data-fetching/getInitialProps). Note that if you are using Next.js 9.3, it is recommended that you use `getStaticProps` or `getServerSideProps` because they provide you with more control over static generation and server side rendering.

Inside of our HOC class, we want to use `getInitialProps`:

```javascript
static async getInitialProps(ctx) {
      const { req } = ctx; // We are destructuring the request from the context object.
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent; // Here we're using a ternary expression to assign a value to userAgent depending on whether the request is coming from the client or the server.
      const subProps = await ComposedComponent.getInitialProps(ctx) // Defining a subProps constant will allow us to use getInitialProps with the component that we're passing into withMaterialUI

    }
```

Now we want to make sure that we're returning the `userAgent` and `subProps` from our call to `getInitialProps`.

```js
return {
  ...subProps,
  userAgent,
};
```

With this part complete, we can move on to setting up our custom Material UI theme. We are going to use the `getMuiTheme` that we imported previously.

Inside of the `render` of our `HOC` component we want to include the following:

```js
const { userAgent } = this.props;
    const Lato = 'lato, sans-serif';
    const muiTheme = getMuiTheme(
    {
        fontFamily: Lato,
        palette: {
            primary1Color: PRIMARY_COLOR,
            primary2Color: PRIMARY_COLOR_TWO,
            primary3Color: PRIMARY_COLOR_THREE,
            accent1Color: ACCENT_COLOR_ONE,
            accent2Color: ACCENT_COLOR_TWO,
            accent3Color: ACCENT_COLOR_THREE
        },
    },
    {
        userAgent
    }
```

With this, we are using `getMuiTheme` to create a new instance of the default theme, and then we are overriding some of the values with our custom font and colors.

Now, we want to utilize the `<MuiThemeProvider>` to wrap the component that will be passed into our `withMaterialUI` HOC.

Within the `return` of our `withMaterialUI` component, we are going to wrap the component that is being returned, as well as including additional information, such as importing the font from Google Fonts.

```js
return (
  <div>
    <Head>
      <title>Nextjs Blogger</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato"
        rel="stylesheet"
      />
    </Head>
    <MuiThemeProvider muiTheme={muiTheme}>
      <ComposedComponent {...this.props} />
    </MuiThemeProvider>
  </div>
);
```

Note how we are passing in `muiTheme` as a prop to the theme provider under the name `muiTheme`. Additionally, we are passing in props to the composed component. And with that, we are ready to continue building our application.
