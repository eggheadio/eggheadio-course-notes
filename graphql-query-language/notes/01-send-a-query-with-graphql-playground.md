[Video Link](https://egghead.io/lessons/graphql-send-a-query-with-graphql-playground)

## Summary

In this lesson, we will send a query to obtain the total number of pets registered at the Pet Library.

## Notes

In this lesson, we send a query to obtain the total number of pets registered at the Pet Library.



When we go to this route `https://pet-library.moonhighway.com` a tool called GraphQL Playground will pop up in the browser.

**GraphQL Playground** is an in-browser IDE that lets you send queries to GraphQL endpoints.

With GraphQL, there's only one endpoint, so you need to specify the data that you want by writing a query on the left-hand side of the screen.

<TimeStamp start="0:26" end="0:35">

```graphql
query {
  totalPets
}
```

</TimeStamp>

When clicking play the data returned is JSON. It matches the shape of the response exactly. All of the fields are the same:

```json
{
  "data": {
    "totalPets": 25
  }
}
```

## Personal Take

<TimeStamp start="0:48" end="1:00">

GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

</TimeStamp>

## Resources

- [Introduction to GraphQL (official website)](https://graphql.org/learn/)

- [What is GraphQL? (video)](https://www.youtube.com/watch?v=VjXb3PRL9WI)

- [GraphQL? Here is what you need to know! (podcast)](https://syntax.fm/show/027/graphql-here-is-what-you-need-to-know)
