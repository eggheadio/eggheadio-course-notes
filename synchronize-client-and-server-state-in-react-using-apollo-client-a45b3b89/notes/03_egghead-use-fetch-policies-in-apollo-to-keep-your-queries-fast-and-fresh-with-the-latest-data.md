# Use fetch policies in Apollo to keep your queries fast and fresh with the latest data

[Video link](https://www.egghead.io/lessons/egghead-use-fetch-policies-in-apollo-to-keep-your-queries-fast-and-fresh-with-the-latest-data?pl=synchronize-client-and-server-state-in-react-using-apollo-client-a45b3b89)

<TimeStamp start="00:20" end="00:30">

By default, `useQuery` will check the cache to see if all of your data is stored there. If it isn't, then it will make a query to your GraphQL server. This is known as a `cache-first` policy. You can change the default settings of this by adding in a [`fetchPolicy`](https://www.apollographql.com/docs/react/data/queries/#setting-a-fetch-policy) in `userQuery`. 

</TimeStamp>

