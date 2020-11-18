# Render Text within a Server-side ReactJS App with Next.js

Whether you used `create-next-app` to create your next application, or you set everything up yourself, make sure the `scripts` section of your `package.json` looks like the following:

```js
"scripts": {
        "dev": "next",
        "start": "next start",
        "build": "next build"
    }
```

One of the major benefits of using Next is that it makes page routing ridiculously simple.

Create a `pages` directory in your project, and add a page named `index.js`. It's important to note that Next is going to create routes for us that correspond to the file names in this folder. Because we just added an `index.js` to our `pages` directory, when we add content to the file we will be able to view that content at `http://localhost:3000`.

You can add the following content to `index.js` to get started:

```js
const Index = ({ title = "Hello from next.js" }) => (
  <div>
    <h2>{title}</h2>
  </div>
);

export default Index;
```

As a reminder, if you haven't started your development server you can do so by typing `npm run dev` in your terminal window.

Finally we're going to add an about page to our application.

We can do this by creating a new file in our `pages` directory called `about.js`.

Add the following code to the file:

```js
const About = ({ title = "Hello from the about route!" }) => (
  <div>
    <h2>{title}</h2>
  </div>
);

export default About;
```

Now when we navigate to `localhost:3000/about`, you'll see the page we just created!

📜 - If you want to learn more about routing in Next.js, you can check out the docs [here](https://nextjs.org/docs/routing/introduction).
