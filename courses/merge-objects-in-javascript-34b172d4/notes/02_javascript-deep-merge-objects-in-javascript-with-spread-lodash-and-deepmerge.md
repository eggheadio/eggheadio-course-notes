# Deep Merge Objects in JavaScript with Spread, Lodash, and Deepmerge

[Video link](https://www.egghead.io/lessons/javascript-deep-merge-objects-in-javascript-with-spread-lodash-and-deepmerge?pl=merge-objects-in-javascript-34b172d4)

<TimeStamp start="01:15" end="01:30">

To deep merge object, we have to add in another field. That field in our case will be name followed by the keys we want to deep merge. Adding in all the fields can get a bit confusing. This is where lodash thrives. [Lodash](https://lodash.com/) is a modern JavaScript utility library delivering modularity, performance & extras.

</TimeStamp>

<TimeStamp start="01:50" end="02:05">

Lodash keywords must be prefixed with a lodash `_.`. The lodash [merge](https://lodash.com/docs/4.17.15#merge) function will do our deep merge for us without all having to do the extra fields and keys. Keep in mind that this will still override the `person` object. Just add in an empty object so that it will load the `person` object into that first before merging the `update` object into that. 

</TimeStamp>

<TimeStamp start="03:40" end="03:55">

There is one more use case we need to address, arrays. Lodash doesn't have a way to handle merging arrays in an object so we use another library, [deepmerge](https://deepmerge.readthedocs.io/en/latest/). `arrayMerge` returns a function where we will use the spread operator to concatenate the two arrays together. 

</TimeStamp>