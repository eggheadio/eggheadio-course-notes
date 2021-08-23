# [Use Prisma Client to Query for Related Data](prisma-use-prisma-client-to-query-for-related-data)

<TimeStamp start="0:02" end="0:07">

Prisma studio is aware of the relations between tables, which makes it easy to manipulate the data.

</TimeStamp>

<TimeStamp start="0:10" end="0:17">

If we create a new record in `Review` table, we will get prompted in the `product` column the list of products saved in `Product` table.

</TimeStamp>

<TimeStamp start="0:44" end="0:51">

Add the following code inside `app.get('/products', async (req: Request, res: Response))...`

```jsx
include: {
    reviews:  true
}
```
</TimeStamp>

