# [Bulk Insert and Export Data with CSV Files](https://egghead.io/lessons/postgresql-bulk-insert-and-export-data-with-csv-files)

This is the format when using Postgres:

<TimeStamp start="0:22" end="0:37">

  ```sql
    postgres=# copy <table name> <column names> from '<full file path to CSV file>' DELIMITER ',' CSV HEADER; 
  ```
  ![Bult Insert Image](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1589829471/transcript-images/bulk-insert.jpg)

  This comand will bulk insert all rows from the file into the table.

  ![SQL Bulk Import Gif](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1589830294/transcript-images/sql-bulkimport.gif)

</TimeStamp>


<TimeStamp start="0:48" end="1:13">

  The `copy` command makes this possible. Defining columns is optional, and renames the columns from the original file. If left out, `HEADER` will be pulled in from the imported file. 

</TimeStamp>

<TimeStamp start="1:15" end="1:33">

  In this case, the `DELIMITER` defaults to tabs, but with CSV we need to choose commas (this works like a key value pair).

</TimeStamp>


<TimeStamp start="1:36" end="1:58">

  And `CSV` and `HEADER` are two separate options: `CSV` for the file type, `HEADER` tells the `copy` command that the first row in the file contains headers and shouldn't be copied into the DB.

</TimeStamp>

<TimeStamp start="2:15" end="2:25">

  If you change "from" to "to" you can **export a copy of data** to the file **FROM the DB** as a CSV.

  ![Bulk Insert Reverse Image](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1589829472/transcript-images/bulk-insert-reverse-to.jpg)

</TimeStamp>

