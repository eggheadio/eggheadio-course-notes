[Video Link](https://egghead.io/lessons/graphql-reuse-graphql-selection-sets-with-fragments)

## Summary

In this lesson we learn how to use fragments.

## Notes

<TimeStamp start="0:00" end="0:01">

Fragments are selection sets that can be used across multiple queries. They allow us to refactor redundant selection sets, and they are essential when querying unions or interface types.

</TimeStamp>

<TimeStamp start="0:02" end="0:19">

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

</TimeStamp>

<TimeStamp start="0:28" end="0:43">

To make this selection set reusable, we can use a fragment. A fragment is like a wrapper around several fields.

We are going to create a fragment called `PetDetails` which is on type `Pet`. We then copy and paste the fields from the previous `allPets` query inside the fragment.

</TimeStamp>

<TimeStamp start="0:44" end="0:49">

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

</TimeStamp>

<TimeStamp start="0:50" end="0:53">

We are still able to send the query along with all of the fields. 🥳

</TimeStamp>

<TimeStamp start="0:54" end="1:04">

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

</TimeStamp>

<TimeStamp start="1:05" end="1:19">

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

</TimeStamp>

<TimeStamp start="1:20" end="1:30">

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

</TimeStamp>

<TimeStamp start="1:31" end="1:52">

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

</TimeStamp>

## Resources

- [GraphQL fragments explained (blog)](https://blog.logrocket.com/graphql-fragments-explained/)

- [How GraphQL Fragments Work (video)](https://www.youtube.com/watch?v=AAHR7eBKLU8)

- [How to query your schema with GraphQL fragments (blog)](https://atheros.ai/blog/how-to-query-your-schema-with-graphql-fragments)
