```sql
SELECT 
  u.user_handle, 
  sum(p.quantity) 
FROM 
  users u 
LEFT JOIN
  purchases p 
ON 
  u.user_handle = p.user_handle 
WHERE 
  u.age > 19 
AND 
  u.age < 30 
AND 
  u.gender = 'Female' 
GROUP BY 
  u.user_handle 
HAVING 
  sum(p.quantity) > 100 
ORDER BY 
  user_handle;
```
Answer:
```
user_handle | sum 
-------------+-----
           2 | 146
          36 | 126
          93 | 110
```