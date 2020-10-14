# Build a Live Search Box with useBroadcaster and useListener in React

[📹 Video](https://egghead.io/lessons/egghead-build-a-live-search-box-with-usebroadcaster-and-uselistener-in-react)

All of the utility functions that we coded so far can be brought together to implement a very used feature in almost any app. An instant or live search input.

A live search input allow the user to type some text and automatically fire up a search without requesting any further action from the user.

This example live search use the [Open Library](https://openlibrary.org) [API](https://openlibrary.org/developers/api). This is a [RESTful API](https://openlibrary.org/dev/docs/restful_api) that can return data in JSON format among others, this example use the [Book API](https://openlibrary.org/dev/docs/api/books) to retrieve information about the books based in the text entered in the input. To request data from this API we just need to use the endpoint url with a query string like this

`https://openlibrary.org/search.json?q=sometext`

In order to request data from this input we will use some of our broadcasters, link the `inputToMessage` that takes the value from the input, pipe the value into a `waitFor` and then into a `mapBroadcaster`.

The `mapBroadcaster` operator receive the `getUrl` broadcaster, we need to pass a value, the search value, to the `getUrl` method.

The `getUrl` method will use the endpoint url plus the value that was written inside the input element. To accomplish this we can use the `map` operator to take a value and create a new one that will be the correct url

```javascript
let inputToBookSearch = pipe(
  waitFor(500),
  map((name) => `https://openlibrary.org/search.json?q=${name}`),
  mapBroadcaster(getURL),
)(inputValue)
```

Remember that the data that comes from the `getUrl` is a [json object](https://openlibrary.org/search.json?q=sometext) and that React will complain about it because the object cannot be rendered. We need to select what attribute of the object we want to render and format the data accordingly.

So the piece of data that is interesting for this exercise is the `docs` array and to get that we need to map over the results of `getUrl`, this will store the `docs` content from the query result into the state.

```javascript
let inputToBookSearch = pipe(
  waitFor(500),
  map((name) => `https://openlibrary.org/search.json?q=${name}`),
  mapBroadcaster(getURL),
  map((result) => result.docs),
)(inputValue)
```

🚨Remember that the `useBroadcaster` hook accepts an initial state. If we don't pass a value to the initial state the first render of the UI will default to a `null` object and that will trigger an error since `map` can't be call on `null`. To avoid this first render issue we can pass an empty array `[]` as initial state

## References

- [source code](https://github.com/johnlindquist/crafting-functions/blob/react-live-search/src/index.js)
