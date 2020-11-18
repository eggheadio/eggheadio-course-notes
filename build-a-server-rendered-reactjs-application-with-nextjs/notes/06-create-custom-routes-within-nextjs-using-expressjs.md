# Create Custom Routes Within Next.js using ExpressJS

The next step in building our application is to set up a custom server that will allow us to render our blog URL's the way that we want to.

In the root of your project, create a file named `server.js` and include the following starter code in the file:

```js
const express = require("express");
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {});
```

We're going to put all of our code inside of the `app.prepare().then()`, since it will allow us to continue to use Next.js features.

First, we want to define a server constant, and set it to the value of an Express instance.

`const server = express();`

We can now use this server variable to start creating the routes in our application.

The first route we're going to create is a blog route. This will allow a user to navigate to our URL ending in `/blog` and see our posts, instead of seeing them immediately upon arriving on our application.

`server.get('/blog', (req, res) => app.render(req, res, '/'));`

The next route that we're going to set up will be a URL redirect, so that users visiting the old route will be redirected to our new `/blog` route.

`server.get('/', (req, res) => res.redirect(301, '/blog'));`

The last route that we will set up in this part of the course will use the wildcard (\*) operator. It will include the `handle` constant that we defined previously.

`server.get('/*', (req, res) => handle(req, res));`

The value of the `handle` constant results from calling `getRequestHandler()`. This returns a request handler that we can use to parse all HTTP requests. This ensures that we can deal with all requests that are made to our server.

The final part we need to complete for this file is to use `server.listen()` to have our server listen on a port that we choose. In this example we will use 3000.

```js
server.listen(port, (err) => {
  if (err) throw err;
  console.log(`Listening on Port ${port}`);
});
```

Now we want to update our `package.json`. We need to change the `scripts` object to make sure that it runs the server that we just created.

`"dev": "node server.js"`

From now on when you run `npm run dev` our Next appliation will be using our custom server!
