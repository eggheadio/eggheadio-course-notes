<TimeStamp start="1:05" end="1:35">

Trying to consume the `weatherSelector` directly will give us some problems, until the API call returns, all we have is a promise, so React won't know what to render. One way of fixing this is using [React Suspense](https://reactjs.org/docs/concurrent-mode-suspense.html), an experimental feature.

</Timestamp>

<TimeStamp start="2:00" end="2:15">

Suspense can't be at the same level of hierarchy as the value that we're waiting for. We **could** wrap our application in a suspense component, but we would lose the input box and just show "Loading weather..." for the whole application. 

</TimeStamp>

<TimeStamp start="2:25" end="2:35">

To get around the loading issue, we can lower the hierarchy of `<div>Weather: {cityWeather}</div>` by extracting it into it's own component. 

</TimeStamp>

