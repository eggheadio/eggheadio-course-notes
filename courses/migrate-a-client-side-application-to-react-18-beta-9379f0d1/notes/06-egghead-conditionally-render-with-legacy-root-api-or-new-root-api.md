# Conditionally Render with Legacy Root API or New Root API

[Video link]()


<TimeStamp start="0:16" end="0:20">

Based on the environment we can render either the legacy API or the new API

```jsx 
const REACT_18 = true; 

if (REACT_18) {
    ReactDOM.createRoot(root).render(<App />);
} else {
    ReactDOM.render(<App />, root);
}
```

</TimeStamp>