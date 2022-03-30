## 04. Create an Optional Catch All API route

<Timestamp start="0:40" end="0:43">
    
```jsx
function handler(req, res) {
    const {slugs} = req.query

    res.json({
        ({slugs})
    })
}

export default handler
```

</Timestamp>


<Timestamp start="2:00" end="2:02">
    
Run `http localhost:3000/api/optionalCatchAll/a/b/c`

</Timestamp>

<Timestamp start="2:03" end="2:05">
    
To create an optional catch all API route, you need to create a file that uses "[[...]]"

</Timestamp>