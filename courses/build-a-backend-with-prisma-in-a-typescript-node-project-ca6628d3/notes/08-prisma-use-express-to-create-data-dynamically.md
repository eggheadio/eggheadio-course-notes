# [Use Express to Create Data Dynamically](prisma-use-express-to-create-data-dynamically)


<TimeStamp start="0:21" end="0:29">

```jsx 
const {body} = req;
console.log(body); //undefined 
```

</TimeStamp>

<TimeStamp start="0:30" end="0:45">

We need to apply a middleware to tell our express app that it should forward the JSON data that comes in our request to the handler. 

```jsx 
const app = express();
app.use(express.json())
```

</TimeStamp>

<TimeStamp start="0:50" end="1:10">

Remove the hard coded data and put in the data that comes from the request body: 

```jsx
app.post('/products', async (req: Request, res: Response)=>{
    const {body} = req;
    const products = await prisma.product.create({
        data: {
            name: body.name,
            description: body.description,
            price: body.price
        }
    });
    res.json(products);
});
```

</TimeStamp>

