# [Perform Multiple Steps in One with Transactions](https://egghead.io/lessons/postgresql-perform-multiple-steps-in-one-with-transactions)

## How Transactions Work

<TimeStamp start="0:25" end="0:39">

Transactions allow us to perform multiple steps in just one single operation. If there's an error inside of the transaction block, everything will be rolled back.

</TimeStamp>

Follow these steps for creating a transaction:

<TimeStamp start="0:40" end="0:46">

1. Use the `start transaction` command followed by `;`

</TimeStamp>

<TimeStamp start="0:47" end="0:54">

2. Include the queries you want to be executed.

3. End the transaction with `commit;`. **Note: None of the code within the transaction block will be executed unless you run `commit;

</TimeStamp>

<TimeStamp start="1:10" end="1:38">

```sql
postgres=# begin;

postgres=# insert into purchases values ('2019-10-10', uuid_generate_v4(), 1);

postgres=# savepoint insert_save_point;

postgres=# insert into purchases values ('2019-05-01', uuid_generate_v4(), 1);

postgres=# rollback to insert_save_point;

postgres=# update purchases set quantity = 8;

postgres=# commit;
```

</TimeStamp>

### `begin` vs `start transaction`

<TimeStamp start="1:40" end="1:48">

Both `begin` and `start transaction` are valid when making a transaction. They do the same thing.

</TimeStamp>

### How `savepoint` works

<TimeStamp start="1:51" end="2:06">

`savepoint` is used to put a bookmark in our transaction. It's used in conjunction with the `rollback`.

</TimeStamp>

In the code above, once this transaction is executed, it will rollback to the savepoint so that we won't see the second `insert` executed. The `update` will be executed.
