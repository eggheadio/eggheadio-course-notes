# Setup
## For mac 
[install homebrew](https://brew.sh/)

Ensure homebrew is up-to-date, run:
1. `brew doctor`
2. `brew update`

Now that brew is up to date, run:

`brew install postgres`

## For windows
[Installer](https://www.postgresql.org/download/windows/)

## Run postgres
After installation open terminal and run `psql postgres`

If installed correctly, you should see output in your terminal similar to this: 

```bash
$ psql postgres
psql (11.2)
Type "help" for help.

$ postgres=# 
```

## Create Tables
```sql
create table users (
user_handle int Primary key,
first_name text,
last_name text,
email text,
gender text,
age int,
language text
);
```
```sql
create table purchases (
date date,
user_handle int,
sku int,
quantity int
);
```
```sql
create table products (
sku int,
product text,
price money
);
```

## Lesson Errata
if you see this error: 
```text
psql: could not connect to server: No such file or directory
  Is the server running locally and accepting
  connections on Unix domain socket "/var/run/postgresql/.s.PGSQL.5432"?
```

Run: 
`brew services start postgresql`

If the error persists, it is likely that you have two versions of postgres running on your machine. Run this command to upgrade postgres via brew: `brew postgresql-upgrade-database`.
