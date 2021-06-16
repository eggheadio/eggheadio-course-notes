# [Work with JSON Data in SQL](https://egghead.io/lessons/egghead-work-with-json-data-in-sql)

## JSON in SQL

<TimeStamp start="0:10" end="0:33">

```sql
postgres=# insert into items values (uuid_generate_v4(), 
postgres(# (
postgres(# '{"color": "blue", "weight":"2", "tags":{"department": "electronics", "section": "computer"}}'
postgres(# )
postgres(# )
postgres-# ;
```

</TimeStamp>

<TimeStamp start="0:45" end="1:01">

JSON is an accepted data type in Postgres. If we want to insert JSON into our table, we have to use parentheses and wrap our JSON objects in single quotes.

</TimeStamp>

## Using `info` to Query JSON Data

<TimeStamp start="1:03" end="1:10">

If we want to `select` our JSON data, we use `info`.

```sql
postgres=# select info from items;
```

</TimeStamp>

### Operators for Querying JSON Data

<TimeStamp start="1:11" end="1:29">

- `->` operator - Used with JSON object key to return value. Returns the value in JSON format (aka string format)

```sql
postgres=# select info -> 'color' as color from items;
```

</TimeStamp>

<TimeStamp start="1:35" end="1:42">

- `->>` operator - Does the same thing as `->` except it returns the value as plain text. There will be no quotes around the returned value.

```sql
postgres=# select info ->> 'color' as color from items;
```

</TimeStamp>

![Operators for Querying JSON Data Image](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1589829472/transcript-images/json-data.jpg)

### Querying Nested JSON Data

<TimeStamp start="1:43" end="1:55">

If we want to query nested data, we have to use `->` and `->>`.

```sql
postgres=# select info -> 'tags' ->> 'department' as department from items;
```

</TimeStamp>

We place the outer key after `->` and the nested key we want the value of after `department`.

### Using Aggregate Functions with JSON Data

<TimeStamp start="2:10" end="2:30">

We can use aggregate functions on JSON objects. We just have to cast items to integers using `::integer`.

```sql
postgres=# select min((info ->> 'weight')::integer) from items;
```

</TimeStamp>

<TimeStamp start="2:32" end="2:39">

**REMEMBER** Make sure to use `->>` since it will convert the JSON data to text first. If you don't, casting won't work.

</TimeStamp>

## Using `json_each`

<TimeStamp start="2:49" end="3:01">

We can use `json_each` allows us to expand the outer most JSON object into key value pairs.

```sql
postgres=# select json_each (info) from items;
```

</TimeStamp>

## Using `json_object_keys`

<TimeStamp start="3:02" end="3:15">

Using `json_object_keys` returns keys for the outermost JSON object. We specify the key want the nested object keys for.

```sql
postgres=# select json_object_keys (info -> tags) from items;
```

</TimeStamp>