## 08. Add middleware to an API Route created with next-connect

<Timestamp start="1:46" end="1:48">
    
```jsx
const handler = nextConnect()
.use(withAuthentication)
.get((req,res) => res.json({message: 'get'}))
```

</Timestamp>
