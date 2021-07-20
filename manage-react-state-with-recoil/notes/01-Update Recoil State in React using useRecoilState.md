<TimeStamp start="0:10" end="0:25">

Atoms contain the source of truth for our application state. In our todo-list, the source of truth will be an array of objects, with each object representing a todo item.

</TimeStamp>

<TimeStamp start="0:40" end="1:05">

useRecoilState is VERY similar to React's useState hook. useRecoilState returns a tuple where the first element is the value of state and the second element is a setter function that will update the value of the given state when called. This hook will implicitly subscribe the component to the given state. [More Info](https://recoiljs.org/docs/api-reference/core/useRecoilState/)

</TimeStamp>
