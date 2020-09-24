# Save Network Requests by Using a Cache

*[📹 Video](https://egghead.io/lessons/egghead-save-network-requests-by-using-a-cache)*

Cache - map a key to a result of the fetched data, this is helpful to avoid making new requests to URLs that we have requested before.

We can start a new cache by using `new Map()` then add a key-value to the cache.

>The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
> [Source: MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

```javascript
export let mapBroadcasterCache = createBroadcaster => broadcaster => listener => {
  let cache = new Map()

  return broadcaster(value => {
      let newBroadcaster = createBroadcaster(value)
      newBroadcaster(newValue => {
          cache.set(value, newValue)
          listener(newValue)
      })
  })
```

- The `value` is the URL being passed to the fetch method
- The `newValue` is the response returned by the fetch method

> Note: The set() method adds or updates an element with a specified key and a value to a Map object.
> [Source: MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set)


We then need to check if the cache has the result of a fetched request. We can do it with:

```javascript
if (cache.has(value)) {
    listener(cache.get(value))
    return
}
```

In here we are doing a few things:

- Checking if the response(`value`) exists in the cache
- Get the response from the cache
- return so we don't do the request and set that response again into the cache


```javascript
export let mapBroadcasterCache = createBroadcaster => broadcaster => listener => {
  let cache = new Map()
  return broadcaster(value => {
    if (cache.has(value)) {
      listener(cache.get(value))
      return
    }
    let newBroadcaster = createBroadcaster(value)
    newBroadcaster(newValue => {
      cache.set(value, newValue)
      console.log(cache      listener(newValue)
    })
  })
}
```



---
**References:**

- [`has()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has)
- [`new Map()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [`set()` method]()

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/egghead-remember-to-check-for-done)
📹 [Go to Next Lesson](https://egghead.io/lessons/egghead-fix-race-conditions-due-to-caching-and-canceling)