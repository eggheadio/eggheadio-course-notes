# Common Table Expressions

## 01.
The query below finds the average of all purchases relative to the user.

Your goal is to break the subquery out into a CTE so that you can re-use the logic elsewhere.

```sql
select user_handle, sku, 
(select avg(quantity) from Purchases 
  where user_handle = p.user_handle and sku = p.sku
) from Purchases p 
group by user_handle, sku;
```

## 02. 

Your goal is to find the average quantity a single user is purchasing of each product. You will need to use the CTE that you defined in Part 1 to do so.