[Video Link](https://egghead.io/lessons/graphql-reuse-graphql-selection-sets-with-fragments)

## Summary

In this lesson we learn how to use fragments.

## Notes

Fragments are selection sets that can be used across multiple queries. They allow us to refactor redundant selection sets, and they are essential when querying unions or interface types.

First we are going to query `allPets` and filter the results so we only get back available rabbits.

```graphql
query {
  allPets(category: RABBIT, status: AVAILABLE) {
    name
    weight
    category
    status
  }
}
```

To make this selection set reusable, we can use a fragment. A fragment is like a wrapper around several fields.

We are going to create a fragment called `PetDetails` which is on type `Pet`. We then copy and paste the fields from the previous `allPets` query inside the fragment.

Afterwards we can use spread syntax to push all of the pet details into the `allPets` query.

```graphql
query {
  allPets(category: RABBIT, status: AVAILABLE) {
    ...PetDetails
  }
}

fragment PetDetails on Pet {
  name
  weight
  category
  status
}
```

We are still able to send the query along with all of the fields. 🥳

We can adjust the fragment and add additional fields such as `photo`. You'll see that the data returned from the `allPets` query now includes a thumbnail.

```graphql
fragment PetDetails on Pet {
  name
  weight
  category
  status
  photo {
    thumb
  }
}
```

Now we're going to add on to the to query a little bit. We are going to add `petById` and pass in "C-1". We can also reuse `PetDetails`.

```graphql
query {
  petById(id: "C-1") {
    ...PetDetails
  }
  allPets(category: RABBIT, status: AVAILABLE) {
    ...PetDetails
  }
}
```

![alt text](https://i.ibb.co/8cfpKXv/scrnli-1-24-2020-2-23-48-PM.png)

We can also add additional fields along side of the fragment. Here we're going to add `inCareOf`, `name` and `username`.

```graphql
petById(id: "C-1") {
    ...PetDetails
    inCareOf {
      name
      username
    }
  }
```

We can now create another fragment for customer details. We specify that these fields come from the `Customer` type. We'll add `name` and `username` from `inCareOf` and push those fields into the query.

```graphql
query {
  petById(id: "C-1") {
    ...PetDetails
    inCareOf {
      ...CustomerDetails
    }
  }
  allPets(category: RABBIT, status: AVAILABLE) {
    ...PetDetails
  }
}

fragment CustomerDetails on Customer {
  name
  username
}
```

## Resources

- [GraphQL fragments explained (blog)](https://blog.logrocket.com/graphql-fragments-explained/)

- [How GraphQL Fragments Work (video)](https://www.youtube.com/watch?v=AAHR7eBKLU8)

- [How to query your schema with GraphQL fragments (blog)](https://atheros.ai/blog/how-to-query-your-schema-with-graphql-fragments)
