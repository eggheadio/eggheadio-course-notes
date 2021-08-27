# Configure Supabase Auth to Allow Users to Login with GitHub

[Video link](https://www.egghead.io/lessons/supabase-configure-supabase-auth-to-allow-users-to-login-with-github?pl=supabase-84e58958)


<TimeStamp start="0:04" end="0:20">

In settings you need to enable logging in with GitHub, after that you need to follow the link *"Create new cerdentials"* where you can set up a new application to connect to Supabase. 

</TimeStamp>

<TimeStamp start="0:52" end="1:17>

While completing the application in GitHub, the last form you'll be asked *"Authorization callback URL"*, this relates to the API URL from supabase. You'll fin the URL under the API section in your Supabase account. You just need to copy and paste that url and add the following `/auth/v1/callback`  at the end. 

</TimeStamp>

<TimeStamp start="1:18" end="1:24">

[Complete guide to authentication in Supabase](https://supabase.io/docs/guides/auth)


</TimeStamp>

<TimeStamp start="1:45" end="2:00">

From the new page created by your application in GitHub, you'll need two things to copy and paste in Supabase settings: 

1. Client ID
2. GitHub secret 

</TimeStamp>

<TimeStamp start="2:14" end="2:30">

Supabase also allows you to enable email authentication, you don't need anything to configure, it's already enable for you. If you want to disable this method you'll need to do it under *Settings*/*General*

</TimeStamp>

