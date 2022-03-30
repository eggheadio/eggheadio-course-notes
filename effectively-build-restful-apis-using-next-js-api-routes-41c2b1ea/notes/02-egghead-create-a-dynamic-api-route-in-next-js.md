## 02. Create a static REST endpoint in Next.js

<Timestamp start="0:15" end="0:18">
    
```jsx
function handler(req, res) {
    const {slug} = req.query

    res.json({
        slug
    })
}

export default handler
```

</Timestamp>


<Timestamp start="0:45" end="0:47">
    
Run `http localhost:3000/api/dynamic/one`

</Timestamp>

<Timestamp start="1:12" end="1:14">
    
To create dynamic API routes, you need to create files that uses "[]"

</Timestamp>