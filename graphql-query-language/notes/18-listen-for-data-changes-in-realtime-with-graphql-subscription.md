[Video Link](https://egghead.io/lessons/graphql-listen-for-data-changes-in-real-time-with-a-graphql-subscription)

## Summary

In this lesson we learn about subscriptions and how to listen for changes in real time.

## Notes

If we wanted to set up a realtime listener for anytime a pet is returned, we would use a `subscription`.

To check in a pet, we first have to check one out, so let's do that (don't forget to log in and add the token to the HTTP headers!).

![alt text](https://i.ibb.co/j4209kV/scrnli-1-27-2020-10-16-20-AM.png)

The next step is to add a subscription. We can do this in a new tab.

```graphql
subscription {
  petReturned {
    pet {
      name
    }
  }
}
```

Subscriptions are named just like queries and mutations. This one is called `petReturned`, and it returns a `Checkout` object.

![alt text](https://i.ibb.co/xDzcBR1/scrnli-1-27-2020-10-21-42-AM.png)

Once we click the play button, we'll notice we don't receieve any data back. There is a spinner where we usually see the data.

It is not a request and response. We are listening for changes over a web socket.

We'll go to a new tab and checkout a pet and press play.

```graphql
mutation {
  checkOut(id: "C-2") {
    pet {
      name
    }
  }
}
```

Once we send that request, we'll change checkOut to checkIn and press play again to check that pet back in.

```graphql
mutation {
  checkIn(id: "C-2") {
    pet {
      name
    }
  }
}
```

If we go back to the tab where we set up the subscription, we'll now see some data instead of the spinner.

![alt text](https://i.ibb.co/P94SzB3/scrnli-1-27-2020-10-38-18-AM.png)

## Resources

- [Subscriptions in GraphQL and Relay (official website)](https://graphql.org/blog/subscriptions-in-graphql-and-relay/)

- [What are Web Sockets? (blog)](https://medium.com/@dominik.t/what-are-web-sockets-what-about-rest-apis-b9c15fd72aac)
