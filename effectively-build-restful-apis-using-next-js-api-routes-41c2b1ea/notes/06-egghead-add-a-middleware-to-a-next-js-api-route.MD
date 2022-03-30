## 06. Add a middleware to a Next.js API route

<Timestamp start="1:04" end="1:06">
    
```jsx
function handler(req, res) {
    if (!req.headers.authentication) {
        res.status(401).json({message: 'error'})
    }
    res.status(200).json({message: 'OK!'})
}

export default handler
```

</Timestamp>


<Timestamp start="1:20" end="1:23">
    
```jsx
const withAuthentication = (handlerFn) => (req, res) => {
    if (!req.headers.authentication) {
        res.status(401).json({message: 'error'})
    }
    return handlerFn(req,res)
}
```

</Timestamp>

