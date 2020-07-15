# [Pattern Matching and Regular Expressions in SQL](https://egghead.io/lessons/postgresql-pattern-matching-and-regular-expressions-in-sqlvvv)

## How `like` Works

If we want to find data the matches a certain pattern, we use `like`. `like` will query whatever data matches a pattern that we define. There different types of patterns that we can pass to `like`.

### How to Define Patterns

- `like 'string'` - When we specify a string, `like` will find an exact match for that string.

    ```sql
    select * from users where first_name like 'tyler';
    ```

    Only returns rows where `first_name` matches `tyler` **exactly**.

- `like 's____'`- This will return a string that starts with s and has 4 letter/characters following. So every string that is returned will have to start with the same letter and be the same length.

    ```sql
    select * from users where first_name like 't____';
    ```

    Only returns rows where `first_name` starts with t and is 5 characters long.

- `like 's%'` - This will return a string that starts with 's'. The length of the string doesn't matter here. As long as it starts with 's'.

    ```sql
    select * from users where first_name like 't%';
    ```

    Returns rows where `first_name` starts with t.

Here's a little doodle that breaks this down visually.

![Image of like options](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1589829472/transcript-images/like-illustration.jpg)

### Combining Patterns

We can combine patterns to get desired results.

```sql
 select * from users where first_name like '_y%';
```

Returns all rows where `first_name` is has 'y' as it's second letter. Length doesn't matter.

## How `not like` Works

What if we want to do the reverse of `like`? Aka return all rows that DON'T match the specified pattern.

We do this with `not like`.

```sql
select from users where first_name not like '_y%';
```

Returns all rows where `first_name` does NOT have 'y' as a second letter.

### `ilike` in Postgres

Postgres has the `ilike` operator which is case insensitive. So `_y%` and `_Y%` will return the same thing.

## `similar to` and Regular Expressions

If we want to use regular expressions when matching patterns, we have to use `similar to`.

`similar to` returns true or false depending on whether or not the patter matches the given string.

```sql
select from users where first_name similar to '(t|m)%';
```

The regular expression in the code above `(t|m)%'` is basically saying that if `first_name` starts with 't' or (aka `|` symbol) 'm', return the row.

Here's a break down of regex symbols in SQL.

- `|` - either or

- `*` - repition of the previous item zero or more times

- `+` - repition of the previous item one or more times

- `?` - repition of the previous item zero or one time


## Posix in SQL

Posix gives a more powerful way to pattern patch. Here's an example of posix.

```sql
select * from users where first_name ~ 'tyler';
```

Only returns rows where `first_name` matches `tyler`.

We can add `~*` for the match to be case insensitive.

```sql
select * from users where first_name ~* 'Tyler';
```
