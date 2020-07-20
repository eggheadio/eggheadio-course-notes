[Video Link](https://egghead.io/lessons/graphql-query-a-graphql-api-s-types-with-introspection-queries)

## Summary

In this lesson we will learn about introspection and write queries that will return information about the pet library schema.

## Notes

Up until now, we have used the schema tab to look at all of the available queries and types on the API. It's possible to use the query language itself to look at (or introspect) the schema.

The first thing we're going to query is `__schema` which will show us the schema for this server. We're going to query all of the types and get their name, kind and description.

```graphql
# Write your query or mutation here
query {
  __schema {
    types {
      name
      kind
      description
    }
  }
}
```

When we click play we see the response with all of the type data.

![alt text](https://i.ibb.co/gt2SDzv/scrnli-1-27-2020-6-10-47-PM.png)

Now we can do the same for the Customer type. We can query `__type` with type name of "Customer".

To find out which fields are available on Customer, we can query `fields` and get back the name and description for each field.

```graphql
query Customer {
  __type(name: "Customer") {
    fields {
      name
      description
    }
  }
}
```

When we click play, we see that we get back a list of all the available fields that are on type `Customer`.

![alt text](https://i.ibb.co/PFCf7sc/scrnli-1-27-2020-6-21-09-PM.png)

We can also write a query to find out which queries are available on this API.

We query `__schema` -> `queryType` -> `fields`. `fields` is all of the fields available on that type. We want to get back the field name and description.

```graphql
query AvailableQueries {
  __schema {
    queryType {
      fields {
        name
        description
      }
    }
  }
}
```

In the response you will see all of the queries that you see in the schema tab!

The last query is for the pet interface. Here we will query data for the `Pet` interface. We will request the kind, name and description.

```graphql
query InterfaceTypes {
  __type(name: "Pet") {
    kind
    name
    description
  }
}
```

To see all of the different implementations of the interface, add `possibleTypes` to the query.

```graphql
query InterfaceTypes {
  __type(name: "Pet") {
    kind
    name
    description
    possibleTypes {
      name
      kind
      description
    }
  }
}
```

We can see that we get back 4 implementations: `Cat`, `Dog`, `Rabbit` and `Stingray`.

![alt text](https://i.ibb.co/rs7x8Tv/scrnli-1-27-2020-6-37-29-PM.png)

## Resources

- [Introspection (official website)](https://graphql.org/learn/introspection/)

- [Introspection in GraphQL (blog)](https://medium.com/@ignaciochiazzo/introspection-in-graphql-a5a5bd744a66)
