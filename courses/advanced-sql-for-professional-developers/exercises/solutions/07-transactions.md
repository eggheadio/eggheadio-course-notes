# 07

## 01
```sql
start transaction;
do $$
declare
  p text := 'Wine - Winzer Krems Gruner';
begin
if ((select exists(select 1 from products WHERE product = p)) is false) then
  rollback;
end if;
end $$;
UPDATE users SET credit_card = 12341234 WHERE user_handle = 1;
insert into purchases values (now(), 1,18302897,5);
end;
```
```
postgres=# select * from users;
 user_handle | first_name | last_name  |          email          | gender | age | language | credit_card 
-------------+------------+------------+-------------------------+--------+-----+----------+-------------
           1 | Agustin    | Gillingham | agillingham8@devhub.com | Male   |  82 | Tsonga   |    12341234
```
```
postgres=# select * from purchases where user_handle = 1;
    date    | user_handle |   sku    | quantity 
------------+-------------+----------+----------
 2020-05-11 |           1 | 18302897 |        5
```
