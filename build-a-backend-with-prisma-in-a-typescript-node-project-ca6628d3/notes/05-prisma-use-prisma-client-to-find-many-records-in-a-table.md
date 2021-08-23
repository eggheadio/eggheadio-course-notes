# [Use Prisma Studio to Create a Record](prisma-use-prisma-client-to-find-many-records-in-a-table)

<TimeStamp start="0:05" end="0:08">

To run the app, run `npm run dev`

</TimeStamp>

<TimeStamp start="0:14" end="0:21">

Prisma client can be used to get the data that is currently in the database and return it a JSON object.
</TimeStamp>

<TimeStamp start="0:24" end="0:50">

```jsx
import {PrismaClient} from '@prisma/client'
```

```jsx
const prisma = new PrismaClient();
app.get('/products', async (req: Request, res: Response)=>{
    cost products = await prisma.product.findMany();
    res.json(products);
});
```

</TimeStamp>

<TimeStamp start="1:11" end="1:20">

When using a Prisma Client, it's important to keep in mind that it gives a full type safe database access. 

</TimeStamp>

<TimeStamp start="1:50" end="1:57">

To find all the records in a table the best method to use is `.findMany`

</TimeStamp>
