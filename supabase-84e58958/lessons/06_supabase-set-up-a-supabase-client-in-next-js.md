# Set up a Supabase Client in Next.js

[Video link](https://www.egghead.io/lessons/supabase-set-up-a-supabase-client-in-next-js?pl=supabase-84e58958)

<TimeStamp start="0:07" end="0:12">

npx create-next-app supabase-chat-server

</TimeStamp>

<TimeStamp start="0:27" end="0:32">

npm install @supabase/supabase-js

</TimeStamp>

<TimeStamp start="2:20" end="2:30">

NEXT_PUBLIC_SUPABASE_URL=<KEY>
NEXT_PUBLIC_SUPABASE_API_KEY=<KEY>

</TimeStamp>

<TimeStamp start="3:35" end="3:50">

```js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY
)
```

</TimeStamp>

<TimeStamp start="4:30" end="4:45">

```js
const useSupabase = () => {
  const [session, setSession] = useState(supabase.auth.session())
}
```

[React's useState](https://reactjs.org/docs/hooks-state.html)

</TimeStamp>

<TimeStamp start="5:15" end="5:25">

```js
supabase.auth.onAuthStateChange(async (_event, session) => {
  setSession(session)
})
```

</TimeStamp>

<TimeStamp start="5:57" end="6:02">

```js
import { useState } from 'react';
```

</TimeStamp>

<TimeStamp start="6:10" end="6:23">

```js
return { session, supabase }
```

</TimeStamp>

<TimeStamp start="6:10" end="6:23">

```js
export default useSupabase
```

</TimeStamp>

<TimeStamp start="7:15" end="7:20">

```js
import useSupabase from '../utils/useSupabase'
```

</TimeStamp>

<TimeStamp start="7:40" end="7:50">

```js
const { session, supabase } = useSupabase()
```

</TimeStamp>

<TimeStamp start="8:05" end="8:15">

```js
return <Component session={session} supabase={supabase} {...pageProps} />
```

</TimeStamp>

<TimeStamp start="8:35" end="8:42">

```js
export default function Home({ session, supabase }) 
```

</TimeStamp>