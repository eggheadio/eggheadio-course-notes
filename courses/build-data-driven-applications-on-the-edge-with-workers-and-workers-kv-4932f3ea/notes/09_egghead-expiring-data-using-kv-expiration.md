# Expiring data using KV expiration

[Video link](https://www.egghead.io/lessons/egghead-expiring-data-using-kv-expiration?pl=build-data-driven-applications-on-the-edge-with-workers-and-workers-kv-4932f3ea)

<TimeStamp start="01:10" end="01:25">

[Cloudflare passes all HTTP headers](https://support.cloudflare.com/hc/en-us/articles/200170986-How-does-Cloudflare-handle-HTTP-Request-headers-) as-is from the client to the origin and adds additional headers. We can tap into that using the `CF-Connecting-IP` to get a users ip, set that to a variable, and now use that variable in the `cacheKey` to make the data user specific. 

</TimeStamp>