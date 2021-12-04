[Video Link](https://egghead.io/lessons/graphql-change-check-in-status-with-a-graphql-mutation)

## Summary

In this lesson we learn how to check a pet in using a pet id.

## Notes

<TimeStamp start="0:01" end="0:07">

It's time to check our pet back in. To do this, we are going to use the named mutation `checkIn`.

</TimeStamp>

<TimeStamp start="0:10" end="0:16">

Remember we have to have our authorization token in our headers.

</TimeStamp>

<TimeStamp start="0:17" end="0:31">

The `checkIn` mutation takes in a pet id and returns an object called `checkOut`. `checkOut` returns the `pet` object, `checkOutDate`, `checkInDate` and a boolean `late`.

</TimeStamp>

<TimeStamp start="0:46" end="1:19">

Now that we've checked out and checked in a pet, we can view this data on a query called `allCustomers`. Here we can query `username` and `checkoutHistory`. `checkoutHistory` returns a list of checkouts and pet information.

```graphql
query {
  allCustomers {
    username
    checkoutHistory {
      pet {
        id
        name
      }
    }
  }
}
```

![alt text](https://i.ibb.co/TKbjNky/scrnli-1-24-2020-1-53-43-PM.png)

</TimeStamp>
