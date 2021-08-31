# Set up a Login Page in Next.js with Supabase's auth.session()

[Video link](https://www.egghead.io/lessons/supabase-set-up-a-login-page-in-next-js-with-supabase-s-auth-session?pl=supabase-84e58958)

<TimeStamp start="0:27" end="0:35">

If you have something running in your default PORT=3000, you can run `PORT=3001 npm run dev`

</TimeStamp>

<TimeStamp start="1:45" end="1:50">

This is how our `index.js` file should look like:

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

[React's useEffect](https://reactjs.org/docs/hooks-effect.html)

```jsx
import {useEffect, useState} from 'react'
// under export default
const [ loggedIn, setLoggedIn ] = useState(false)
```

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
