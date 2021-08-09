# Keep Track of the Current User Using Next.js with Supabase

[Video link](https://www.egghead.io/lessons/supabase-keep-track-of-the-current-user-using-next-js-with-supabase?pl=supabase-84e58958)

<TimeStamp start="1:00" end="1:05">

You can find the GitHub repository [here](https://github.com/signalnerve/supabase-chat-server)

</TimeStamp>


<TimeStamp start="2:02" end="2:10">

Keep in mind `user` table is not the same as `auth` table where we capture the information when a user logs in. 

</TimeStamp>


<TimeStamp start="2:48" end="2:55">

```jsx
const [currentUser, setCurrentUser] = useState(null)
```

</TimeStamp>


