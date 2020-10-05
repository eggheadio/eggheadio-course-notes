# Map a Sequence Based on Values

[📹 Video](https://egghead.io/lessons/egghead-map-a-sequence-based-on-values)

In the previous lesson we create a `sequence` operator that take a list of broacaster and execute each of them in a row, one after the other, when the `done` status was catch.

```javascript
sequence(
  delayMessage('Hello,'),
  delayMessage('my'),
  delayMessage('name'),
  delayMessage('is'),
  delayMessage('John!'),
)(console.log)
```

This is a useful construct but could be improved to make it easier to use for this particular use case by enable a mapping functionallity over a particular message.

The, current example write to the console the message `Hello, my name is John` so we can use that same string as our base value.

```javascript
const message = `Hello, my name is John!`.split(' ')
```

Now we have an array of strings that we want to display by the delay operator.

The logic that we want to implement there is to loop over the array and apply the delay operator on each of the items of the array, one after the other as previously with the `sequence` operator.

In a [previous lesson](https://egghead.io/lessons/egghead-start-with-the-api-you-want-then-implement) we talk about define the API that we want and then the implementation. In this case we do the same. The desired API looks like

```javascript
mapSequence((word) => delayMessage(word))(forOf(message))(console.log)
```

That can be read as _loop over the message and take each word a apply the delayMessage operator to it and log that delayed message to the console_

We already implement a similar behavior and there is a common pattern when we are looping over some data. **"async recursion".**

> 🔑 Use a buffer when you are in the scenario were you're getting too much information too fast.

🚨 Every time you use a buffer to store some data you need to add guards to the case when the buffer is empty to avoid getting undefined values.

🚨 Be aware the for the scenarios where the `done` status is not catch, sometimes this can happen because of the inner broadcasting could be not re-assigned.

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/map-sequence/src/index.js#L68)
