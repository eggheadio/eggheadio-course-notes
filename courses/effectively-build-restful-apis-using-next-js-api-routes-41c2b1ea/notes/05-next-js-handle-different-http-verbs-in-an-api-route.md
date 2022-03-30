## 05. Handle Different HTTP verbs in an API Route

<Timestamp start="0:10" end="0:13">
    
```jsx
function handler(req, res) {
    const {method} = req.query

    if (method === 'GET') {
        res.status(200).json({message: 'GET!'})
    }
}

export default handler
```

</Timestamp>


<Timestamp start="0:50" end="0:52">
    
Run `http GET localhost:3000/api/verbs`

</Timestamp>

<Timestamp start="1:09" end="1:11">
    
```jsx
res.status(404).json({message: 'not found'})
```

</Timestamp>

<Timestamp start="1:29" end="1:31">
    
```jsx
 if (method === 'POST') {
        res.status(200).json({message: 'POST!'})
    }
```

</Timestamp>

<Timestamp start="2:00" end="2:02">
    
```jsx
 if (method === 'PATCH') {
        res.status(200).json({message: 'PATCH!'})
    }
```

</Timestamp>

<Timestamp start="2:10" end="2:12">
    
```jsx
 if (method === 'PUT') {
        res.status(200).json({message: 'PUT!'})
    }
```

</Timestamp>

<Timestamp start="2:18" end="2:20">
    
```jsx
 if (method === 'DELETE') {
        res.status(200).json({message: 'DELETE!'})
    }
```

</Timestamp>