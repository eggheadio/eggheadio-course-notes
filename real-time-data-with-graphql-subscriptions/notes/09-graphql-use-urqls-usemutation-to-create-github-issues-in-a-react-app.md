# Use Urqls useMutation to Create Github Issues in a React App

**[📹 Video](https://egghead.io/lessons/graphql-use-urqls-usemutation-to-create-github-issues-in-a-react-app)**

**[💻 Course repo](https://github.com/theianjones/egghead-graphql-subscriptions)**

## Summary

`useMutation` is a hook we can use to send mutations to our GraphQL endpoint. It's interface is very similar to `useQuery`. We pass it a mutation string, and it returns a `result` and `executeMutation` function that we can call and pass the mutation variables.

## useState

In order to submit comments from our application, we need an `input` field. This requires us to keep a track of what the user has typed. Using the `useState` hook allows us to save the user's input in a variable, that we can pass across to our `NewComment` mutation.

## useMutation

`urql` provides us another handy hook for dealing with mutations called `useMutation`. Similarly to `useQuery`, we pass it our GraphQL mutation string and it gives us back a result and a function to trigger the mutation.

```js
const [result, executeMutation] = useMutation(MUTATION_STRING)
```

> Note: `useMutation` does not trigger the mutation as soon as our component is mounted. This would not make sense with mutations, as we need to get the input from the user first.

The `executeMutation` function allows us to trigger the mutation, once the user has inputted their comment and clicked submit. This function takes an object of key value pairs for our mutation variables.

🤔 Similarly to `useQuery`, the `result` variable contains `data`, `fetching` and `error` values, that we can use to determine the state of our mutation.

## Helpful Links

[🤔 React docs - Forms](https://reactjs.org/docs/forms.html)

[🤔 React docs - useState hook](https://reactjs.org/docs/hooks-state.html)

[urql docs - Mutations](https://formidable.com/open-source/urql/docs/basics/mutations/)
---

📹 [Go to Previous Lesson](https://egghead.io/lessons/graphql-use-a-graphql-mutation-to-create-a-github-issue-comment)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-style-our-input-component-with-css-injs)
