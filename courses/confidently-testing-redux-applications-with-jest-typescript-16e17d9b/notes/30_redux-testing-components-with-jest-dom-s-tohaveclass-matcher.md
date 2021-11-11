# Testing Components with jest-dom's toHaveClass Matcher

<TimeStamp start="0:25" end="0:35">

After removing `{ Product }` from the api import statement, we need to add `type Product = api.Product` to keep all references to `Product` working as they were before.

</TimeStamp>

<TimeStamp start="2:20" end="2:30">

Even though `checkoutSpy` was already set up, the call to checkout was still going to hit the server until a new resolved or rejected value was set using a mock.

</TimeStamp>
