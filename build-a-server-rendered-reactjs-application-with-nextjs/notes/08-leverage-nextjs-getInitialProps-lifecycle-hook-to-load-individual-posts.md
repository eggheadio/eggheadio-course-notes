# Leverage Next.js' getInitialProps lifecycle hook to load individual posts

Now we want to take advantage of `getInitialProps` to retrieve the specific id for each blog post. We are able to pull this value out of the query object that we defined in our server.

The first step is to destructure the context parameter of `getInitialProps` so we can get the id from the `query` object. The context object has a number of different properties, and `query` is one of them. You can read more about `getInitialProps` [here](https://nextjs.org/docs/api-reference/data-fetching/getInitialProps)

```
Post.getInitialProps = async ({ query: { id }}) => {

};
```

To make the API call we are going to use `isomorphic-fetch`. We want to make sure to import that at the top of our file.

`import isomorphic-fetch;`

Inside of our `fetch` call, we're going to use the `id` that we have pulled out of the context object:

`const response = await fetch (`${process.env.BLOGGER_URL}/${id}?key=\${process.env.API_KEY}`)`

Below that, we're going to store the parsed response in a variable named `data`. We're also going to set up variables to hold other data that we want to display.

```
Post.getInitialProps = async ({ query: { id }}) => {
    const response = await fetch (`${process.env.BLOGGER_URL}/${id}?key=\${process.env.API_KEY}`)
    const data = await response.json();
    const title = data.title;
    const content = data.content;
    return { title, content } // returning title & content this way ensures that they are available to our component as props.
};
```

At this point we also want to pull in our Material UI components so that we can render this data using a card.

`import { Card, CardHeader, CardText } from 'material-ui/Card';`

With our initial set up complete, the next step is to work with that data inside of our `Post` component.

First, we can destructure the `title` and `content` parameters from our props:

`const Post = ({ title, content })`

Now we can use our Material UI components and create a card to display our post data:

```
const Post = ({ title, content }) =>
    <div>
        <Header />
        <Card>
            <CardHeader title={title} />
            <CardText>
                <div dangerouslySetInnerHTML={{_html: content }} />
            <CardText>
        </Card>
    </div>
```

Note that we are using `dangerouslySetInnerHTML` to pass in the content of our blog post. This should typically be avoided [unless absolutely necessary](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml).

The last step here to set up our `Post` component is to add a button and a link to return to the list of blog posts.

First, import `RaisedButton` and `Link`:

```
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'next/link';
```

Then we will go ahead and add those elements to our `Post` component:

```
const Post = ({ title, content }) =>
    <div>
        <Header />
        <Card>
            <CardHeader title={title} />
            <CardText>
                <div dangerouslySetInnerHTML={{_html: content }} />
                <RaisedButton fullWidth={true}>
                    <Link href="/" as="/blog">
                        <a>
                            Go back to the blog!
                        </a>
                    </Link>
                </RaisedButton>
            <CardText>
        </Card>
    </div>
```
