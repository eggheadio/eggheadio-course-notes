# Deploy a Next.js Application to the Web With the now-cli

Now that we've built out the main functionality in our application, the next step is to deploy it to a live URL for the world to see!

The first step for us is to install the `now-cli` command tool:

`npm install -g now`

Once that is complete, we want to prepare our application to be deployed. Specifically, we want to run the `build` command, because it will create an optimized version of our application.

`npm run build`

Next, we need to modify the `scripts` object inside of our `package.json` file. We're going to change the `start` command so that it runs our application in production.

`"start": "NODE_ENV=production node server.js"`

Now we're ready to deploy our app to a live URL. To do this, we're going to use `now --dotenv`. The `--dotenv` flag will let our application know where to get our API keys from.

Enter `now --dotenv` in your terminal. Once the command returns, it will provide you with the URL that your application is deployed to.
