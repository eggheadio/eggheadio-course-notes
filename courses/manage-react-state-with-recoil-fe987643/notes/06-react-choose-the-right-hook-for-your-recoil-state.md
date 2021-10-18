<TimeStamp start="0:26" end="0:40">

[useRecoilValue](https://recoiljs.org/docs/api-reference/core/useRecoilValue/) simply returns the value of the given Recoil state. It is a read only hook, it cannot write to the state. This is best used when you don't want to change the state, but just read/print out what that state is. 

</TimeStamp>

<TimeStamp start="1:22" end="1:42">

[useRecoilState](https://recoiljs.org/docs/api-reference/core/useRecoilState/) returns a tuple where the first element is the value of state and the second element is a setter function that will update the value of the given state when called. This hook will implicitly subscribe the component to the given state. This you will want to use when you want to read and write the state.

</TimeStamp>

<TimeStamp start="1:22" end="2:42">

[useSetRecoilState](https://recoiljs.org/docs/api-reference/core/useSetRecoilState/) is used when you want to update the state but not have it re-render every time the state is changed. It is the primary candidate when you just need to write state. useSetRecoilState returns a setter function for updating the value of writeable Recoil state.


</TimeStamp>