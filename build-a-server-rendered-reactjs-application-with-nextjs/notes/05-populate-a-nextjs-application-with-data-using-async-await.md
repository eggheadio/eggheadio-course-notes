# Populate a Next.js Application with Data using Async/Await

In order to get our application ready to populate with data, we want to start by updating our `next.config.js` file. We want to configure it to use environment variables that we are to define.

Environment variables are variables whose value is set outside of the program. Developers typically use environment variables for things such as API keys, or other items that are private and should be obscured from the user.

You can read more about environment variables [here](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa#:~:text=An%20environment%20variable%20is%20a,at%20a%20point%20in%20time.)

In our `next.config.js` file, we want to set it up as follows:

```js
const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(["BLOGGER_URL", "API_KEY"])
    );
    return config;
  },
};
```

`('dotenv').config()` is what is going to allow us to load our environment variables into process.env.

You can read more about that [here](http://zetcode.com/javascript/dotenv/)

Now we want to set up our .env file. Create a `.env` file in your root directory, and add the following values to it.

```
BLOGGER_URL=https://www.googleapis.com/blogger/v3/blogs/4789269094064278868/posts
API_KEY=xxxYOUR_API_KEY
```

You can get your own API key [here](https://developers.google.com/blogger)

Now we want to put everything together so we can fetch data and display it in our application.

Inside of our `index.js` we want to import `isomorphic-fetch` so we can make the request.

`import 'isomorphic-fetch';`

Below our `Index` component, we can go ahead and use `getInitialProps` to fetch the data:

```js
Index.getInitialProps = async () => {
  const response = await fetch(
    `${process.env.BLOGGER_URL}?key=${process.env.API_KEY}`
  );
  const data = await response.json();
  return { posts: data.items };
};
```

For a more detailed look at `getInitialProps` you can check out [the documentation](https://nextjs.org/docs/api-reference/data-fetching/getInitialProps).

Notice that we're declaring a constant `data` that we're storing our response in. We use `.json()` to parse the response into a JSON object that we can work with. We are returning an object which contains an array of our posts.

With our API call set up and ready to retrieve data for us, we can prepare our component to display the data.

First we want to pull in a couple of components from Material-UI to help us create cards.

```js
import { Card, CardHeader, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
```

We're going to use destructuring to pull posts out of the `props` object that is being passed into the Index component:

```js
const Index = (
  { posts } // Object destructuring. This is more readable than props.posts.
) => (
  <div>
    <Header />
    {posts.map((
      x // Here we're going to map over each of the objects in our posts array, and create a card for each one.
    ) => (
      <Card key={x.id}>
        {" "}
        // We want each card to have a unique id.
        <CardHeader title={x.title} />
        <CardText>
          <RaisedButton label="Click to view post!" fullWidth={true} />
        </CardText>
      </Card>
    ))}
  </div>
);
```

The attributes `title`, `label`, and `fullWidth` are props that Material-UI provides us that allow us some control over how the components are displayed. You can find more information about Material-UI cards and their props in [the documentation](https://material-ui.com/components/cards/).
