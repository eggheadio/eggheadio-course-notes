# Opt-in to Automatic Batching with createRoot

[Video link]()

<TimeStamp start="0:01" end="0:05">

Automatic batching state is one of the most important performance features in React 18. 

</TimeStamp>

<TimeStamp start="1:38" end="1:42">

```jsx 
function handleCLick() {
    setTimeout(() => {
        updateCount((count) => count + 1);
        updateIsOdd((oddness) => !oddness);
    }, 0);
}
```

</TimeStamp>