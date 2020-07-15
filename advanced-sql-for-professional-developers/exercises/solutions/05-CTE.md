# Solutions

## 01.
```sql
WITH average_purchase AS (
  SELECT 
    user_handle, 
    sku,
    (SELECT avg(quantity) 
      FROM 
        Purchases 
      WHERE 
        user_handle = p.user_handle and sku = p.sku
    ) 
  FROM 
    Purchases p
  GROUP BY 
    user_handle, 
    sku
)
SELECT 
  *
FROM 
  average_purchase
ORDER BY 
  user_handle;
```
## 02.
This solution assumes that you want to find all the average purchases for the user with an id of `59`

```sql
WITH average_purchase AS (
  SELECT 
    user_handle, 
    sku,
    (SELECT avg(quantity) 
      FROM 
        Purchases 
      WHERE 
        user_handle = p.user_handle and sku = p.sku
    ) 
  FROM 
    Purchases p
  GROUP BY 
    user_handle, 
    sku
)

SELECT 
  *
FROM 
  average_purchase
WHERE user_handle = 59
ORDER BY 
  user_handle;
```

```
 user_handle |   sku    |          avg           
-------------+----------+------------------------
          59 | 18302922 |     4.0000000000000000
          59 | 18302974 |    12.0000000000000000
          59 | 18303310 |    14.0000000000000000
          59 | 18303379 | 1.00000000000000000000
          59 | 18303391 | 1.00000000000000000000
          59 | 18303401 |     5.0000000000000000
          59 | 18303493 |    11.0000000000000000
          59 | 18303736 |    11.0000000000000000
          59 | 18303773 |    12.0000000000000000
```