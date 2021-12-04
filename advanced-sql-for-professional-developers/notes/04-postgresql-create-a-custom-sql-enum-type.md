# [Create a Custom Enum Type](https://egghead.io/lessons/postgresql-create-a-custom-enum-type)

**Data integrity is something you should always have in mind**

We can ensure integrity by adding constraints to our tables. 

<TimeStamp start="0:16" end="0:28">

  A powerful feature of SQL is the ability to create our own types.

  ```sql
    create type user_status as enum ('member', 'instructor', 'developer');
    CREATE TYPE
  ```
  
<TimeStamp>

<TimeStamp start="0:33" end="0:42">

  We create a data type called `user_status` as an `enum` and give it the string options of `member`, `instructor`, `developer`.

</TimeStamp>

<TimeStamp start="1:18" end="1:27">

  We can then add a column on our users table using this newly create type:

  ```sql
    postgres=# alter table users add column status user_status 
  ```

</TimeStamp>

<TimeStamp start="1:35" end="1:44">

  Now we can update a users status using our custom user_status type:

  ```sql
    postgres =# update users set status = 'instructor' where first_name = 'Lucie'; 
  ```

</TimeStamp>

<TimeStamp start="1:55" end="2:06">

  Using a custom enum will save us from misspellings and data errors since it *requires* that we use one of the strings we previously defined.

</TimeStamp>