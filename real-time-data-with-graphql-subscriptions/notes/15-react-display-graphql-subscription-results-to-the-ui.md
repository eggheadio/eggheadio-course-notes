# Display GraphQL Subscription Results to the UI

**[📹 Video](https://egghead.io/lessons/react-display-graphql-subscription-results-to-the-ui)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

## Summary

Webhooks allow services to subscribe to events on other services. It can be thought of as a reverse API request, where the subscriber provides a URL to send a request to when an event occurs. `OneGraph` uses webhooks to subscribe to GitHub events - this requires us to explicitly allow non-admin subscriptions for the repo.

## Webhooks

Webhooks are a way for different applications or APIs to subscribe to events on other services. The subscriber says "I want to know anytime this type of event happens, and here is my URL to let me know". Anytime a new event occurs the subscriber receives a request on that URL - usually a HTTP POST request - with the attached event data - usually in the `body` of the request.

This is kind of like a reverse API request. Instead of calling an API to get data, you are providing a URL for the API to call when a new event occurs.

OneGraph uses webhooks to subscribe to GitHub events. This requires the user to be an admin of the repository being subscribed to. Thankfully, OneGraph gives us the ability to allow non-admin subscriptions to particular repos. This option is at the bottom of the `Subscriptions` page.

## Helpful Links

[🤔 GitHub docs on WebHooks](https://docs.github.com/en/free-pro-team@latest/developers/webhooks-and-events/about-webhooks)

[What are webhooks? Zapier article](https://zapier.com/blog/what-are-webhooks/)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-reduce-a-graphql-subscription-stream-into-a-collection)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-use-a-graphql-query-and-subscription-together-to-fetch-the-history-and-current-comments)
