# 03 - Making Panels Scrollable with Flexbox

## Notes

<TimeStamp start="0:38" end="0:45">

An easy way to generate dummy data is by creating an empty array and map over it, as follow:

```jsx 
{[...Array(40)].map((_, i) => (
    <div className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
        {i}
    </div>
))}
```

</TimeStamp>

<TimeStamp start="1:07" end="1:35">

By default the servers are overflowing the application (that's what flex-box is supposed to do) however, we can fix that by adding `overflow-y-scroll`. With this utility whatever it goes beyond constraints are scrollable. 

</TimeStamp>
