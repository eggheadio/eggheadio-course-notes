## Import Data

### Create Users
```sql
copy users(user_handle,first_name,last_name,email,gender,age,language) FROM '/Users/{YOUR_USER}/{PATH_TO_PROJECT}//user-data.csv' DELIMITER ',' CSV HEADER;
```

### Create Purchases
```sql
copy purchases(date,user_handle,sku,quantity) FROM '/Users/{YOUR_USER}/{PATH_TO_PROJECT}/purchases-data.csv' DELIMITER ',' CSV HEADER;
```

### Create Products
```sql
copy products(sku,product,price) FROM '/Users/{YOUR_USER}/{PATH_TO_PROJECT}/product-data.csv' DELIMITER ',' CSV HEADER;
```
