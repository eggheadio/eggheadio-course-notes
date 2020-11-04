# Dynamically Instantiate Routes on ID with Next.js & ExpressJS

Our goal here is to create routes for our individual blog posts. We're going to set up a dynamic route that will change depending on the post that we select.

The first step in this process is to create a new route. Inside of `server.js` we want to create a new route with the path `/blog/:id`:

```
server.get('/blog/:id', (req, res) => {

})
```

We're going to use `app.render()` like we did previously to load the post template when this route is visited. Note that `/post` is being passed in as the third parameter in `app.render`.

```
server.get('/blog/:id', (req, res) => {
    return app.render(req, res, '/post')
})
```

In addition to all of this, we need to make sure that we're passing in the ID of each post, to ensure that we are rendering the correct post information. To achieve this we use `Object.assign`.

```
server.get('/blog/:id', (req, res) => {
    return app.render(req, res, '/post', Object.assign({id: req.params.id} req.query))
})
```

Note how we are pulling the `id` from the request header.

The next step is to handle calls to our `/post` route. On each request, we want to see if there is an `id` present. If so, we want to redirect the user to the blog post with that id. Otherwise, we want to redirect them to the list of all the posts.

```
server.get('/post', (req, res) => {
    if(req.query.id) return res.redirect(`/blog/${req.query.id}`);
    res.redirect(301, '/blog');
});
```

With our server routes complete, now we can move on to wiring everything up on the front end.

In our `index.js` file, we want to import the `Link` component:

`import Link from 'next/link';`

We're going to first place the `Link` inside of the `<RaisedButton>` component:

```
<RaisedButton fullWidth={true} primary={true}>
    <Link>
        <a>
            Click to view post!
        </a>
    </Link>
</RaisedButton>
```

Now we need to add attributes to the `Link` component to control what is being linked to, as well as how that information is displayed to the user.

```
<Link href={`/post?id=${x.id}`} as={`/blog/${x.id`}>
    <a>
        Click to view post!
    </a>
</Link>
```

The `href` attribute is being used to provide the path to our blog post. The `as` attribute defines how our route will appear in the browser for the user.

With all of this complete, the next step will be to create `post.js`, which will be rendered each time we navigate to a blog post.

We want to import the `Header` and `withMui` components to use in our post page:

```
import Header from '../components/header';
import withMui from '../shared/MUI/withMUI';
```

Next, create a basic `Post` component to render our data:

```
const Post = ({ title = 'The post will be rendered here!' }) =>
    <div>
        <Header />
        <h2>{title}</h2>
    </div>;
```

We need to use `getInitialProps` with our Post component, so everything works with our `withMui` HOC.

```
Post.getInitialProps = async () => {

};
```

The last thing is to wrap our export with our `withMui` HOC:

`export default withMui(Post);`
