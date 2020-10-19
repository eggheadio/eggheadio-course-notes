# Query Multiple Services with OneGraph GraphiQL Editor

**[📹 Video](https://egghead.io/lessons/graphql-query-multiple-services-with-onegraph-graphiql-editor)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

## Summary

`OneGraph` provides a single GraphQL endpoint that sits between our applications and the SaaS services we want to use. It aggregates these separate services together into a single graph and handles authenticating our applications requests.

## OneGraph

`OneGraph` aggregates a collection of SaaS (Software as a Service) products together into a single, consistent GraphQL endpoint. It also allows us to authenticate each service once, and then query or mutate data across all our services, without leaving GraphiQL.

Since most of these services require authentication or api keys to know who is making the request, we must first create an account and a new app. Navigate to the [OneGraph Dashboard](https://www.onegraph.com/dashboard) and create an app.

> Note: The app is a collection of services that you want to be able to query and mutate from your frontend or backend application. `OneGraph` will bundle these services up into one graph (no pun intended), to make interacting with these different services super simple. Each app can have its own unique collection of services, and its own graph.

`OneGraph` has a great collection of integrated services, that is constantly growing. You can check out all the supported services and start building queries in their [OneGraphiQL Explorer](https://www.onegraph.com/graphiql).

<!-- TODO! add a picture describing not 1gql vs 1gql -->

## Helpful Links

[OneGraph docs](https://www.onegraph.com/docs/intro.html)

[OneGraph dashboard](https://www.onegraph.com/dashboard)

[OneGraphiQL Explorer](https://www.onegraph.com/graphiql)

---

📹 [Go to Next Lesson](https://egghead.io/lessons/graphql-query-multiple-services-with-urqls-graphql-client)
