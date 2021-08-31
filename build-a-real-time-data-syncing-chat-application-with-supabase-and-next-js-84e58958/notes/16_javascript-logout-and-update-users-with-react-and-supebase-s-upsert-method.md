# Logout and Update Users with React and Supebase's upsert Method

[Video link](https://www.egghead.io/lessons/supabase-logout-and-update-users-with-react-and-supebase-s-upsert-method?pl=supabase-84e58958)


<TimeStamp start="0:22" end="3:40">

```jsx
const {currentUser, session, supabase} = useSupabase()
```

</TimeStamp>

<TimeStamp start="3:15" end="3:20">

You can find more information about React Context in their [documentation](https://reactjs.org/docs/context.html)

</TimeStamp>

<TimeStamp start="3:35" end="4:00">

The resulting code should look like this:

```jsx
<div className={styles.settings}></div>
```

</TimeStamp>

<TimeStamp start="5:05" end="5:10">

```jsx
<div>
    <button onClick={() => setEditingUsername(true)}> Edit UserName </button>
</div>
```

</TimeStamp>

<TimeStamp start="6:00" end="6:05">

LogOut button: 

```jsx
<button onClick={() => logout()}> Log out </button>
```

</TimeStamp>

<TimeStamp start="6:10" end="6:20">

```jsx
const logout = evt => {
    evt.preventDefault()
    window.localStorage.clear()
    window.location.reload()
    // supabase.auth.signOut(); ==> Supabase approach
}
```

</TimeStamp>

<TimeStamp start="7:15" end="7:20">

```jsx
<button onClick={evt => logout(evt)}> Log out </button>
```

</TimeStamp>

<TimeStamp start="7:55" end="8:05">

```jsx
<form onSubmit={setUsername}>
    <input placeholder="new user" required ref={newUsername}></input>
    <button type="submit"> Update username </button>
</form>
```

</TimeStamp>

