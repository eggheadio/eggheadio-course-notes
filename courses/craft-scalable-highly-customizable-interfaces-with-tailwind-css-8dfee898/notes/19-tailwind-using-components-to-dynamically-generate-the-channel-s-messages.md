# 19 - Using Components to Dynamically Generate the Channel's Messages

## Notes

<TimeStamp start="4:42" end="4:45">

```jsx
function Message({ message }) {
  return (
    <div className="pl-4 pr-16 py-0.5 hover:bg-gray-950/[.07] leading-[22px]">
      <p className="text-gray-100 pl-14">{message.text}</p>
    </div>
  );
}
```

</TimeStamp>

<TimeStamp start="5:04" end="5:07">
 
```jsx
{channel.messages.map((message, i) => (
    <div key={message.id}>
        {i === 0 || message.user !== channel.messages[i - 1].user ? (
            <MessageWithUser message={message} />
        ) : (
            <Message message={message} />
        )}
    </div>
)}
```

</TimeStamp>
