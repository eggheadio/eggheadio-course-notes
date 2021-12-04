[Video Link](https://egghead.io/lessons/graphql-send-a-nested-graphql-query)

## Summary

In this lesson, we’ll take a closer look at the Photo type and how it can be used to store more complex data types.

## Notes

The photo type has fields for full-size image and thumbnail-size image, both of which are strings. Each pet would have a photo.

```graphql
query {
  allPets {
    name
    weight
    category
    photo
  }
  totalPets
}
```

If I query `photo`, it gives this error message:

```bash
"Field photo of type photo must have a selection of subfields."
```

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1563555709/transcript-images/send-a-nested-graphql-query-error-message.png)

Because photo is an object, we need to add another selection set here.

<TimeStamp start="0:35" end="0:45">

```graphql
photo {
  thumb
  full
}
```

</TimeStamp>

This allows us to have some flexibility when we are sending a query.

A photo may have more than one field associated with it. We can request just the fields that we want with our GraphQL query.

## Personal Take

In a system like REST, you can only pass a single set of arguments, the query parameters and URL segments in your request.

But in GraphQL, every field and nested object can get its own set of arguments, making GraphQL a complete replacement for making multiple API fetches.

You can even pass arguments into scalar fields, to implement data transformations once on the server, instead of on every client separately.

## Resources

- [Queries and Mutations (official website)](https://graphql.org/learn/queries/)
