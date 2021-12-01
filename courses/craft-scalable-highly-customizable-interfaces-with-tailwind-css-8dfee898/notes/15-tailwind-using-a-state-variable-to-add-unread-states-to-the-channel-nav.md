# 15 - Using a State Variable to Add Unread States to the Channel Nav
## Notes

<TimeStamp start="1:30" end="1:34">

```jsx
let state = active 
? "active"
: channel.unread
? "inactiveUnread"
: "inactiveRead";
```

</TimeStamp>

<TimeStamp start="1:42" end="1:45">

```jsx
 let classes = {
    active: "text-white bg-gray-550/[0.32]",
    inactiveUnread:
      "text-white hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]",
    inactiveRead:
      "text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]",
  };
```

</TimeStamp>
