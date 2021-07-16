# [Pattern Matching and Regular Expressions in SQL](https://egghead.io/lessons/postgresql-pattern-matching-and-regular-expressions-in-sqlvvv)

## How `like` Works

If we want to find data the matches a certain pattern, we use `like`. `like` will query whatever data matches a pattern that we define. There different types of patterns that we can pass to `like`.

### How to Define Patterns

<TimeStamp start="0:15" end="0:31">

- `like 'string'` - When we specify a string, `like` will find an exact match for that string.

```sql
postgres=# select * from users where first_name like 'tyler';
```

Only returns rows where `first_name` matches `tyler` **exactly**.

</TimeStamp>

<TimeStamp start="0:50" end="1:15">

- `like 's____'`- This will return a string that starts with s and has 4 letter/characters following. So every string that is returned will have to start with the same letter and be the same length.

```sql
postgres=# select * from users where first_name like 't____';
```

Only returns rows where `first_name` starts with t and is 5 characters long.

</TimeStamp>

<TimeStamp start="1:16" end="1:29">

- `like 's%'` - This will return a string that starts with 's'. The length of the string doesn't matter here. As long as it starts with 's'.

```sql
postgres=# select * from users where first_name like 't%';
```

Returns rows where `first_name` starts with t.

</TimeStamp>

Here's a little doodle that breaks this down visually.

![Image of like options](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1589829472/transcript-images/like-illustration.jpg)

### Combining Patterns

<TimeStamp start="1:31" end="1:38">

We can combine patterns to get desired results.

```sql
 postgres=# select * from users where first_name like '_y%';
```

Returns all rows where `first_name` is has 'y' as it's second letter. Length doesn't matter.

</TimeStamp>

## How `not like` Works

<TimeStamp start="1:39" end="1:46">

What if we want to do the reverse of `like`? Aka return all rows that DON'T match the specified pattern.

We do this with `not like`.

```sql
postgres=# select from users where first_name not like '_y%';
```

</TimeStamp>

Returns all rows where `first_name` does NOT have 'y' as a second letter.

### `ilike` in Postgres

<TimeStamp start="1:50" end="2:00">

Postgres has the `ilike` operator which is case insensitive. So `_y%` and `_Y%` will return the same thing.

</TimeStamp>

## `similar to` and Regular Expressions

If we want to use regular expressions when matching patterns, we have to use `similar to`.

<TimeStamp start="2:20" end="2:32">

`similar to` returns true or false depending on whether or not the patter matches the given string.

```sql
postgres=# select from users where first_name similar to '(t|m)%';
```

</TimeStamp>

<TimeStamp start="2:50" end="3:04">

The regular expression in the code `(t|m)%'` is basically saying that if `first_name` starts with 't' or (aka `|` symbol) 'm', return the row.

</TimeStamp>

Here's a break down of regex symbols in SQL.

- `|` - either or

- `*` - repetition of the previous item zero or more times

- `+` - repetition of the previous item one or more times

- `?` - repetition of the previous item zero or one time


## POSIX in SQL

POSIX gives a more powerful way to pattern patch. Here's an example of POSIX.

<TimeStamp start="3:29" end="3:38">

```sql
postgres=# select * from users where first_name ~ 'tyler';
```

Only returns rows where `first_name` matches `tyler`.

</TimeStamp>

<TimeStamp start="3:39" end="3:50">

We can add `~*` for the match to be case insensitive.

```sql
postgres=# select * from users where first_name ~* 'Tyler';
```

</TimeStamp>