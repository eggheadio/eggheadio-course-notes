# Evolving a GraphQL Schema incl. Breaking Changes without affecting a Single User

- 📹 [Video Link](https://egghead.io/lessons/graphql-evolving-a-graphql-schema-incl-breaking-changes-without-affecting-a-single-user)
- 💻 [Code Link](https://github.com/nikgraf/designing-graphql-schemas-course/tree/master/lesson05)

### Scaling a GraphQL API

- 🔑 The focus should be on creating value as soon as possible

- In GraphQL there is no way to query for all fields automatically. If we want to have a field on the response, we have to define it explicitly in the response

```js
  type Image {
    url: String
    description: String
    thumbnailUrl(width: Int, height: Int): String
  }

  type Product {
    id: ID!
    name: String
    description: String
    image: String @deprecated(reason: "Use \`imageObject { url }\`.")
    imageObject: Image
  } // 👆  Add the depracted directive
  ...
```

Once all your potential users have been migrated to the latest version of your application, you can swap the `imageObject` and `image` return types

```js
  type Image {
    url: String
    description: String
    thumbnailUrl(width: Int, height: Int): String
  }

  type Product {
    id: ID!
    name: String
    description: String
    image: Image // 👈 swapped
    imageObject: Image @deprecated(reason: "Use \'image\'.") // 👈 swapped
  }
  ...
```
