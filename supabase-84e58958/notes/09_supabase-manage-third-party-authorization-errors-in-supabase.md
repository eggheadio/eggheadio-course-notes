# Manage Third-Party Authorization Errors in Supabase

[Video link](https://www.egghead.io/lessons/supabase-manage-third-party-authorization-errors-in-supabase?pl=supabase-84e58958)

<TimeStamp start="1:20" end="1:30">

We are just going to be using the github sign-in so we can Disable email confirmations to get around this issue. 

</TimeStamp>

<TimeStamp start="1:45" end="2:00">

The issue here was having the wrong redirect setup. This broke our sign-up flow creating our error. You shouldn't run into this problem as long as your redirect is correctly setup. You shouldn't run into this on Production. 

</TimeStamp>