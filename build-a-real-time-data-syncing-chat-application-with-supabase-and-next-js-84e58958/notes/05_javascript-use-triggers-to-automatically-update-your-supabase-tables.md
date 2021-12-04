# Use Triggers to Automatically Update Your Supabase Tables

[Video link](https://www.egghead.io/lessons/supabase-use-triggers-to-automatically-update-your-supabase-tables?pl=supabase-84e58958)


<TimeStamp start="1:13" end="1:33">
  
Documentation for managing-user-data can be found [here](https://supabase.io/docs/guides/auth/managing-user-data).
  
</TimeStamp>

<TimeStamp start="1:50" end="2:00">

This is the code that exposes a function to handle new users:

```sql
-- inserts a row into public.user
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.user (id)
  values (new.id)
  return new;
end;
```

</TimeStamp>

<TimeStamp start="2:56" end="3:05">

This is the code the triggers the function every time a user is created:

```sql
-- trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

</TimeStamp>

<TimeStamp start="4:11" end="4:20">

Remember we are using this trigger with the purpose of allowing `public.user` table have access `auth.users` table. We need a trigger since these two tables have different schemas. 

</TimeStamp>
