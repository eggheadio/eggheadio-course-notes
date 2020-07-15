# Solutions

## 01.
First create the ENUM
```sql
create type user_role as enum ('buyer', 'seller', 'admin');
```

Then add the column to the users table
```sql
alter table users add column role user_role;
```
