# [Create a Relation Between Two Tables in the Prisma Schema](prisma-create-a-relation-between-two-tables-in-the-prisma-schema)

<TimeStamp start="0:12" end="0:25">

First, we are going to create a new table:

```jsx
model Review{
    id String @id @default(cuid())
    text String
    rating Int
}
```

</TimeStamp>

<TimeStamp start="0:38" end="0:50">

To create relations between tables, add the following to the `Products` table: 

```jsx
model Product {
    id String @id @default(cuid())
    name String
    description String 
    price Int
    reviews Review[]
}
```

</TimeStamp>

<TimeStamp start="0:54" end="0:58">

If you want to learn more about relationships between tables visit [here](https://docs.microsoft.com/en-us/office/troubleshoot/access/define-table-relationships#:~:text=A%20one%2Dto%2Dmany%20relationship,one%2Dto%2Dmany%20relationship.)

</TimeStamp>

<TimeStamp start="1:00" end="1:06">

When you save the file `schema.prisma` you'll see there is a lot information auto-completed.

</TimeStamp>

<TimeStamp start="1:19" end="1:22">

We recommend you to change the first character of Products to lower case.

</TimeStamp>

<TimeStamp start="1:30" end="1:37">

In our app, a review must be related to a product. To do that you need to delete the question mark in `Review` table.

</TimeStamp>

<TimeStamp start="1:54" end="2:00">

Run `npx prisma migrate dev` 

</TimeStamp>


