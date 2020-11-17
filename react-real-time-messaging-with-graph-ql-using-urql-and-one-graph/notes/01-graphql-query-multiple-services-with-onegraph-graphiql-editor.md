# 01. Query Multiple Services with OneGraph GraphiQL Editor

**[📹 Video](https://egghead.io/lessons/graphql-query-multiple-services-with-urqls-graphql-client?pl=build-a-github-issue-viewer-in-react-and-graphql-be5a)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

## Summary

`OneGraph` provides a single GraphQL endpoint that sits between our applications and third party services we might want to use. It aggregates these separate services together into a single GraphQL endpoint, and creates a consistent authentication flow for our application.

## Problem

Modern applications typically make several requests to third party services to handle isolated functionality - charging a card with Stripe, fetching tweets from Twitter, issues from GitHub etc. This requires your application to know how to talk to each of these individual services.

![React application making multiple API requests](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1603996029/transcript-images/graphql-query-multiple-services-with-onegraph-graphiql-editor-traditional-communication.png)

It also requires your application to speak to each of these services in their language of choice.

![React application making REST and GraphQL requests](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1603996029/transcript-images/graphql-query-multiple-services-with-onegraph-graphiql-editor-traditional-payloads.png)

`OneGraph` sits between your application requests and these services.

![React application using OneGraph to proxy requests](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1603996028/transcript-images/graphql-query-multiple-services-with-onegraph-graphiql-editor-onegraph-communication.png)

`OneGraph` exposes these services via a single GraphQL endpoint - meaning your application only needs to speak one language.

![React application only making GraphQL requests](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1603996029/transcript-images/graphql-query-multiple-services-with-onegraph-graphiql-editor-onegraph-payload.png)

## OneGraph

`OneGraph` aggregates a collection of SaaS (Software as a Service) products together into a single, consistent GraphQL endpoint. It also allows us to authenticate each service once, and then query or mutate data across all our services, without leaving GraphiQL.

Since most of these services require authentication or api keys to know who is making the request, we must first create a `OneGraph` account, and a new application. Navigate to the [OneGraph Dashboard](https://www.onegraph.com/dashboard) and create an app.

> Note: The app is a collection of services that you want to be able to query and mutate from your application. `OneGraph` will bundle these services up into one graph (no pun intended), to make interacting with these different services super simple. Each app can have its own unique collection of services, and its own graph.

`OneGraph` has a great collection of integrated services, that is constantly growing. You can check out all the supported services and start building queries in their [OneGraphiQL Explorer](https://www.onegraph.com/graphiql).

## Helpful Links 🤔

[OneGraph docs](https://www.onegraph.com/docs/intro.html)

[OneGraph dashboard](https://www.onegraph.com/dashboard)

[OneGraphiQL Explorer](https://www.onegraph.com/graphiql)
