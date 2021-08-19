# Executing Raw SQL using Supabase's Interface

[Video link](https://www.egghead.io/lessons/supabase-executing-raw-sql-using-supabase-s-interface?pl=supabase-84e58958)

<TimeStamp start="0:01" end="0:10">

If it is your first time using SQL or you just need a reminder of some of the concepts, you can visit their [documentation](https://dev.mysql.com/doc/)

</TimeStamp>

<TimeStamp start="0:30" end="0:40">

This query will retrieve all the rows (users) and columns in the users table under auth. 

```sql
select * from auth.users;
```

</TimeStamp>

<TimeStamp start="0:30" end="0:35">

If you modify the star for id (which is one of the columns of user table) you'll see just the id for each user. 

```sql
select id from auth.users;
```

</TimeStamp>

