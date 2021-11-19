# Handle Class Component setState edge-case with ReactDOM.flushSync

[Video link]()

<TimeStamp start="1:08" end="1:15">

Any `console.log` needs a `ReactDOM.flushSync` around it:

```jsx 
ReactDOM.flushSync(() => {
    this.setState(({ count }) => ({ count: count + 1 }));
});
console.log(this.state);

ReactDOM.flushSync(() => {
    this.setState(({ isOdd }) => ({ isOdd: !isOdd }));
});
console.log(this.state);
```

</TimeStamp>
