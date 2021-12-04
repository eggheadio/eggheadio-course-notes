# [Create a Model for a Table and Run Migrations](https://egghead.io/lessons/prisma-create-a-model-for-a-table-and-run-migrations)

<TimeStamp start="0:02" end="0:06">

You can find more information about Prisma Schema in their [documentation](https://www.prisma.io/docs/concepts/components/prisma-schema)

</TimeStamp>

<TimeStamp start="0:07" end="0:20">

`model` is use to describe a table in our data base in prisma schema language

```jsx
model Product {
    id String @id @default(cuid())
    name String
    description String 
    price Int
}
```

</TimeStamp>

<TimeStamp start="1:21" end="1:26">

Run `npx prisma migrate dev` 

</TimeStamp>
