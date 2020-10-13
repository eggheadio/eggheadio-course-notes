# Create an ifElse Operator to Fork on a Condition

[📹 Video](https://egghead.io/lessons/egghead-create-an-ifelse-operator-to-fork-on-a-condition)

Creating an ifElse operator can be useful when we want to do something depending on the result of the condition that is passed to this operator.

Let's use the same pattern that we have been using on the course to create the `ifElse` operator.

```javascript
let ifElse = (condition, ifOperator, elseOperator) => broadcaster => listener {
    broadcaster(value => {
        if(condition(value)) {
            // if operation from ifOperator
        }else {
            // else operation from elseOperator
        }
    })
}
```

You can see that this operator takes three arguments:

- The condition to be either true/false
- The if code
- The else code

Also, since the condition will be true or false, we can pass the value into the condition to check if it evaluates to true or not.

Let's look at the following condition from the lesson

```javascript
name => name.length > 3
```

Passing this condition to the `ifElse` operator will make the code look like this

```javascript
let ifElse = (condition, ifOperator, elseOperator) => broadcaster => listener {
    broadcaster(value => {
        if(condition(value)) {
            // if
        }else {
            // else
        }
    })
}
```

In this case:

- condition is `name => name.length > 3` 
- the value is what we passed into the input box.
  - From the lesson, value is `star` if you type it in the input box

So what are we doing here?

We are checking if the value `star` has a length greater than 3. The condition then becomes: `star => star.length > 3`.


## The ifOperator and elseOperator

> "Because ifOperator is an operator, it's an operator that wraps around a broadcaster and then takes the listener"

The same thing is true for the elseOperator, it wraps around a broadcaster and takes a listener.

```javascript
let ifElse = (condition, ifOperator, elseOperator) => broadcaster => listener => {
  broadcaster(value => {
    if (condition(value)) {
      //if
      ifOp()(listener)
    } else {
      //else
      elseOp()(listener)
    }
  })
}
```

But since our broadcaster is already feeding into the listener `value => ...`. We could pass a function inside both the `if/elseOperator`.

```javascript
let ifElse = (condition, ifOperator, elseOperator) => broadcaster => listener => {
  broadcaster(value => {
    if (condition(value)) {
      //if
      ifOperator(innerListener => innerListener(value))(listener)
    } else {
      //else
      elseOperator(immediateBroadcaster)(listener)
    }
  })
}
```

**Note:** The idea is that we still need to pass the `listener` down so we can wrap it around with all the other operators that might be in the chain.

We can move this logic into `immediateBroadcaster` because we want it to fire immediately and only once.

```javascript
let ifElse = (
  condition,
  ifOperator,
  elseOperator
) => broadcaster => listener => {
  broadcaster(value => {
    let immediateBroadcaster = innerListener =>
      innerListener(value)
    if (condition(value)) {
      //if
      ifOperator(immediateBroadcaster)(listener)
    } else {
      //else
      elseOperator(immediateBroadcaster)(listener)
    }
  })
}
```

Let's look at the `inputToBookSearch` code where we are using the `ifElse` operator and see what is happening:

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1602630305/transcript-images/javascript-create-an-ifelse-operator-to-fork-on-a-condition-ifElseOperator.png)
