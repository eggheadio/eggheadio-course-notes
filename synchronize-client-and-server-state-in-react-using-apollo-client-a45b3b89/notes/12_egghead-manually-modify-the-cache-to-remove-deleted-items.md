# Manually modify the cache to remove deleted items

[Video link](https://www.egghead.io/lessons/egghead-manually-modify-the-cache-to-remove-deleted-items?pl=synchronize-client-and-server-state-in-react-using-apollo-client-a45b3b89)

<TimeStamp start="00:45" end="01:00">

The [update function](https://www.apollographql.com/docs/react/data/mutations/#the-update-function) allows us to manually apply changes directly to our cached data right after a mutation, saving us from having to make an extra, possibly heavy, network request. 

</TimeStamp>

<TimeStamp start="03:35" end="03:45">

The [identify function](https://www.apollographql.com/docs/react/api/cache/InMemoryCache/#identify) takes the reference to an object and creates an id from it. 

</TimeStamp>