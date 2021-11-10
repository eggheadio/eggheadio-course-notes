# Replace Legacy Root API's Callback Argument

[Video link]()


<TimeStamp start="0:16" end="0:20">

Warning: React 18 does not support the second callback argument. 

</TimeStamp>

<TimeStamp start="0:37" end="0:45">

There are several ways to fix the previous warning. First one is by using `useEffect` 

```jsx 
function App() {
    React.useEffect(() => console.log("React rendered"), [])
    return <div> Hello, React! </div>
}
```

</TimeStamp>

<TimeStamp start="01:16" end="01:20">

Another way is by using `window.setTimeout` as shown below: 

```jsx 
let root1 = document.getElementById("root");

ReactDOM.createRoot(root).render(<App />);
window.setTimeout(() => console.log("React rendered"), 0);
```

</TimeStamp>

<TimeStamp start="02:00" end="02:10">

As a last way, we can use `callback` function: 

```jsx
ReactDOM.createRoot(root).render(
    <App callback={(ref) => console.log(ref.tagName)} />
    );

function App({ callback }) {
    return <div ref={callback}> Hello, React! </div>
}
```

</TimeStamp>