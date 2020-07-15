# [Perform Multiple Steps in One with Transactions](https://egghead.io/lessons/postgresql-perform-multiple-steps-in-one-with-transactions)

## How Transactions Work

Transactions allow us to perform multiple steps in just one single operation. If there's an error inside of the transaction block, everything will be rolled back.

Follow these steps for creating a transaction:

1. Use the `start transaction` command followed by `;`

2. Include the queries you want to be executed.

3. End the transaction with `commit;`. **Note: None of the code within the transaction block will be executed unless you run `commit;

```sql
start transaction;

insert into purchases values ('2019-05-20', uuid-generate_v4(), 1);
update purchases set quantity = 5 where date = '2019-95-20';
commit;
```

### `begin` vs `start transaction`

Both `begin` and `start transaction` are valid when making a transaction. They do the same thing.

### How `savepoint` works

`savepoint` is used to put a bookmark in our transaction. It's used in conjunction with the `rollback`.

```sql
begin;

insert into purchases values ('2019-10-10', uuid_generate_v4(), 1);

savepoint insert_save_point;

insert into purchases values ('2019-05-01', uuid_generate_v4(), 1);

rollback to insert_save_point;

update purchases set quantity = 8;

commit;
```

In the code above, once this transaction is executed, it will rollback to the savepoint so that we won't see the second `insert` executed. The `update` will be excuted.
