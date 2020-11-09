# Extract a view component from our CommentQuery Component

**[📹 Video](https://egghead.io/lessons/egghead-extract-a-view-component-from-our-commentquery-component)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

## Summary

Currently our `<Comments />` component is responsible for both fetching data, and rendering the result - these are two separate concerns. It is good practice to break up components into small reusable, single responsibility chunks - in this case, one component responsible for fetching the data, and the other describing how that data should actually look. Whenever our components rely on external data, we need to wrap the rendering logic in an `if` statement (or guard), to make sure we have the data we need to render.

## Refactoring Components

It is a good idea to separate your React components into small, single responsibility chunks. In this video we are separating the data fetching logic from the rendering logic. This means we could reuse the data fetching logic somewhere else, and swap out the rendering component to display it in a different way, or visa versa.

When we build a component solely responsible for rendering data that is passed to it, it is a good idea to add a guard statement to ensure you have the data you need to render. In the video example this is done by checking whether `comments` are truthy, and contain at least one `comment`.

```js
if (!comments || comments.length === 0) {
  return null
}
```

This ensures that anything after this line can assume that `comments` exists, is an array, and has at least one `comment`.

🤔 Additionally, we could abstract the data fetching logic into it's own reusable wrapping component using the [render props](https://reactjs.org/docs/render-props.html) or [higher order component](https://reactjs.org/docs/higher-order-components.html) patterns, or abstract this logic into its own [custom hook](https://reactjs.org/docs/hooks-custom.html).

## Helpful Links 🤔

[Render Props pattern](https://reactjs.org/docs/render-props.html)

[Higher Order Component pattern](https://reactjs.org/docs/higher-order-components.html)

[Custom React Hooks](https://reactjs.org/docs/hooks-custom.html)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-style-our-input-component-with-css-injs)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-write-a-graphql-subscription-query-in-a-graphiql-editor)
