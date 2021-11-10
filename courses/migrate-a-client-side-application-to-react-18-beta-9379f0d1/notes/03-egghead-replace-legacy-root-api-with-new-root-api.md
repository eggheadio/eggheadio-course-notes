# Replace Legacy Root API with New Root API

[Video link]()

<TimeStamp start="0:04" end="0:08">

React 18 does not support `ReactDOM.render` anymore, instead it works with another API called `ReactDOM.createRoot(rootNode).render(component)`

</TimeStamp>

<TimeStamp start="01:14" end="01:18">

In your `.js` file we need to do the following changes: 

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

</TimeStamp>
