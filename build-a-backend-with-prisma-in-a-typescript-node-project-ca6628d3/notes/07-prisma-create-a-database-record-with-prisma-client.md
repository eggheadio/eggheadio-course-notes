# [Create a Database Record with Prisma Client](https://egghead.io/lessons/prisma-create-a-database-record-with-prisma-client)

<TimeStamp start="0:07" end="0:25">

```jsx
app.post('/products', async (req: Request, res: Response)=>{
    const products = await prisma.product.create({
        data: {
            name: 'Cargo Shorts',
            description: 'Lots of pockets',
            price: 70000
        }
    });
    res.json(products);
});
```

</TimeStamp>

<TimeStamp start="0:54" end="1:00">

To know more about Thunder Client visit their [home page](https://www.thunderclient.io/)

You can add this extension in the marketplace of VS Code. 

</TimeStamp>



<TimeStamp start="1:08" end="1:12">

We check in Prisma studio that the record was created

</TimeStamp>




