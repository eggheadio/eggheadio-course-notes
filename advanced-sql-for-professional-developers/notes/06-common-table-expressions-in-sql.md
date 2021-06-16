# [Common Table Expressions in SQL](https://egghead.io/lessons/postgresql-common-table-expressions-in-sql)

## How to Create Common Table Expressions

<TimeStamp start="0:00" end="0:10">

We start off by using `with` and then assign it to a value (like a variable name) and then adding a query within parentheses.

```sql
with cte_name as ( [select, delete query] )
```

</TimeStamp>

<TimeStamp start="0:12" end="0:20">

```bash
with date as (select now() as date)
select * from dates;
```

</TimeStamp>

<TimeStamp start="0:35" end="0:44">

We don't end our CTE's with semicolon because they only last for the query.

</TimeStamp>

<TimeStamp start="2:12" end="2:36">

```sql
postgres=# select me.email, min(m.start_date) from members m
postgres=# left outer join (select distinct on (user_handle) user_handle, email
postgres=# from members
postgres=# order by user_handle, start_date desc) mr
postgres=# using(user_handle) group by mr.email;
```

</TimeStamp>

## Most Common CTE Use Case

<TimeStamp start="2:37" end="2:56">

Queries can start to get complicated. CTE's are great for breaking down complex queries into smaller pieces that are easier to understand and use.

</TimeStamp>

<TimeStamp start="2:56" end="3:24">

```sql
postgres=# with most_recent_membership as (
postgres=#      select distinct on (user_handle) user_handle, email
postgres=#          from members
postgres=#      order by user_handle, start_date desc
postgres=# )
postgres=# 
postgres=# select mr.email, min(m.start_date) from members m
postgres=# left outer join most_recent_membership mr using(user_handle) group by mr.email;
```

</TimeStamp>

## Using `delete` in CTE's

<TimeStamp start="3:33" end="3:46">

We can use `select` or `delete` with our CTE's.

We can use `delete` because of the `RETURNING` clause which will return whatever items we deleted

```sql
with moved_purchases as (
    delete from purchases
    RETURNING
)
insert into purchases_copy select * from moved_purchases;
```

</TimeStamp>