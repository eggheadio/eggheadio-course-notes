# [Casting Types in SQL](https://egghead.io/lessons/postgresql-casting-types-in-sql)

<TimeStamp start="0:23" end="0:41">

  When creating columns we need to include their types.

  Sometimes we need to coerce a type to another type especially when joining tables, to do this we can use `cast`:

  ```sql
    postgres=# select cast (now() as date);

    postgres=# select cast ('100' as integer);
  ```
</TimeStamp>

<TimeStamp start="0:41" end="0:53">
  Postgres allows us to use the shorthand `::` between the types in place of using `cast...as...`:

  ```sql
    postgres=# select now()::date 
  ``` 
</TimeStamp>


  ## Example Implementation: 

  We have a table where a date column is set as `datetime` type, and we create a new one where a date column is simply the `date` type. 

<TimeStamp start="0:56" end="1:23">
 
  The first create a temporary users table and insert a user:

  ```sql
    postgres=# create temporary table users_temp (create_date date, user_handle uuid, first_name text, last_name text, email text);

    postgres=# insert into users_temp values (now(), uuid_generate_v4(), 'michelle', 'jones');
  ```

</TimeStamp>

  ![Casting Types 1 Image](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1589829471/transcript-images/casting-types-1.jpg)

<TimeStamp start="1:23" end="1:35">

  Then we create an inner join on the `create_date` column:

  ```sql
    postgres=# select create_date from users_temp u inner join (select now() as date) n on u.create_date = n.date; 
  ```
</TimeStamp>

<TimeStamp start="1:59" end="2:26">

  This join will not work because one (`n.date`) is using `datetime` and one is using `date`(`create_date`) so we get back an empty join table.

  We want to cast the `datetime` type as `date`.

</TimeStamp>

  ![Casting Types 2 Image](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1589829472/transcript-images/casting-types-2.jpg)

  ```sql
    postgres=# select create_date from users_temp u inner join (select now()::date as date) n on u.create_date = n.date; 
  ```

<TimeStamp start="2:25" end="2:34">

  Now, `select now()::date as date` is the same as `select cast (now() as date) as date`.

</TimeStamp>