# [Limit the Amount of Returned Data with Prisma Client](https://egghead.io/lessons/prisma-limit-the-amount-of-returned-data-with-prisma-client)

<TimeStamp start="0:01" end="0:06">

We can use prisma to get back only a subset of information from the table. For example, you just want to display the text and the rating of the product that has been reviewed. 

</TimeStamp>

<TimeStamp start="0:16" end="0:27">

To do that we can modify our code like this: 

```jsx
include:{
    reviews: {
        select: {
            text: true,
            rating:true
        }
    }
}
```

</TimeStamp>

