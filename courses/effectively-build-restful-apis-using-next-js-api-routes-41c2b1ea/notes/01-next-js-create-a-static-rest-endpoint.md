## 01. Create a static REST endpoint 

<Timestamp start="1:00" end="1:04">
    
```jsx
function handler(req, res) {
    res.json({
        greet: 'hello there'
    })
}

export default handler
```

</Timestamp>


<Timestamp start="1:05" end="1:07">
    
Run `http localhost:3000/api/greeting`

</Timestamp>

<Timestamp start="1:40" end="1:44">
    
Steps to create an API route: 
1. Create a folder `api` inside `pages` directory
2. Each file needs a function that that accepts two parameters `req` & `res` 
3. Export the function

</Timestamp>