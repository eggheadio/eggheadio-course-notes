# Notes

<TimeStamp start="0:43" end="0:53">

If you have a component that is just going to read the value stored within an atom, instead of using the `useRecoilState`, it is a better approach to use the `useRecoilValue` hook, since the purpose of the `function Display` is only to read the value that is coming from the `function Counter`. 

`useRecoilValue` is a recommended hook to use when the component only intends to *read* the state, and `useRecoilState` is recommended when the component intends to *read and write* the state

For more information refer to [`useRecoilState`](https://recoiljs.org/docs/api-reference/core/useRecoilState/) and [`useRecoilValue`](https://recoiljs.org/docs/api-reference/core/useRecoilValue/)

</TimeStamp>

