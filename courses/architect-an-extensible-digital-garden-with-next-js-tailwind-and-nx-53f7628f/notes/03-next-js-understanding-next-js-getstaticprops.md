# 3 - Understanding Next.js GetStaticProps   

[Video Link]()

<TimeStamp start="0:22" end="0:28">

In this lesson we are going to walk you through the use of `getStaticProps` 

</TimeStamp>

<TimeStamp start="0:34" end="2:36">

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
