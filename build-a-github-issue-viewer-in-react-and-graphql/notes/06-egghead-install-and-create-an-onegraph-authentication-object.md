# 06. Install and create an OneGraph authentication object

**[📹 Video](https://egghead.io/lessons/egghead-install-and-create-an-onegraph-authentication-object?pl=build-a-github-issue-viewer-in-react-and-graphql-be5a)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**



## Authentication

The last thing we need to implement in order to fetch data from our services is authentication. `OneGraph` provides a package called [onegraph-auth](https://www.onegraph.com/docs/) that we can import into our project.

```bash
yarn add onegraph-auth
```

We can create a new auth instance by passing `onegraph-auth` our `OneGraph` `appId`.

```js
// src/utils/auth.js

import OneGraphAuth from 'onegraph-auth'

export const auth = OneGraphAuth({
  appId: 'replace-with-app-id-from-onegraph',
})
```

Now we can use React Context to build an `AuthProvider` component to handle our auth logic. Probably best to just copy the [AuthContext.js](https://github.com/theianjones/egghead-graphql-subscriptions/blob/master/04-setUpAuthenticationWithUrql/src/contexts/AuthContext.js) file from the [course repo](https://github.com/theianjones/egghead-graphql-subscriptions), as it is quite lengthy. Basically what this file does is:

1. Creates a new `onegraph-auth` instance
2. Sets the headers for our authenticated GraphQL requests
3. Provides convenient login and logout functions

## 🤔 React Context

[React Context](https://reactjs.org/docs/context.html) is a way that we can share global variables to any components in our React application. Since we want to be able to use our auth logic multiple places in our application, we can encapsulate this in one `Context` and share it with other components by wrapping the root of our application in the `AuthProvider`.

```js
// src/index.js

// other imports
import {auth} from './utils/auth'
import {AuthProvider} from './contexts/AuthContext'

const client = createClient({
  url: 'replace-with-graphql-endpoint-from-onegraph',
  fetchOptions: {
    headers: auth.authHeaders(),
  },
})

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider auth={auth}>
      <Provider value={client}>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
```

Now any components that need to implement authentication logic - such as logging into GitHub - can consume the `AuthContext`.

```js
// src/App.js

// other imports
import {AuthContext} from './contexts/AuthContext'

function App() {
  // we can destructure any values exposed in the AuthProvider
  const {login, status} = React.useContext(AuthContext)

  // before we return our component markup
  // check if authenticated to github
  // if not display a login button

  if (!status || !status.github) {
    return <button onClick={() => login('github')}>Log in with GitHub</button>
  }
}
```

## Helpful Links 🤔

[OneGraph-auth docs](https://www.onegraph.com/docs/)

[React Context](https://reactjs.org/docs/context.html)