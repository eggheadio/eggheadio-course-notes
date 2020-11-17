# 03. Refactor commonly used variables into a utils file to be shared across our app

**[📹 Video](https://egghead.io/lessons/egghead-refactor-commonly-used-variables-into-a-utils-file-to-be-shared-across-our-app?pl=build-a-github-issue-viewer-in-react-and-graphql-be5a)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**


## Summary 

**Goal: Share Urls, Ids, and common strings throughtout the app**

When you have strings that need to be a specific, consistent pattern (think urls and Ids), you can export them as variables in a utils folder so you don't have to worry about typing them out across your app.

```js
// src/utils/auth.js

export const APP_ID = `9068d449-be97-4449-a4f0-d5c663a3e7dc`
export const CLIENT_URL = `https://serve.onegraph.com/graphql?app_id=${APP_ID}`
```

```js
// src/index.js

import {CLIENT_URL} from './utils/auth'

const client = createClient({url: CLIENT_URL})
```