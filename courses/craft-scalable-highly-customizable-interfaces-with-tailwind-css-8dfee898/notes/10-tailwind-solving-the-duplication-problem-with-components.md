# 10 - Solving the Duplication Problem with Components


## Notes

<TimeStamp start="4:24" end="4:26">

```jsx
<hr className="border-t-white/[.06] border-t-2 rounded mx-2"/>
```

</TimeStamp>

<TimeStamp start="8:04" end="8:06">

```jsx
let servers = [
    { id: "1", image:"tailwind.png"}, 
    { id: "2", image:"next.png"}, 
    { id: "3", image:"mirage.png"}, 
]
```

</TimeStamp>

<TimeStamp start="8:50" end="8:54">

```jsx
{servers.map((server) => (
    <NavLink href={`/servers/${server.id}`} key={server.id}>
        <img src={`/servers/${server.img}` alt=""}/>
    </NavLink>
))}
```

</TimeStamp>

