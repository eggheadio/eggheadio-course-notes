[Video Link](https://egghead.io/lessons/graphql-authenticate-a-user-with-a-graphql-mutation)

## Summary

In this lesson we learn how to authenticate a user using mutations.

## Notes

<TimeStamp start="0:00" end="0:16">

Mutations let you invoke backend functions from the client. Here we will use the `logIn` mutation to log in a user.

```graphql
mutation {
  logIn(username: "ep123", password: "pass")
}
```

</TimeStamp>

<TimeStamp start="0:17" end="0:31">

A type `LogInPayload` is returned from the `logIn` mutation. This is a custom object that returns both a customer and user token. We can use the token to validate that the user is authorized.

</TimeStamp>

<TimeStamp start="0:32" end="0:52">

When we send the `logIn` mutation, we have access to the customer details and token.

```graphql
mutation {
  logIn(username: "ep123", password: "pass") {
    customer {
      name
    }
    token
  }
}
```

</TimeStamp>

<TimeStamp start="0:53" end="1:06">

Once we provide the token in the HTTP headers, we are able to send queries that are only for authorized users.

![alt text](https://i.ibb.co/ZxCrLvc/scrnli-1-23-2020-6-04-46-PM.png)

</TimeStamp>

<TimeStamp start="1:07" end="1:47">

Now we are able to make the query `me`, and get back data for the logged in user.

```graphql
query Me {
  me {
    name
  }
}
```

![alt text](https://i.ibb.co/F3t6RpH/scrnli-1-23-2020-6-05-11-PM.png)

</TimeStamp>

## Resources

- [Mutations (official website)](https://graphql.org/learn/queries/#mutations)
