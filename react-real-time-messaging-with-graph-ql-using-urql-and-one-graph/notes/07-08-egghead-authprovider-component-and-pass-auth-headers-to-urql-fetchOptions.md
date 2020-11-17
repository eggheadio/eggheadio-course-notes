# 07 08 Egghead Authprovider Component And Pass Auth Headers To Urql Fetch Options

**[📹 07 Video](https://egghead.io/lessons/egghead-wrap-our-react-application-in-our-authprovider-component?pl=build-a-github-issue-viewer-in-react-and-graphql-be5a)**

**[📹 08 Video](https://egghead.io/lessons/egghead-pass-authorization-headers-to-our-requests-through-urql-s-fetchoptions?pl=build-a-github-issue-viewer-in-react-and-graphql-be5a)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

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