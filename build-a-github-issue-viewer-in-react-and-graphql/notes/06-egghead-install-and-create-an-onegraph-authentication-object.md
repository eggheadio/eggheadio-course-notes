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
  appId: APP_ID,
})
```

## Helpful Links 🤔

[OneGraph-auth docs](https://www.onegraph.com/docs/)
