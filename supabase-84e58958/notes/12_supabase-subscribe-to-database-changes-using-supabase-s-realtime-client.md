# Subscribe to Database Changes using Supabase's Realtime Client

[Video link](https://www.egghead.io/lessons/supabase-subscribe-to-database-changes-using-supabase-s-realtime-client?pl=supabase-84e58958)


<TimeStamp start="0:01" end="0:08">

So far we have been able to get the list of messages from the Supabase API and display them in a simple UI

</TimeStamp>

<TimeStamp start="0:41" end="0:47">

This a really powerful tool, we are able to see in real-time any changes from our database.

</TimeStamp>


<TimeStamp start="1:43" end="1:50">

It's important to keep in mind that you shouldn't use this subscriptions changes in a production application. 

</TimeStamp>

<TimeStamp start="2:48" end="2:58">

Subscribe to real-time notifications

```jsx
const message = supabase 
    .from('message')
    .on('*', payload => {
        console.log('Change received!', payload)
    })
    .subscribe()
```

</TimeStamp>

<TimeStamp start="3:57" end="4:10">

To test if we can see the messages in interface, you need to create a new *message* in messages table 

</TimeStamp>