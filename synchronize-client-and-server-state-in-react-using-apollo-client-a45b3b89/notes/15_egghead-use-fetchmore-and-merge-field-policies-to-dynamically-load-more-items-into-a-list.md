# Use fetchMore and merge field policies to dynamically load more items into a list

[Video link](https://www.egghead.io/lessons/egghead-use-fetchmore-and-merge-field-policies-to-dynamically-load-more-items-into-a-list?pl=synchronize-client-and-server-state-in-react-using-apollo-client-a45b3b89)

<TimeStamp start="01:30" end="01:45">

We can use the [`fetchMore` function](https://www.apollographql.com/docs/react/pagination/core-api/#the-fetchmore-function) to handle pagination. We hook it up to a button to load more data when we want. 

</TimeStamp>

<TimeStamp start="04:25" end="04:35">

To control when our data gets refreshed, we make use of `keyArgs`. We can pass certain variables to this, such as `categoryId` to refresh when we select a new category. 

</TimeStamp>

<TimeStamp start="05:45" end="05:55">

the [merge function](https://www.apollographql.com/docs/react/caching/cache-field-behavior/#the-merge-function) allows us to define how new items get written to a field. 

</TimeStamp>