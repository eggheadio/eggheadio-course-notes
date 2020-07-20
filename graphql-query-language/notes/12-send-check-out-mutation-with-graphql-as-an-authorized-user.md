[Video Link](https://egghead.io/lessons/graphql-send-a-checkout-mutation-with-graphql-as-an-authorized-user)

## Summary

In this lesson we learn how to how to send a mutation based on current data to check out pets.

## Notes

Once logged in, the user will be able to check out pets with a `checkOut` mutation. First we need to know which pets are available.

We can do this by quering `allPets`.

```graphql
query {
  allPets(status: AVAILABLE) {
    id
    name
    category
  }
}
```

We are going to checkout Switchblade who has an id of `S-2`. We are also going to query the pet and customer information.

```graphql
mutation Checkout {
  checkOut(id: "S-2") {
    pet {
      name
    }
    customer {
      name
    }
  }
}
```

![alt text](https://i.ibb.co/Q9YghWb/scrnli-1-23-2020-6-26-48-PM.png)

If we look at the `checkOut` mutation, we see that this returns a `CheckOutPayload`. Here we have access to the customer object, the pet object and the checkout date all in one place.

![alt text](https://i.ibb.co/fHXh3KC/scrnli-1-23-2020-6-32-18-PM.png)
