# 2. Create a new project with Svelte 3

[Video Link](https://egghead.io/lessons/svelte-create-a-new-project-with-svelte-3?pl=getting-started-with-svelte-3-05a8541a)

- Go to the directory you want to create your Svelte project in and run the following command in the terminal. We&rsquo;re naming the project `my-svelte-project`.

```
npx degit sveltejs/template my-svelte-project
```

- We&rsquo;re using npx to run degit. Degit is a tool that makes copies of git repositories. If you run `degit some-user/some-repo` it will find the latest commit on <https://github.com/some-user/some-repo> and download the associated tar file. Note its faster than git clone because you&rsquo;re not downloading the entire git history.
- Next go into the directory and run npm install

```
cd my-svelte-project && npm install
```

- Next start up the development server

```
npm run dev
```

- You can see it on the browser at localhost:5000.
- Open the project directory in your favorite editor and open `/src/App.svelte` and add an h3 tag

```html
<main>
  <h1>Hello {name}!</h1>
  <h3>Hello egghead</h3>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
```

- 📝 the styling of the template has changed since the video was filmed, but &ldquo;Hello egghead&rdquo; should appear below &ldquo;Hello World!&rdquo;

<a id="orge77ed7d"></a>
