# Request User Details for a Given User Using Supabase's API

[Video link](https://www.egghead.io/lessons/supabase-request-user-details-for-a-given-user-using-supabase-s-api?pl=supabase-84e58958)

<TimeStamp start="0:01" end="0:06">

In this lesson we are going to add the User Name for each message in our chat. 

</TimeStamp>

<TimeStamp start="0:01" end="0:06">

1. We need the information from the user 
2. List of every user 

</TimeStamp>

<TimeStamp start="1:14" end="1:20">

You can review and learn more about React hooks in their [documentation](https://reactjs.org/docs/hooks-intro.html)

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

<TimeStamp start="5:30" end="6:00">

To get the users from Supabase: 

```jsx
const getUserFromSupabase = async (users, userIds) => {
    const usersToGet =  Array.from(userIds).filter(userId => !user[userId])
    if (Object.keys(users).length && userToGet.length == 0) return users
    const {data} = await supabase
        .from('user')
        .select('id,username')
        .in('id', usersToGet)
    const newUsers = {}
    data.forEach(user => newUsers[user.id] = user)
    return Object.assign({}, users, newUsers)
}
```

</TimeStamp>


