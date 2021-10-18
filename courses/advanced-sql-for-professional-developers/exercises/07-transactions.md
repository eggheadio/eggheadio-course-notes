# Guarantee Database Interactions with Transactions

## Set up

```sql
$ drop table users;
```

```sql
$ create table users (
user_handle int Primary key,
first_name text,
last_name text,
email text,
gender text,
age int,
language text,
credit_card int
);
```
```sql
insert into users values ('1', 'Agustin', 'Gillingham', 'agillingham8@devhub.com','Male','82','Tsonga');
```

## 01

Your goal is to guarantee that a payment is successfully processed. To do so, you will need to initiate a transaction that:
 - checks if product is available
 - inserts payment info into users table
 - adds item to purchases table

 If any of these actions fail, the transaction should be aborted.

 ### 01.a

 Agustin Gillingham is using his credit card number `12341234` to purchase 5, `Wine - Winzer Krems Gruner`s. You're goal is to ensure that the actions outlined in 01 are successful.

Hint: You will need to use Do/Declare blocks to check for the [existence of a product]( https://stackoverflow.com/questions/7471625/fastest-check-if-row-exists-in-postgresql).
