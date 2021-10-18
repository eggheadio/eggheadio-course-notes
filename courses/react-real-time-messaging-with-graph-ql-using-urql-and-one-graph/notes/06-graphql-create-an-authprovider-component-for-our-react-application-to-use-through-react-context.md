# 06. Create an AuthProvider component for our react application to use through React Context

**[📹 Video](https://egghead.io/lessons/egghead-create-an-authprovider-component-for-our-react-application-to-use-through-react-context?pl=build-a-github-issue-viewer-in-react-and-graphql-be5a)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

## Summary
We can use React Context to build an `AuthProvider` component to handle our auth logic. Probably best to just copy the [AuthContext.js](https://github.com/theianjones/egghead-graphql-subscriptions/blob/master/04-setUpAuthenticationWithUrql/src/contexts/AuthContext.js) file from the [course repo](https://github.com/theianjones/egghead-graphql-subscriptions), as it is quite lengthy. Basically what this file does is:

1. Creates a new `onegraph-auth` instance
2. Sets the headers for our authenticated GraphQL requests
3. Provides convenient login and logout functions

## Helpful Links 🤔

[OneGraph-auth docs](https://www.onegraph.com/docs/)

[React Context](https://reactjs.org/docs/context.html)