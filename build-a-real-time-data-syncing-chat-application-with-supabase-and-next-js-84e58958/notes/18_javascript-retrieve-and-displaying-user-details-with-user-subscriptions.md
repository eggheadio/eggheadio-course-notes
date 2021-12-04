# Retrieve and Displaying User Details with User Subscriptions

[Video link](https://www.egghead.io/lessons/supabase-retrieve-and-displaying-user-details-with-user-subscriptions?pl=supabase-84e58958)


<TimeStamp start="0:10" end="0:20">

```jsx
<span className={styles.user}>user[message.user_id].username}</span>
```

Keep in mind if you cloned the [repo](https://github.com/signalnerve/supabase-chat-server) from GitHub you already have the css components. 

</TimeStamp>

<TimeStamp start="1:05" end="1:10">

```jsx
<span className={styles.user}>{username(message.user_id)}}</span>
```

</TimeStamp>

<TimeStamp start="1:15" end="1:25">

```jsx
const username = user_id => {
    const user = users[user_id]
    if (!user) return ""
    return user.username ? user.name : user.id
}
```

</TimeStamp>

<TimeStamp start="3:22" end="3:35">

Below `setupMessagesSubscription` 

```jsx
const setupUsersSubscription = async () => {
    await supabase
    .from('users')
    .on('UPDATE', payload => {
        setUsers(users => {
            const user = users[payload.new_id]
            if (user) {
                return Object.assign({}, users, {
                    [payload.new.id]: payload.new
                })
            } else {
                return users
            }
        })
    })
    .subscribe()
}
```

</TimeStamp>

<TimeStamp start="7:20" end="7:30">

Now we have everything working with updating user names and showing all the information we want

</TimeStamp>


