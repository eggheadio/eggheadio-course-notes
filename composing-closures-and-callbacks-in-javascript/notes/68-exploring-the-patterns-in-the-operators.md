# Exploring the Patterns in the Operators

[📹 Video](https://egghead.io/lessons/egghead-exploring-the-patterns-in-the-operators)

> "Closures, callbacks can handle pretty much any scenario."

Let's explore the code and try to figure out where are the closures and where are the callbacks.

![](../images/closures_callbacks.png)

## Closures

Because there are values that are capture inside a function, that function is the closure.

## Callbacks

Callbacks are functions called inside another function. Usually, listeners are callbacks.

## Important to know

Throughout the course, we followed the path where `listener` is always the last argument.

> "when different functions share the same last argument, it means they can be composed together."

