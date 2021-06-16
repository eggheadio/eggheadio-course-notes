[Video Link](https://egghead.io/lessons/graphql-query-lists-of-multiple-types-using-a-union-in-graphql)

## Summary

In this lesson we learn about unions and how to write queries that obtain a list of multiple types.

## Notes

In the refactored pet library there are some more queries that we haven't had a look at yet, `familyPets` and `exoticPets`.

If you open up the schema and click on `familyPets`, you will see some helpful documentation that says `"This query returns a list of Family Pets, either a Cat or Dog."`

![alt text](https://i.ibb.co/GFGfLQN/scrnli-1-27-2020-9-48-10-AM.png)

Another useful data structure when working with GraphQL is a `union`. 

<TimeStamp start="0:22" end="0:27">

Use a union to return lists of multiple types.

</TimeStamp>

![alt text](https://i.ibb.co/vVm1FRF/scrnli-1-27-2020-9-52-17-AM.png)

Unions don't share any fields, so if we try to query the `name` field, we will get an error.

```
"Cannot query field \"name\" on type \"FamilyPet\". Did you mean to use an inline fragment on \"Pet\", \"Cat\", or \"Dog\"?"
```

![alt text](https://i.ibb.co/zhnjPQ9/scrnli-1-27-2020-9-52-38-AM.png)

<TimeStamp start="1:01" end="1:30">

If we want to query additional pet data, we can use inline fragments.

```graphql
query {
  familyPets {
    __typename
    # This queries cat specific data
    ... on Cat {
      name
      sleepAmount
    }
    # This queries dog specific data
    ... on Dog {
      name
      good
    }
  }
}
```

</TimeStamp>

We will see that the error now goes away, and we get back out data. 🥳

## Resources

- [Union types (official website)](https://graphql.org/learn/schema/#union-types)
