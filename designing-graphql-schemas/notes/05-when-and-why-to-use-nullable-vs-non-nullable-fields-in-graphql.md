# When and Why to use Nullable vs Non-nullable Fields in GraphQL

- 📹 [Video Link](https://egghead.io/lessons/graphql-when-and-why-to-use-nullable-vs-non-nullable-fields-in-graphql)
- 💻 [Code Link](https://github.com/nikgraf/designing-graphql-schemas-course/tree/master/lesson04)

🔑 GraphQL makes every field 💰[nullable](https://www.apollographql.com/blog/using-nullability-in-graphql-2254f84c4ed7/) by default.

- The fields whose types have an exclamation mark, `!`, next to them are **non-null fields**. These fields won't return a null value when you query them.

```js
type Post {
  author: String // 👈 can return null
}
```

```js
type Post {
  author: String! // 👈 does NOT return null
}
```

Some benefits for using `null` values:

- Making fields nullable was a conscious decision by the GraphQL team since many things can go wrong in the response. For example, the server responsible for a particular field might be down, and returning null might break the rest of the response at which point it would return a GraphQL error for the entire response.

- Granular authorization: different fields in a response might have different authorization requirements.

- When deprecating a field we can return `null` without introducing a breaking change
  - 💰 A field can be deprecated using the [@deprecated](http://spec.graphql.org/draft/#sec-Field-Deprecation) directive as deemed necessary by the application. This means it is still legal to query these fields, but the fields should be appropriately treated in the documentation and tooling.
