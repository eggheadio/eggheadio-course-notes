# Use "read" field policies to query local client state

[Video link](https://www.egghead.io/lessons/egghead-use-read-field-policies-to-query-local-client-state?pl=synchronize-client-and-server-state-in-react-using-apollo-client-a45b3b89)

<TimeStamp start="02:10" end="02:25">

The traditional way to handle a select box in a React app would be to use `useState` but this is local to the notes component only. We can define our own `isSelected` field by using the [read function](https://www.apollographql.com/docs/react/caching/cache-field-behavior/#the-read-function). 

</TimeStamp>