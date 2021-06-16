# [Conditional returns with case / then](https://egghead.io/lessons/postgresql-conditional-returns-with-case-then)

## Case Expression

Case expressions are very similar to if statements in other programming languages.

<TimeStamp start="0:11" end="0:20">

This is how we initiate a case statement.

```sql
postgres=# select first_name,
postgres=# case when status is null then 'member' else status end
postgres=# from users;
```

<TimeStamp start="0:33" end="0:53">

`cases` statements are made up of `case when`, an expression, the `then` keyword, the results we want returned, and the `end` keyword which ends the case statement.

We can make our case statements more complex by adding more `when`'s and `then`'s.

</TimeStamp>

Here's a diagram to help :)

![Image of case statement anatomy](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1589829472/transcript-images/case-statement-anatomy.jpg)

### Using `where` in `case` Statements

<TimeStamp start="0:59" end="1:10">

If we would like to add additional filters for our table data, we can use `where`.

```sql
select first_name,
case when status is null then 'member' else status end
from users
where status is not null;
```

</TimeStamp>

The `where` statement above will return the opposite of the above code.

## `case` Statements within `where` Statements

<TimeStamp start="1:15" end="1:29">

We can use a `case` statement inside of a `where` statement.

```sql
where case when email is not null then start_date > '2019-01-01' end;
```

</TimeStamp>

**KEY TAKEAWAY: Case statements can be used wherever an expression is valid.**
