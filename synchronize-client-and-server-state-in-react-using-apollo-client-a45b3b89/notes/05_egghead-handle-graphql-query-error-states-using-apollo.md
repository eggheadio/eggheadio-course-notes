# Handle GraphQL query error states using Apollo

[Video link](https://www.egghead.io/lessons/egghead-handle-graphql-query-error-states-using-apollo?pl=synchronize-client-and-server-state-in-react-using-apollo-client-a45b3b89)

<TimeStamp start="00:45" end="01:00">

Apollo also gives us an [`error` flag](https://www.apollographql.com/docs/react/data/queries/#executing-a-query), same as the `loading` flag, that we can put on our `useQuery` to handle our errors. We can toss that in an `if/else` statement to decide what to do when receiving an error. 

</TimeStamp>

<TimeStamp start="01:45" end="02:00">

[errorPolicy](https://www.apollographql.com/docs/react/data/error-handling/#setting-an-error-policy) allows us to change the default behavior of our `error` flag. Here we will set it to the value of `"all"` so that it will leave our data alone and still return what data we received. 

</TimeStamp>