[Video Link](https://egghead.io/lessons/graphql-filter-a-graphql-query-result-using-arguments)

## Summary

In this lesson, we will filter a list of pets by status.

## Notes

We've gotten total pets. Total pets tells us that there are 25 pets that are part of our library, but I might want to filter this list to see just the pets that are available or just the pets that are checked out.

To do this, I'm going to add a GraphQL argument. There's an argument on the `totalPets` query called `status`. This will take in either available or checked out. If we add Available, we'll see that there are 20 available pets.

```graphql
query {
  totalPets(status: AVAILABLE)
  allPets {
    name
    weight
    category
    photo {
      thumb
      full
    }
  }
}
```

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1563555709/transcript-images/filter-a-graphql-query-result-using-arguments-available-pets.png)

If we change this to CHECKEDOUT, we'll see that the total checked out pets is five.

```graphql
query {
  totalPets(status: CHECKEDOUT)
  allPets {
    name
    weight
    category
    photo {
      thumb
      full
    }
  }
}
```

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1563555709/transcript-images/filter-a-graphql-query-result-using-arguments-checked-out-pets.png)

If we look at the totalPets query in the schema, we'll see that it has this optional status argument.

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1563555708/transcript-images/filter-a-graphql-query-result-using-arguments-pets-query.png)

The value that I need to send is for `PetStatus`. `PetStatus` is an enum, either available or checked out. Now as we saw before, `totalPets` will work without a filter, but if I do provide a status filter, this will filter the list based on the value that I provide for `PetStatus`.

## Personal Take

When we start working with variables, we need to do three things:

- 1. Replace the static value in the query with `$variableName`
- 2. Declare `$variableName` as one of the variables accepted by the query
- 3. Pass `variableName`: value in the separate, transport-specific (usually JSON) variables dictionary
