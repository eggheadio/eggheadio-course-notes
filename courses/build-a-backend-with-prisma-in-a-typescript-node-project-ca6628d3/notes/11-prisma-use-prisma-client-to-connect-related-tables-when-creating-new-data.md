# [Use Prisma Client to Connect Related Tables when Creating New Data](https://egghead.io/lessons/prisma-use-prisma-client-to-connect-related-tables-when-creating-new-data)

<TimeStamp start="0:30" end="1:00">

```jsx
app.post('/reviews', async (req: Request, res: Response)=>{
    const {body}= req;
    const review = await prisma.review.create({
        data: {
            text: body.text,
            rating: body.rating,
            product: {
                connect: {
                    id: body.productId
                }
            }
        }
    });
    res.json(review);
});
```

</TimeStamp>
