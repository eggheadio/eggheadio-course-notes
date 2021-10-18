<TimeStamp start="0:18" end="0:33">

A selector represents a piece of derived state. You can think of derived state as the output of passing state to a pure function that modifies the given state in some way.

</TimeStamp>

<TimeStamp start="2:44" end="2:56">

More information on the [luxon library toISODate()](https://moment.github.io/luxon/#/formatting?id=technical-formats-strings-for-computers)

</TimeStamp>

<TimeStamp start="3:23" end="3:48">

[A selectorFamily](https://recoiljs.org/docs/api-reference/utils/selectorFamily/) is a powerful pattern that is similar to a selector, but allows you to pass parameters to the `get` and `set` callbacks of a selector. The `selectorFamily()` utility returns a function which can be called with user-defined parameters and returns a selector. Each unique parameter value will return the same memoized selector instance.

</TimeStamp>