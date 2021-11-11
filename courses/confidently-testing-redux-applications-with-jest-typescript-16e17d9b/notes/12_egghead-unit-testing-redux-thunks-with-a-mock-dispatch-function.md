# Unit Testing Redux Thunks with a Mock Dispatch Function

<TimeStamp start="1:20" end="1:40">

A thunk function takes three arguments:

1. `dispatch` method
2. `getState` method, which can be reproduced for testing as `() => state`
3. extras, which can be set to `undefined` for testing because there aren't any extra arguments needed

</TimeStamp>

<TimeStamp start="1:45" end="2:10">

Anytime `dispatch` is called on a Jest mock function it will record that call in an array, `dispatch.mock.calls`.

</TimeStamp>
