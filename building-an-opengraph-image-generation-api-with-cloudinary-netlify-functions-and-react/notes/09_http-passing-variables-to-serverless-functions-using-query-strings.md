# 9 - Passing variables to serverless functions using query strings

[Video Link](https://egghead.io/lessons/http-passing-variables-to-serverless-functions-using-query-strings)

- We can generate an image, but unfortunately, **we currently can't change the title, we can't change the tags and we can't change the username.** If you want this exact image, what we have right now is great. If you don't and you want to change the title, we need to make some adjustments.

- We'll need to make changes in two places. One is the React component we're rendering to the page to generate the image. The second is in the Playwright script where we render the actual component. We're going to take advantage of the window here.

- Instead of manually listing a set of three list elements for our tags, we're going to look for an array on `{window.tags}` when we render our component. We're going to do the same for the `{window.author}` and the same for the `{window.title}`. We have three variables on the window that we're looking for, `title`, `author` and `tags`.

- In `gen-opengraph-image.js`, we're going to have to pass these in. Before we add our script, we're going to add another script tag. We'll use a template string to do what we need to do here. We've written a small script that will set the `{window.title}`, the `{window.tags}` and the `{window.author}`variables inside of our page. We can push this to make sure it works.

```js
// functions/gen-opengraph-image/gen-opengraph-image.js

await page.addScriptTag({
  content: `
  window.title = "Example title";
  window.tags = ["one", "two", "three"];
  window.author = "@chriscardi";
  `,
})
```

- Now that our site is deployed,**we can see that the window variables are being used in our new OpenGraph cards, but we can't yet control it from the outside.** To do that, we'll parse the query string. If you remember the event argument from our handler, that's where our query string parameters come in.

- Our tags are going to come in off the query string separated by a comma. Commas are URL encoded when we pass them through the query string. We can show this using `encodeURIcomponent`. Note that we get `1%2C2%2C3`. The `%2C` is the URL encoding for a comma. We can use `decodeURIcomponent` to get the information back.

- In this case, we'll take the `queryStringParameters`, get the text field off, which will come in as a string and we'll `decodeURIComponent` for those tags and `split()` them.

```js
const tags = queryStringParameters.tags
  ? decodeURIComponent(queryStringParameters.tags).split(',')
  : []
await page.addScriptTag()
```

- **This will give us an array. If we don't have tags, we'll get an empty array.** If we have malformed data, we could potentially end up rendering malformed data.

- Our `title` will be a little easier. If there's a `title`, we'll use it. If not, we'll specify `"No Title"`. This will give us a nice debug output if we forget to include a title or for some reason, miss passing one in. Since we always intend to use a title whenever we want to use these OpenGraph images, this is fine for now. We'll replace our literal array with a `JSON.stringify` of the tags array.

- The `author`, by comparison to the `title`, isn't necessarily always required. We'll render an empty string instead of a `"No Author"` like we did for the `title`.

```js
const tags = queryStringParameters.tags
  ? decodeURIComponent(queryStringParameters.tags).split(',')
  : []
await page.addScriptTag({
  content: `
  window.title = "${queryStringParameters.title || 'No Title'}";
  window.tags = ${JSON.stringify(tags)};
  window.author = "${queryStringParameters.author || ''}";
  `,
})
```

- When we refresh the page, we see an interesting error, one that we've seen before, `"Evaluation failed: Cannot read property 'getBoundingClientReact' of undefined"`. It says the issue happened on line 36.

- Line 36 doesn't give us a lot of information because it's happening somewhere in here when we're calling `getBoundingClientReact` on the children of the corgi `div`. **Without splitting this out into a testable unit, we can only make some educated guesses.**

- If there's no child for us to discover in the corgi div, whereas before there was, the only thing we changed is this additional script tag. As it turns out, if we look closely, that is enough.

- **When we swapped the string literals for the interpolations, we forgot that when we use a variable**, it's going to put the literal `No Title` in here if we don't put a `title` in without the quotes. Without the quotes, `window.title` will equal no title.

- If we put in our normal script, you can perhaps see why this is a problem. The solution is adding additional quotes anytime we need a string. We don't need to add them on tags because we've already JSON.stringify it. We do want the literal array to get put in. Note that instead of addScriptTag, we could be using evaluate.

```js
await page.evaluate({
  content: `
  window.title = "${queryStringParameters.title || 'No Title'}";
  window.tags = ${JSON.stringify(tags)};
  window.author = "${queryStringParameters.author || ''}";
  `,
})
```

- Now that we've changed our script tag values to be wrapped in the proper quotes, let's refresh the function again. We can see that now we've added our quotes, we can pass in any values we want in the query string.

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1586898819/transcript-images/09-final.jpg)

- If we put nothing in the query string, we get no title, the tags are empty and the author's empty.
