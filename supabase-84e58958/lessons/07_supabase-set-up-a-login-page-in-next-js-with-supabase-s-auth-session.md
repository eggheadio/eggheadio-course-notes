# Set up a Login Page in Next.js with Supabase's auth.session()

[Video link](https://www.egghead.io/lessons/supabase-set-up-a-login-page-in-next-js-with-supabase-s-auth-session?pl=supabase-84e58958)

<TimeStamp start="1:45" end="1:50">

```jsx
export default function Home({ session, supabase }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Supabase Chat App</Title>
      </Head>

      <main className={styles.main}>
      </main>
    </div>
  )
}
```

</TimeStamp>

<TimeStamp start="2:13" end="2:35">

```jsx
import {useEffect, useState} from 'react'

const [ loggedIn, setLoggedIn ] = useState(false)
```

[React's useEffect](https://reactjs.org/docs/hooks-effect.html)

</TimeStamp>

<TimeStamp start="4:10" end="4:25">

```jsx
useEffect(() => {
  setLoggedIn(!! session)
}, [session])
```

</TimeStamp>

<TimeStamp start="5:10" end="5:22">

```jsx
<main className={styles.main}>
  {loggedIn ? <span>Logged in</span> : <span>Log in button here</span>}
</main>
```

</TimeStamp>
