# Request User Details for a Given User Using Supabase's API

[Video link](https://www.egghead.io/lessons/supabase-request-user-details-for-a-given-user-using-supabase-s-api?pl=supabase-84e58958)

<TimeStamp start="0:01" end="0:06">

In this lesson we are going to add the User Name for each message in our chat. 

</TimeStamp>

<TimeStamp start="2:00" end="2:20">

```jsx
useEffect(async () => {
    const getUsers = async () => {
        const userIds = new Set(messages.map(message => message.user_id))
        const newUsers = await getUsersFromSupabase(users, userIds)
        setUsers(newUsers)
    }

    await getUsers()
}, [messages])
```

</TimeStamp>


