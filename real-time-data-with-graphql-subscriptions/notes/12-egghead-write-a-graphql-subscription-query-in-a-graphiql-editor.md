# Write a GraphQL Subscription Query in a Graphiql Editor

**[📹 Video](https://egghead.io/lessons/egghead-write-a-graphql-subscription-query-in-a-graphiql-editor)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

## Summary

Subscriptions are a way for our client to `subscribe` to particular events - such as a new comment on our GitHub issue. Subscriptions allow two-way communication between our client and server, as we are asking the server to notify our client whenever there is a new comment.

## Subscription

A subscription in GraphQL is similar to a magazine or newspaper subscription in real life. You say something like:

> "I care about this thing, so whenever a new edition comes out I want you to deliver it to my house."

Every time there is new content, the delivery person knocks on your door and you have a fresh copy in your hand!

GraphQL subscriptions work in a similar way, you tell it which events you would like to subscribe to - in the case of the video, new comments on this GitHub issue - and it will notify you whenever new data is available.

## Two-way communication

This requires a slight change in our mental model for how API requests and responses work. With our queries and mutations, we are calling our OneGraph API and it either gives us back the data, or does some mutation stuff and gives us back the data. At that point the communication between our application (the client) and OneGraph (the server) is over. This unidirectional communication is how HTTP requests work - the client makes a request and the server sends a response.

![Request and response model](../assets/request-response.gif)

With GraphQL subscriptions our client is asking the server to notify it whenever a particular thing happens - this could be immediately, or after a few seconds, days or even months. So the server is not only responding to a single request with a single response, but has a direct connection with the client that it can push data to a number of times. A common implementation of this kind of bidirectional communication is [Websockets](https://medium.com/@tfarguts/websockets-for-beginners-part-1-10796106e207).

![Websockets model](../assets/websockets.gif)

## OneGraph

Again, OneGraph abstracts away this complexity and allows us to build up a GraphQL subscription, and confirm that we are receiving data whenever a new comment is added to our issue in GitHub.

## Helpful Links 🤔

[OneGraph Documentation - Subscriptions](https://www.onegraph.com/docs/subscriptions.html)

[Websockets article](https://medium.com/@tfarguts/websockets-for-beginners-part-1-10796106e207)

[The Net Ninja - What are WebSockets? video](https://www.youtube.com/watch?v=vQjiN8Qgs3c)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-extract-a-view-component-from-our-commentquery-component)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-write-a-subscription-graphql-query-with-urql)
