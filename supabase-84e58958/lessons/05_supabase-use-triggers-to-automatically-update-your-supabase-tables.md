# Use Triggers to Automatically Update Your Supabase Tables

[Video link](https://www.egghead.io/lessons/supabase-use-triggers-to-automatically-update-your-supabase-tables?pl=supabase-84e58958)

<TimeStamp start="1:04" end="1:09">

More on [triggers](https://supabase.io/blog/2021/07/30/supabase-functions-updates#postgresql-triggers).

</TimeStamp>

<TimeStamp start="3:20" end="3:30">

```sql
-- inserts a row into public.user
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.user (id)
  values (new.id)
  return new;
end;
$$ language plpgsql security definer;

-- trigger the function every time a user is created
create trigger on_auth_user_create
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

</TimeStamp>