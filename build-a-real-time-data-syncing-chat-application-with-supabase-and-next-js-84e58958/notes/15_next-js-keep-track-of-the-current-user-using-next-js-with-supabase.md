# Keep Track of the Current User Using Next.js with Supabase

[Video link](https://www.egghead.io/lessons/supabase-keep-track-of-the-current-user-using-next-js-with-supabase?pl=supabase-84e58958)

<TimeStamp start="1:00" end="1:05">

You can find the GitHub repository [here](https://github.com/signalnerve/supabase-chat-server)

</TimeStamp>

<TimeStamp start="1:15" end="1:30">

In this lesson we are going to add some css to improve the UI of our application, as well as adding the feature of letting people set up their own user name and rendering the user name in each message. 

</TimeStamp>

<TimeStamp start="2:02" end="2:10">

Keep in mind `user` table is not the same as `auth` table where we capture the information when a user logs in. 

</TimeStamp>


<TimeStamp start="2:48" end="2:55">

```jsx
const [currentUser, setCurrentUser] = useState(null)
```

</TimeStamp>

<TimeStamp start="3:06" end="3:10">

To know more about `useEffect` visit their [documentation](https://reactjs.org/docs/hooks-effect.html)

</TimeStamp>

<TimeStamp start="3:20" end="3:35">

Inside our `const useSupabase` add the following code: 

```jsx 
useEffect(async () => {
    const getCurrenUser = async () =>{
        if (session?.user.id){
            const {data: currentUser} = await supbase
                .from('user')
                .select('*')
                .eq('id', session.user.id)
        }
    }
})
```

</TimeStamp>

<TimeStamp start="6:00" end="6:20">

Inside our `const getCurrentUser` add the following code: 

```jsx 
if (currentUser,length){
    const foundUser = currentUser[0]
    await supabase
        .from(`user:id=eq.${foundUser.id}`)
        .on('UPDATE', payload =>{
            setCurrentUser(payload.new)
        })
        .subscribe()
        return foundUser    
} else {
    return null
}
```

</TimeStamp>
