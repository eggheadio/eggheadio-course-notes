[Video Link](https://egghead.io/lessons/graphql-query-graphql-interface-types-in-graphql-playground)

## Summary

In this lesson we learn about interfaces and how to use them to query different types of pets

## Notes

<TimeStamp start="0:00" end="0:10">

If we send the `allPets` query, we'll get back `id` and `name` just as expected, but the data relationships in the new pet library are set up differently.

</TimeStamp>

<TimeStamp start="0:11" end="0:26">

If we open the `allPets` query in the schema, we'll see that it's no longer a type, but an interface. _An interface is an abstract type that includes a set of fields, and these fields must be used when creating new instances of that interface._

</TimeStamp>

<TimeStamp start="0:27" end="0:44">

Here we have the `Pet` interface. It's the 'base', and it has several fields on it. Our enumerators (`Cat`, `Dog`, etc.) from the previous pet library are now implementations of the `Pet` interface.

![alt text](https://i.ibb.co/F8bXbSP/scrnli-1-25-2020-2-37-27-PM.png)

</TimeStamp>

<TimeStamp start="0:45" end="1:00">

If we have a look at `Cat`, we see that it's a type that now implements the `Pet` interface. It contains all of the fields from `Pet`, and it can also be extended to include its' own (such as `sleepAmount`).

![alt text](https://i.ibb.co/Fx1LtFc/scrnli-1-25-2020-2-45-54-PM.png)

</TimeStamp>

<TimeStamp start="1:08" end="1:15">

The `allPets` query returns a list of pets, and all of these pets are different types and different implementations of the `Pet` interface.

</TimeStamp>

<TimeStamp start="1:16" end="1:24">

If we want to know which type a pet is, we can query the `__typename` field.

![alt text](https://i.ibb.co/BTwXRT9/scrnli-1-25-2020-2-52-30-PM.png)

</TimeStamp>

<TimeStamp start="1:25" end="1:38">

Writing queries for interfaces is a little different. Now we are able to use inline fragments.

If we want to query those extra fields we had on `Cat`, we can use the spread syntax followed by `on <type name>`.

</TimeStamp>

<TimeStamp start="1:39" end="1:47">

Now whenever there is a cat in the response, we will see a `sleepAmount` value for it. For all other types, the additional fields will be left out.

![alt text](https://i.ibb.co/k1KYPjP/scrnli-1-25-2020-3-03-09-PM.png)

</TimeStamp>

<TimeStamp start="1:48" end="1:59">

We can do this for any additional fields.

</TimeStamp>

<TimeStamp start="2:00" end="2:16">

Interfaces give us more flexibility when designing our domain's objects.

</TimeStamp>

## Resources

- [Interfaces (official website)](https://graphql.org/learn/schema/#interfaces)

- [Meta fields (official website)](https://graphql.org/learn/queries/#meta-fields)
