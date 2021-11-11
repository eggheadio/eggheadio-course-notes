# Unit Testing a Memoized Redux Selector Built with Reselect/RTK

<TimeStamp start="0:45" end="1:00">

`getMemoizedNumItems` is a memoized function, so we need to add tests that take that into account. It shouldn't compute again with the same state, and it should recompute with new state.

</TimeStamp>

<TimeStamp start="1:30" end="1:45">

The `createSelector` in RTK comes with a built-in count of how many times it has recomputed a certain value. `getMomoizedNumItems.resetRecomputations()` allows you to reset that count for your tests.

</TimeStamp>
