# [Work with JSON Data in SQL](https://egghead.io/lessons/egghead-work-with-json-data-in-sql)

## JSON in SQL

JSON is an accepted data type in Postgres. If we want to insert JSON into our table, we have to use parantheses and wrap our JSON objects in single quotes.

```sql
insert into items values (uuid_generate_v4(), (
  '{"color": "blue", "weight":"2", "tags":{"department": "electronics", "section": "computer"}}'
))
```

## Using `info` to Query JSON Data

If we want to `select` our JSON data, we use `info`.

```sql
select info from items;
```

### Operators for Querying JSON Data


- `->` operator - Used with JSON object key to return value. Returns the value in JSON format (aka string format)

    ```sql
    select info -> 'color' as color from items;
    ```

- `->>` operator - Does the same thing as `->` except it returns the value as plain text. There will be no quotes around the returned value.

    ```sql
    select info ->> 'color' as color from items;
    ```

![Operators for Querying JSON Data Image](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1589829472/transcript-images/json-data.jpg)

### Querying Nested JSON Data

If we want to query nested data, we have to use `->` and `->>`.

```sql
select info -> 'tags' ->> 'department' as department from items;
```

We place the outer key after `->` and the nested key we want the value of after `department`.

### Using Aggregate Functions with JSON Data

We can use aggregate functions on JSON objects. We just have to cast items to integers using `::integer`.

```sql
select min((info ->> 'weight')::integer) from items;
```

**REMEMBER** Make sure to use `->>` since it will convert the JSON data to text first. If you don't, casting won't work.

## Using `json_each`

We can use `json_each` allows us to expand the outer most JSON object into key value pairs.

```sql
select json_each (info) from items;
```

## Using `json_object_keys`

Using `json_object_keys` returns keys for the outermost JSON object. We specify the key wamt the nested object keys for.

```sql
select json_object_keys (info -> tags) from items;
```
