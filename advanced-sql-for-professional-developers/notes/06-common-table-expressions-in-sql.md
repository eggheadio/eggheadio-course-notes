# [Common Table Expressions in SQL](https://egghead.io/lessons/postgresql-common-table-expressions-in-sql)

## How to Create Common Table Expressions

We start off by using `with` and then assign it to a value (like a variable name) and then adding a query within parantheses.

```sql
with date as (select now() as date)
```

We don't end our CTE's with parantheses because they only last for the query.

Now we can use the CTE.

```bash
with date as (select now() as date)
select * from dates;
```

## Most Common CTE Use Case

Queries can start to get complicated. CTE's are great for breaking down complex queries into smaller pieces that are easier to understand and use.

## Using `delete` in CTE's

We can use `select` or `delete` with our CTE's.

We can use `delete` because of the `RETURNING` clause which will return whatever items we deleted

```sql
with moved_purchases as (
    delete from purchases
    RETURNING
)
insert into purchases_copy select * from moved_purchases;
```
