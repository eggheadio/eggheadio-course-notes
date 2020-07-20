[Video Link](https://egghead.io/lessons/graphql-query-graphql-interface-types-in-graphql-playground)

## Summary

In this lesson we learn about interfaces and how to use them to query different types of pets

## Notes

If we send the `allPets` query, we'll get back `id` and `name` just as expected, but the data relationships in the new pet library are set up differently.

If we open the `allPets` query in the schema, we'll see that it's no longer a type, but an interface. _An interface is an abstract type that includes a set of fields, and these fields must be used when creating new instances of that interface._

Here we have the `Pet` interface. It's the 'base', and it has several fields on it. Our enumerators (`Cat`, `Dog`, etc.) from the previous pet library are now implementations of the `Pet` interface.

![alt text](https://i.ibb.co/F8bXbSP/scrnli-1-25-2020-2-37-27-PM.png)

If we have a look at `Cat`, we see that it's a type that now implements the `Pet` interface. It contains all of the fields from `Pet`, and it can also be extended to include its' own (such as `sleepAmount`).

![alt text](https://i.ibb.co/Fx1LtFc/scrnli-1-25-2020-2-45-54-PM.png)

The `allPets` query returns a list of pets, and all of these pets are different types and different implementations of the `Pet` interface.

If we want to know which type a pet is, we can query the `__typename` field.

```graphql
query {
  allPets {
    __typename
    id
    name
  }
}
```

![alt text](https://i.ibb.co/BTwXRT9/scrnli-1-25-2020-2-52-30-PM.png)

Writing queries for interfaces is a little different. Now we are able to use inline fragments.

If we want to query those extra fields we had on `Cat`, we can use the spread syntax followed by `on <type name>`.

```graphql
query {
  allPets {
    __typename
    id
    name
    ... on Cat {
      sleepAmount
    }
  }
}
```

Now whenever there is a cat in the response, we will see a `sleepAmount` value for it. For all other types, the additional fields will be left out.

![alt text](https://i.ibb.co/k1KYPjP/scrnli-1-25-2020-3-03-09-PM.png)

## Resources

- [Interfaces (official website)](https://graphql.org/learn/schema/#interfaces)

- [Meta fields (official website)](https://graphql.org/learn/queries/#meta-fields)
