# [Aggregate Inline filters in SQL](https://egghead.io/lessons/postgresql-aggregate-inline-filters-in-sql)

## How `filter` Works

A `filter` clause is used to apply a `where` clause (aka filtered data) only to the column that the aggregate function is being applied to. `filter` isolates the `where` clause to only affect aggregate function output.

<TimeStamp start="0:01" end="0:11">

```sql
select min(date), sum(quantity) filter (where quantity > 5) from purchases;
```

</TimeStamp>

In the example above, `where quantity > 5` will only be applied to `sum(quantity)` all thanks to `filter`.

<TimeStamp start="0:28" end="0:35">

```sql
select min(date), sum(quantity) from purchases where quantity > 5;
```

</TimeStamp>

Without `filter`, the `where quantity > 5` code will be applied to `sum(quantity)` AND `min(date)`.

<TimeStamp start="0:58" end="1:09">

```sql
select min(date), sum(quantity) filter (where sum > 5) from purchases;
```

</TimeStamp>

Here's a diagram for more visual learners :)

![Image of code with and without filter](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1589829472/transcript-images/withwithoutfilter.jpg)

### Key Things to Remember

<TimeStamp start="1:28" end="1:45">

- `filter` can only be used after an aggregate function.

</TimeStamp>

<TimeStamp start="1:47" end="2:05">

- You can't reference the aggregated data in the `where` clause following `filter`.

</TimeStamp>

This code WILL NOT WORK. You'll get an error message if you do this.
