[Video Link](https://egghead.io/lessons/graphql-renaming-fields-with-graphql-aliases)

## Summary

In this lesson, we’ll show the problem with naming collisions in GraphQL queries and how they can be solved with aliases.

## Notes

Our query is telling us how many pets are checked out, but I also want to see how many pets are available. I'm going to add the `totalPets` query to line two, and I'll add the status `Available` as an argument.

```graphql
query {
  totalPets(status: AVAILABLE)
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

If we try to hit play on this, we're going to see some errors returned.

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1563555709/transcript-images/renaming-fields-with-graphql-aliases-error.png)

If I scroll down a little further, we're going to see where this is happening, line two, column three, and line three, column three. We also see this little faint hit of red, letting us know that there's some sort of a problem.

We have a naming collision here. What we'll need to do is preface both of these queries with an alias. I can pick a new name for this field. I'll call it `available` and add a colon. Then I'll add `checkedOut` with a colon in front of that.

```graphql
query {
  available: totalPets(status: AVAILABLE)
  checkedOut: totalPets(status: CHECKEDOUT)
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

I can hit play, and now, I see that `available` and `checkedOut` are returned. The query is successful, and I've renamed these fields in our JSON response.

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1563555709/transcript-images/renaming-fields-with-graphql-aliases-queries-fiexed.png)

```graphql
query {
  available: totalPets(status: AVAILABLE)
  checkedOut: totalPets(status: CHECKEDOUT)
  total: totalPets
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

This will tell us that 25 total pets are part of the library, all bundled in the same query. Aliases can be added to any field, so I added them to top-level queries, like `totalPets`, before. If you wanted to add them to more nested fields, you could do so.

I could rename the photo field with an alias called `petPhoto`, and this is going to rename that in the response in all cases.

```
query {
  available: totalPets (status: AVAILABLE)
  checkedOut: totalPets (status: CHECKEDOUT)
  total: totalPets
  allPets {
    name
    weight
    category
    petPhoto {
      thumb
      full
    }
  }
}
```

## Personal Take

It's important to understand the difference between fragmetns and Aliases:

- Fragments let you construct sets of fields, and then include them in queries where you need to.
- Aliases - they let you rename the result of a field to anything you want.

## Resources

- [How to use GraphQl aliases (blog)](https://atheros.ai/blog/how-to-use-graphql-aliases)
