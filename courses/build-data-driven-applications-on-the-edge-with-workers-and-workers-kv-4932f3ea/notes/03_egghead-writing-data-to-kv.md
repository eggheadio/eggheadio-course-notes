# Writing data to KV

[Video link](https://www.egghead.io/lessons/egghead-writing-data-to-kv?pl=build-data-driven-applications-on-the-edge-with-workers-and-workers-kv-4932f3ea)

<TimeStamp start="00:45" end="01:00">

The [put method](https://developers.cloudflare.com/workers/runtime-apis/kv#writing-key-value-pairs) is how we are going to be storing our data. The first argument will be a key while the second will the the value. Note that the key cannot be empty, `.` or `..`. All other keys are valid. 

</TimeStamp>