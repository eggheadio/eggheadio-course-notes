# 3 - Understanding Next.js GetStaticProps   

[Video Link]()

<TimeStamp start="0:22" end="0:28">

In this lesson we are going ot walk through the use of `getStaticProps` 

</TimeStamp>

<TimeStamp start="0"34" end="2:36">

Documentation for [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)

</TimeStamp>

<TimeStamp start="1:21" end="1:35">

Example on how to implement `getStaticProps`

```jsx
export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
    return {
        props: {
            name: 'Juri',
        }
    }
}
```

</TimeStamp>

<TimeStamp start="3:08" end="3:22">



</TimeStamp>


<TimeStamp start="3:30" end="3:39">


</TimeStamp>

<TimeStamp start="4:04" end="4:30">


</TimeStamp>

<TimeStamp start="5:00" end="5:12">


</TimeStamp>