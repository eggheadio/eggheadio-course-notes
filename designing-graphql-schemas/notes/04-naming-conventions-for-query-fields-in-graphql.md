# Naming Conventions for Query Fields in GraphQL

- 📹 [Video Link](https://egghead.io/lessons/graphql-naming-conventions-for-query-fields-in-graphql)
- 💻 [Code Link](https://github.com/nikgraf/designing-graphql-schemas-course/tree/master/lesson03)

💰 _An important take away is that naming fields can have quite an impact on future schema changes, and being very explicit early on will make things easier later on._

- 🔑 Structuring your data right, will take you a long way
  - Instead of naming a field as `likes` that is going to be of type `String` or `Int`, name it `likesCount`. Being explicit will avoid confusions

Not advised ❌

```graphql
type Post {
  likes: Int
  author: String
}
```

Advised ✅

```graphql
type Post {
  likeCount: Int
  author: String
}
```

or ✅

```graphql
type Likes {
  count: Int
  ...
} 👈 // if type should include more describing properties

type Post {
  likes: Likes
  author: String
}
```

Example:

```graphql
const typeDefs = gql`
  type Product {
    name: String
    description: String
    image: String
}
```

The problem with the above 👆 is that if we want to further describe the `image` property we would have to add additional fields parallel to it or turn it into an object, since it is of type `String`.

Ideally, in order to create the least impact in the long run, we would want something which is more extensible. We can achieve this by creating a type for the image as such:

```js
const typeDefs = gql`
  type Image {
    url: String
    description: String
    thumbnailUrl(width: Int, height: Int): String
  } 👆 // create an Image type to describe it's properties

  type Product {
    name: String
    description: String
    image: Image 👈 // make image be of type Image
}
```

- 🔑 [Stack Overflow](https://stackoverflow.com/a/45170611) answer about naming best practices
