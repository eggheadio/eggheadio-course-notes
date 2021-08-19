# Manage Third-Party Authorization Errors in Supabase

[Video link](https://www.egghead.io/lessons/supabase-manage-third-party-authorization-errors-in-supabase?pl=supabase-84e58958)

<TimeStamp start="0:03" end="0:16">

One of the downsides of using a third party OAuth providers is that an error isn't really displayed in the web page or url. So it could be a bit unclear what exactly is going wrong.   

</TimeStamp>

<TimeStamp start="1:14" end="1:22">

To disable the email confirmation workflow to login in your application, you just need to go to settings in Supabase an select "Disable email confirmations"

</TimeStamp>

<TimeStamp start="1:25" end="1:32">

Keep in mind if you are using another port to run your application, you need to update the URL in Supabase settings.

</TimeStamp>

<TimeStamp start="1:45" end="2:00">

If you are presenting errors in your url  after logging in, the best approach is to delete the user from the auth users table. 

This error can occur if there was some kind of problem or mistake while authenticating from github.

</TimeStamp>

<TimeStamp start="3:12" end="3:21">

After successfully logged in, you should check the users public table to see if the new user has been created as s result of the trigger we created earlier.

</TimeStamp>

<TimeStamp start="3:50" end="4:02">

Delete the records we created for testing the set up of Supabase, whit the purpose of leaving just the data we are creating in the interface of our application. 

</TimeStamp>

