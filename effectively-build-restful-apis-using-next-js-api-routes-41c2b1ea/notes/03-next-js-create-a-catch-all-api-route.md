## 03. Create a Catch All API route

<Timestamp start="0:40" end="0:43">
    
```jsx
function handler(req, res) {
    const {slugs} = req.query

    res.json({
        slugs
    })
}

export default handler
```

</Timestamp>


<Timestamp start="1:20" end="1:21">
    
Run `http localhost:3000/api/catchall/one/two`

</Timestamp>

<Timestamp start="1:34" end="1:14">
    
To create a catch all API route, you need to create a file that uses "[...]"

</Timestamp>