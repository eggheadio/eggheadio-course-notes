# Naming Conventions for Fields with GraphQL Aliases in Mind

- 📹 [Video Link](https://egghead.io/lessons/graphql-naming-conventions-for-fields-with-graphql-aliases-in-mind)
- 💻 [Code Link](https://github.com/nikgraf/designing-graphql-schemas-course/tree/master/lesson06)

### Aliases & Enums

- 💰 _An [alias](https://www.apollographql.com/docs/resources/graphql-glossary/#alias) is an alternative name given to the result of a field to avoid conflicts during data fetching._

  - 📄 [How to use GraphQL aliases](https://atheros.ai/blog/how-to-use-graphql-aliases)

```graphql
{
  admins: users(role: "admin") {
    id
    firstname
    lastname
  }
  managers: users(role: "manager") {
    id
    firstname
    lastname
  }
}
```

👆 `admins` and `managers` are aliases in the example query above.

- 💰 _An [Enum](https://www.apollographql.com/docs/apollo-server/schema/scalars-enums/) is similar to a [scalar type](git push --set-upstream origin schemaDesignNikGraf), but it can only be one of several values defined in the schema. Enums are most useful in a situation where the user must pick from a prescribed list of options. Additionally enums improve development velocity, since they will auto-complete in tools like GraphQL Playground._

Enum example:

```graphql
enum AllowedColor {
  RED
  GREEN
  BLUE
}
```
