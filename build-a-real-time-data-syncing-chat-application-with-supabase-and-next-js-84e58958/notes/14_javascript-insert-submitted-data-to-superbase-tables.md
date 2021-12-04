# Insert Submitted Data to Superbase Tables

[Video link](https://www.egghead.io/lessons/supabase-insert-submitted-data-to-superbase-tables?pl=supabase-84e58958)


<TimeStamp start="0:05" end="0:10">

In this lesson we are going to create the UI that will allow users to create messages in the interface.

</TimeStamp>

<TimeStamp start="0:57" end="1:10">

To create the form, copy the following code: 

```jsx 
<form onSubmit={sendMessage}>
    <input placeholder="Write your message" required ref={message}></input>
    <button type="submit"></button>
</form>
```

</TimeStamp>

<TimeStamp start="2:25" end="2:31">

We create a new `const` 

```jsx
const message = useRef("")
```

</TimeStamp>

<TimeStamp start="2:45" end="3:00">

```jsx
const sendMessage = async evt => {
    evt.preventDefault()
    const content = message.current.value
    await supabase
    .from('message')
    .insert([
        {content, user_id: session.user.id}
    ])
}
```

</TimeStamp>

