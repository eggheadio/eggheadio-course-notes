# Enable Realtime Only for Individual Tables using supabase_realtime

[Video link](https://www.egghead.io/lessons/supabase-enable-realtime-only-for-individual-tables-using-supabase_realtime?pl=supabase-84e58958)


<TimeStamp start="1:20" end="1:35">

Basically the sql code that you'll need to activate the real-time notifications is: 

```sql
begin;
------
drop publication if exists supabase_realtime;
create publication supabase_realtime;
commit;
------
alter publication supabase_realtime add table public.message;
alter table public.message replica identity full;
alter publication supabase_realtime add table public.user;
alter table public.user replica identity full;
```

</TimeStamp>

<TimeStamp start="2:10" end="2:15">

Yay! Now you should be able to see an alert in your console with the changes. 

</TimeStamp>

<TimeStamp start="2:55" end="3:05">

Subscribe real-time notifications for Inserts

```jsx
const message = supabase 
    .from('message')
    .on('INSERT', payload => {
        console.log('Change received!', payload)
    })
    .subscribe()
```

</TimeStamp>

<TimeStamp start="3:35" end="3:40">

Change the `console.log` statement for `setMessages([].concat(message, payload.new))`

</TimeStamp>

<TimeStamp start="4:43" end="5:25">

As you can see, there is a glitch in our application. Every time you create a new message, the previous messages get erased in our interface. To solve this problem we need to do some changes in our `const setUpMessagesSubscription`

```jsx
setMessages(previous => [].concat(previous, payload.new))
```

With this tweak, we are setting the messages to be up to date, including previous.

</TimeStamp>

