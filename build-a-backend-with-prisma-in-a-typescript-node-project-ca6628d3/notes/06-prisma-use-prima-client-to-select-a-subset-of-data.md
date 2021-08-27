# [Use Prisma Studio to Create a Record](prisma-use-prisma-client-to-find-many-records-in-a-table)

<TimeStamp start="0:14" end="0:35">

```jsx
app.get('/products', async (req: Request, res: Response)=>{
    const products = await prisma.product.findMany({
        where: {
            name: {
                equals: 'T-Shirt'
            }
        }
    });
    res.json(products);
});
```

</TimeStamp>

<TimeStamp start="1:10" end="1:20">

[Here](https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries) you can find the documentation the commands and key words for the queries using Prisma client.

</TimeStamp>



