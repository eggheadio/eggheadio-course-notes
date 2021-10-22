# Use optimistic updates to build UIs that react immediately to user actions

[Video link](https://www.egghead.io/lessons/egghead-use-optimistic-updates-to-build-uis-that-react-immediately-to-user-actions?pl=synchronize-client-and-server-state-in-react-using-apollo-client-a45b3b89)

<TimeStamp start="00:40" end="00:50">

The [optimisticResponse option](https://www.apollographql.com/docs/react/performance/optimistic-ui/#the-optimisticresponse-option) is an option we can put on the mutate function to assume that the data we are going to receive is what we expect. 

</TimeStamp>

<TimeStamp start="03:40" end="03:55">

Our optimistic response won't know what to filter out unless we give it enough information. That information in this case is the type names, `__typename`, that are sent back from our GraphQL schema. 

</TimeStamp>