# [Create Variables and Blocks with Do / Declare](https://egghead.io/lessons/postgresql-create-variables-and-blocks-with-do-declare)

## How Do/Declare Works


We use `do` to define an anonymous code block. Follow these steps to create a do block.

1. Start with `do`. This is kind of like the function keyword in JavaScript.

2. We have to include the `$$` which act like curly braces in JavaScript.

3. Type `declare`. This initiates the declaration section of the block where variables are declared.

4. Now declare your variable name followed by the variable type. We assign value to the variable using `:=` and set it equal to whatever value we want. **End the statement with a ;**

5. Type `begin`. All statements after the `begin` command will be executed.

6. Include the command you would like to be executed.

7. End your statement with `end $$` and **don't forget your ;**.


```sql
do $$
declare
handle uuid := '29587e31-b631-4b2a-a31f-9771a43db98a';
begin
insert into members values (now(), null, handle, 'Stacy', 'stacy@gmail.com)
end $$
;
```

## Do/Declare with `if`

We can add an `if` clause into a do/declare block

```sql
do $$
declare
handle uuid := '29587e31-b631-4b2a-a31f-9771a43db98a';
startDate date;

begin
select start_date into startDate from members where user_handle = handle;
if (startDate is not null) then
insert into members values (startDate, null, uuid_generate_v4(), 'Melissa', 'melissa@gmail.com');
end if;
end $$;
```

## Using Built-in Funtions When Declaring Variables

We can use built-in functions with our variables. Here's an example.

```sql
do $$
declare
    handle uuid := '29587e31-b631-4b2a-a31f-9771a43db98a';
    someDate date := '2019-04-01';
    createDate date := least('2019-01-12', someDate);
```

In this example, the `least` function is used.
