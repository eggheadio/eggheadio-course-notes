# 18. Write a Subscription GraphQL Query with Urql

**[📹 Video](https://egghead.io/lessons/react-write-a-subscription-graphql-query-with-urql)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

## Summary

The `onegraph-subscription-client` allows us to add the subscription logic to our `OneGraph` client. The `useSubscription` hook allows our application to subscribe to events from `OneGraph`. In the case of this video, anytime a new comment is added to our GitHub issue, the `useSubscription` result is updated with the new data. This allows us to build complex real time applications, that subscribe to events on external services. Very cool!

## OneGraph

OneGraph have published a package called `onegraph-subscription-client` to make subscriptions super simple.

```bash
yarn add onegraph-subscription-client
```

Again, we need to create a new subscription client at the root of our application.

```js
// src/index.js

// other imports
import {SubscriptionClient} from 'onegraph-subscription-client'

const subscriptionClient = new SubscriptionClient(
  'replace-with-app-id-from-onegraph',
  {oneGraphAuth: auth},
)
```

Next we need to extend our `urql` import statement to include `defaultExchange` and `subscriptionExchange`, and pass them to our createClient statement.

```js
// src/index.js

import { /* other imports */, defaultExchanges, subscriptionExchange } from 'urql'

// subscription logic

const client = createClient({
  // previous options
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: (operation) => subscriptionClient.request(operation)
    })
  ]
})
```

Full `index.js` file should look something like this.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {
  createClient,
  Provider,
  defaultExchanges,
  subscriptionExchange,
} from 'urql'
import {CLIENT_URL, auth, APP_ID} from './utils/auth'
import {AuthProvider} from './contexts/AuthContext'
import {SubscriptionClient} from 'onegraph-subscription-client'

const subscriptionClient = new SubscriptionClient(APP_ID, {
  oneGraphAuth: auth,
})

const client = createClient({
  url: CLIENT_URL,
  fetchOptions: {
    headers: {...auth.authHeaders()},
  },
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: (operation) => subscriptionClient.request(operation),
    }),
  ],
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

## useSubscription

The `urql` package gives us another awesome hook for dealing with subscriptions - `useSubscription`. This takes an object parameter, with a `query` property - the subscription string we built in the `OneGraphiQL` explorer - and a `variables` property - for our dynamic values. It gives us back the `subscriptionResult`, which is automatically updated each time it new data is sent.

```js
const [result] = useSubscription({
  query: SUBSCRIPTION_STRING,
  variables: {
    // any dynamic values we need to provide the subscription
  },
})
```

🤔 Again, this `result` has different properties that we can use to determine the state.

- `data` contains the data sent from the subscription - it is `undefined` until we receive our first comment
- `error` contains any errors that have occurred
- `fetching` is always set to `true` as this is a live connection that can be updated any time.

## Helpful Links 🤔

[OneGraph Subscription Client - NPM](https://www.npmjs.com/package/onegraph-subscription-client)

[Urql documentation - Subscriptions](https://formidable.com/open-source/urql/docs/advanced/subscriptions/)
