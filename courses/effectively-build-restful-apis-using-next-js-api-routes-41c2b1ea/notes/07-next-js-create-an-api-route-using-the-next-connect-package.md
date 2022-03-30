## 07. Create an API Route Using the next-connect Package

<Timestamp start="0:05" end="0:07">
    
```jsx
const handler = nextConnect()
.get((req, res) => res.status(200).json({message: 'GET!'}))
.post((req, res) => res.status(200).json({message: 'POST!'}))
.patch((req, res) => res.status(200).json({message: 'PATCH!'}))
.put((req, res) => res.status(200).json({message: 'PUT!'}))
.delete((req, res) => res.status(200).json({message: 'DELETE!'}))
```

</Timestamp>
