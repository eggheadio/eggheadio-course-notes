# [On Conflict Do Something Clause](https://egghead.io/lessons/postgresql-on-conflict-do-something-clause)

If we want to have completely unique records, like user accounts with email info, we have to check to see if data already exists in the DB and *then* insert the data only if it does not. 

Normally this would require 2 separate queries, but postgres offers a solution:

```sql
  postgres=# insert into users (user_handle, first_name, last_name, email) values (uuid_generate_v4(), 'Lucie', 'Jones', 'Lucie-Jones@gmail.com') on conflict do nothing:
```

`on conflict do nothing` is the important part to notice here.

When this runs, if there is a conflict found the record will not be entered into the DB.

We can also choose to `update` instead of doing `nothing`: 

```sql
  postgres=# insert into users values (uuid_generate_v4(), 'Lucie', 'Hawkins', 'Lucie-Jones@gmail.com') on conflict (email) do update set first_name = excluded.first_name, last_name = excluded.last_name; 
```

With this command (`on conflict <column name> do`), you choose the column in which there is a conflict (user has same email address, but has changed their last name, in this case), and then define the columns you wants to update when this conflict occurs. *(eg. Lucie Jones' name will be updated to Lucie Hawkins because her account was identified by the email address conflict)*

The `excluded.` refers to incoming data for that column.

This action is commonly referred to as an **"upsert"**.

We can also update this query with a `where` clause.

```sql
  postgres=# insert into users as u values (uuid_generate_v4(), 'Lucie', 'Cook', 'Lucie-Jones@gmail.com') on conflict (email) do update set first_name = excluded.first_name, last_name = excluded.last_name where u.first_name <> 'Lucie'; 
```

**`<>` for *'does not equal'***

In this example, if there is an `email` conflict *and*  the original records `firstname` is equal to 'Lucie' the row will not be updated 
