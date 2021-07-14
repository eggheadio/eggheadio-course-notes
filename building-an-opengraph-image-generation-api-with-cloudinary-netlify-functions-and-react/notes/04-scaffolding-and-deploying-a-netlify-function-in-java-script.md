# 4 - Scaffolding and deploying a Netlify Function in JavaScript

[Video Link](https://egghead.io/lessons/netlify-scaffolding-and-deploying-a-netlify-function-in-javascript)

<TimeStamp start="0:07" end="0:10">

To know more about Playright visit [here](https://playwright.dev/)

</TimeStamp>

<TimeStamp start="0:11" end="0:17">

``` bash
mkdir gen-opengraph-image
cd gen-opengraph-image
```

</TimeStamp>

<TimeStamp start="0:18" end="0:23">

To initialize a new package.json run `yarn init -y` on `gen-opengraph-image` directory. 

</TimeStamp>

<TimeStamp start="0:34" end="0:40">

Handler will be an async function that takes two arguments, the event to our function and the context.

</TimeStamp>

<TimeStamp start="0:09" end="0:17">

The resulting code should look like this: 

``` js
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: 'gen function works',
  }
}
```

</TimeStamp>





