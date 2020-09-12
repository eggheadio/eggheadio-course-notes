# Set up Netlify deployments for a Next.js blog

[Video Link](https://egghead.io/lessons/next-js-set-up-netlify-deployments-for-a-next-js-blog?pl=build-a-blog-with-next-js-typescript-emotion-and-netlify-adcc)

-   Even though our site is not finished, publishing it to netlify will let us test the entire development workflow
-   To deploy to netlify create a `netlify.toml` file:

```
[build]
    command = "npm run build && npm run export"
    publish = "out"
```

-   This file will tell Netlify how to build our site
-   Push all your changes to your repo and log in to your [Netlify](https://www.netlify.com) account. Select your nextjs blog repo and then deploy the site.
-   If all went well, you site should be deployed to Netlify! Congrats 🥳

