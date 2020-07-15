# [Create and Safely Handle Nulls in SQL](https://egghead.io/lessons/postgresql-create-and-safely-handle-nulls-in-sql)

## How `coalesce` Works

The `coalesce` function accepts an unlimited number of arguments and returns the first non-null argument.

```sql
select title, coalesce(excerpt, left(body, 40)) from posts;
```

This code above will return `excerpt`. If `excerpt` is null, then it will return the first 40 characters in the `body` column of the row. If both are null, then it will jus return null.

## Using `nullif` with `coalesce`

What if one of the values for the arguments passed in to `coalesce` isn't null but is just an empty string?

In the code example above, if the value for `excerpt` is an empty string, we want the output of `left(body, 40)` to be returned. But `coalesce` won't interpret an empty string as null.

If we want an empty string (or any value for that matter) to interpretted as null, we can use the `nullif` function.

```sql
select title, coalesce(nullif(excerpt, ''), left(body, 40)) from posts;
```

`nullif` will return `left(body, 40)` if `excerpt` is equal to `''`. Otherwise, it will just return `excerpt`.
