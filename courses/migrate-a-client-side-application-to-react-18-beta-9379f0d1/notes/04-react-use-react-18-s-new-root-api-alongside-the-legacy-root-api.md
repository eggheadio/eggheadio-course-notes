# Use React 18's New Root API Alongside the Legacy Root API

[Video link]()

<TimeStamp start="00:18" end="00:25">

Behavior of each type of API for React 17 and 18:

```jsx 
let root1 = document.getElementById("root");
let root2 = document.getElementById("root-2");

ReactDOM.createRoot(root1).render(<App root="18" />);
ReactDOM.render(<App root="17" />, root2)
```

</TimeStamp>

<TimeStamp start="01:05" end="01:17">

We ca confirm by checking the console, that we get a warning message saying that `ReactDOM.render` is not supported by React 18, and the app will behave as if it's running in React 17. 

</TimeStamp>