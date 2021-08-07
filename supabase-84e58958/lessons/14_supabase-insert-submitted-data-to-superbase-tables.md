# Insert Submitted Data to Superbase Tables

[Video link](https://www.egghead.io/lessons/supabase-insert-submitted-data-to-superbase-tables?pl=supabase-84e58958)


<TimeStamp start="3:35" end="3:40">

Code to insert into your tables is:

```sql
const {data, error} = await supabase
    .from('message')
    .insert([
        {some_column: 'someValue', other_column: 'otherValue'},
    ])
```

</TimeStamp>


<TimeStamp start="0:57" end="1:10">

To create the form copy the following code: 

```jsx 
<form onSUbmit={sendMessage}>
    <input placeholder="Write your message" required ref={message}></input>
    <button type="submit"></button>
</form>
```

</TimeStamp>

