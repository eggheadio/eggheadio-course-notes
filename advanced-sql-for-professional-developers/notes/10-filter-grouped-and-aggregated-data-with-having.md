# [Filter Grouped and Aggregated Data with Having](https://egghead.io/lessons/postgresql-filter-grouped-and-aggregated-data-with-having)

## Why We Need `having`

If we want to filter an data using aggregate functions, we can't use `where`. That will return an error.

```sql
select user_handle, sum(quantity) as total from purchases where sun(quantity) > 5 group by user_handle;
```

This code will throw an error. This is where `having` comes in.

## How `having` Works

Look at this code to see how `having` clause is formated.

```sql
select user_handle, sum(quantity) as total from purchases group by user_handle having sum(quantity) > 5;
```

Notice that `having` is often used in conjunction with `group by`. We can use `having` without `group by`. This way, it will treat all rows as one huge group. This is not very common though.

### `where` vs `having`

This `having` code example above groups rows together by `user_handle` and **then** filters the rows.

```sql
group by user_handle having sum(quantity) > 5;
```

If we look at the `where` code example, the opposite happens. The rows are filtered **then** grouped.

```sql
where sum(quantity) > 5 group by user_handle;
```

### Examples of Aggregate Functions

I was a little confused by the term "aggregate functions". So I looked it up.

An **Aggregate function** is a function that takes multiple inputs and performs some sort of operation on them to produce one output.

Examples of aggregate functions include:

- `sum()`

- `avg()`

- `min()`

- `max()`

In both code examples, `sum(quantity)` is used.
