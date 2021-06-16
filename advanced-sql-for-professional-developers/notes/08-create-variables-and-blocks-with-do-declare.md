# [Create Variables and Blocks with Do / Declare](https://egghead.io/lessons/postgresql-create-variables-and-blocks-with-do-declare)

## How Do/Declare Works

<TimeStamp start="0:10" end="0:43">

```sql
postgres=# do $$
postgres$# declare 
postgres$# handle uuid := '29587e31-b631-4b2a-a31f-9771a43db98a';
postgres$# begin
postgres$# insert into members values (now(), null, handle, 'Stacy', 'stacy@gmail.com');
postgres$# end $$
postgres-#;
```

</TimeStamp>

<TimeStamp start="0:50" end="0:58">

We use `do` to define an anonymous code block. Follow these steps to create a do block.

1. Start with `do`. This is kind of like the function keyword in JavaScript.

</TimeStamp>

<TimeStamp start="0:59" end="1:07">

2. We have to include the `$$` which act like curly braces in JavaScript.

</TimeStamp>

<TimeStamp start="1:19" end="1:31">

3. Type `declare`. This initiates the declaration section of the block where variables are declared.

</TimeStamp>

<TimeStamp start="1:32" end="1:53">

4. Now declare your variable name followed by the variable type. We assign value to the variable using `:=` and set it equal to whatever value we want. **End the statement with a ;**

</Timestamp>

<TimeStamp start="2:01" end="2:10">

5. Type `begin`. All statements after the `begin` command will be executed.

6. Include the command you would like to be executed.

</TimeStamp>

<TimeStamp start="2:11" end="2:17">

7. End your statement with `end $$` and **don't forget your ;**.

</TimeStamp>

## Do/Declare with `if`

We can add an `if` clause into a do/declare block

<TimeStamp start="3:44" end="4:04">

```sql
postgres=# do $$
postgres$# declare
postgres$# handle uuid := '29587e31-b631-4b2a-a31f-9771a43db98a';
postgres$# startDate date;
postgres$# 
postgres$# begin
postgres$# select start_date into startDate from members where user_handle = handle;
postgres$# if (startDate is not null) then
postgres$# insert into members values (startDate, null, uuid_generate_v4(), 'Melissa', 'melissa@gmail.com');
postgres$# end if;
postgres$# end $$;
```

## Using Built-in Functions When Declaring Variables

<TimeStamp start="4:06" end="4:23">

We can use built-in functions with our variables. Here's an example.

```sql
postgres=# do $$
postgres$# declare
postgres$#     handle uuid := '29587e31-b631-4b2a-a31f-9771a43db98a';
postgres$#     someDate date := '2019-04-01';
postgres$#     createDate date := least('2019-01-12', someDate);
postgres$# begin
postgres$#      insert into members values (createDate, null, handle, 'Jason', 'Anderson');
postgres$# end;
postgres$# $$
```

In this example, the `least` function is used.

</TimeStamp>

