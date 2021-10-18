[Video Link](https://egghead.io/lessons/graphql-listen-for-data-changes-in-real-time-with-a-graphql-subscription)

## Summary

In this lesson we learn about subscriptions and how to listen for changes in real time.

## Notes

If we wanted to set up a realtime listener for anytime a pet is returned, we would use a `subscription`.

To check in a pet, we first have to check one out.

<TimeStamp start="0:27" end="0:35">

Don't forget to log in and add the token to the HTTP headers.

</TimeStamp>

![alt text](https://i.ibb.co/j4209kV/scrnli-1-27-2020-10-16-20-AM.png)

The next step is to add a subscription. We can do this in a new tab.

<TimeStamp start="0:58" end="1:18">

Subscriptions are named just like queries and mutations. This one is called `petReturned`, and it returns a `Checkout` object.

</TimeStamp>

![alt text](https://i.ibb.co/xDzcBR1/scrnli-1-27-2020-10-21-42-AM.png)

Once we click the play button, we'll notice we don't receieve any data back. There is a spinner where we usually see the data.

<TimeStamp start="1:22" end="1:29">

It is not a request and response. We are listening for changes over a web socket.

</TimeStamp>

We'll go to a new tab and checkout a pet and press play.

Once we send that request, we'll change checkOut to checkIn and press play again to check that pet back in.

<TimeStamp start="1:44" end="1:46">

```graphql
mutation {
  checkIn(id: "C-2") {
    pet {
      name
    }
  }
}
```

</TimeStamp>

If we go back to the tab where we set up the subscription, we'll now see some data instead of the spinner.

<TimeStamp start="1:55" end="2:05">

Subscriptions are useful if your application needs any real-time data. Mutations trigger the change.

</TimeStamp>

![alt text](https://i.ibb.co/P94SzB3/scrnli-1-27-2020-10-38-18-AM.png)

## Resources

- [Subscriptions in GraphQL and Relay (official website)](https://graphql.org/blog/subscriptions-in-graphql-and-relay/)

- [What are Web Sockets? (blog)](https://medium.com/@dominik.t/what-are-web-sockets-what-about-rest-apis-b9c15fd72aac)
