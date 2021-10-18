# Solutions

## 01.
Profile users younger than 40
```sql
explain analyse select * from users where age < 40;
```

Profile users older than 40
```sql
explain analyse select * from users where age > 40;
```

What's the difference in performance time?