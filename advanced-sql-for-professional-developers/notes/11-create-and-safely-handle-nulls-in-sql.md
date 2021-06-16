# [Create and Safely Handle Nulls in SQL](https://egghead.io/lessons/postgresql-create-and-safely-handle-nulls-in-sql)

<TimeStamp start="0:01" end="0:19">

```sql
postgres=# create table posts (
postgres(# id serial primary key,
postgres(# title text,
postgres(# excerpt text,
postgres(# body text,
postgres(# create_at timestamp default current_timestamp,
postgres(# updated_at timestamp
postgres(# );
```

</TimeStamp>

<TimeStamp start="0:20" end="0:24">

```sql
postgres=# INSERT INTO posts (title, excerpt, body)
postgres-# VALUES
postgres-#    ('test post 1','test post excerpt 1','test post body 1'),
postgres-#    ('test post 2','','test post body 2'),
postgres-#    ('test post 3', null ,'test post body 3');

postgres=# select * from posts;
```

<TimeStamp>

## How `coalesce` Works

<TimeStamp start="0:57" end="1:13">

The `coalesce` function accepts an unlimited number of arguments and returns the first non-null argument.

```sql
select title, coalesce(excerpt, left(body, 40)) from posts;
```

</TimeStamp>

<TimeStamp start="1:20" end="1:30">

This code above will return `excerpt`. If `excerpt` is null, then it will return the first 40 characters in the `body` column of the row. If both are null, then it will jus return null.

</TimeStamp>

## Using `nullif` with `coalesce`

What if one of the values for the arguments passed in to `coalesce` isn't null but is just an empty string?

In the code example above, if the value for `excerpt` is an empty string, we want the output of `left(body, 40)` to be returned. But `coalesce` won't interpret an empty string as null.

If we want an empty string (or any value for that matter) to interpretted as null, we can use the `nullif` function.

<TimeStamp start="1:31" end="1:44">

```sql
select title, coalesce(nullif(excerpt, ''), left(body, 40)) from posts;
```

</TimeStamp>

`nullif` will return `left(body, 40)` if `excerpt` is equal to `''`. Otherwise, it will just return `excerpt`.
