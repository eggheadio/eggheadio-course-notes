# Deploy Your React Application to AWS Using the Amplify CLI

> ❗ AWS Amplify is a framework in constant change and improvement. If you find something here or in the video that is outdated, or not working, please make sure you check the [Official documentation](https://docs.amplify.aws/) to clear your doubts.

**[📹 Video](https://egghead.io/lessons/react-deploy-your-react-application-to-aws-using-the-amplify-cli)**

**It's time to publish our app!! 🎉**

- From teh [official docs](https://docs.amplify.aws/cli/hosting):

> Deploy and host your app using either Amplify Console or Amazon CloudFront/S3. The Amplify Console offers fully managed hosting with features such as instant cache invalidation and atomic deploys. For more control with setting up a CDN and hosting buckets, use CloudFront and S3.

```bash
amplify add hosting
? Select the environment setup: (Use arrow key)
❯ DEV (S3 only with HTTP)
  PROD (S3 with CloudFront using HTTPS)
? hosting bucket name
? index doc of the website `index.html`
? error doc of the website `index.html`
```

- when this is ready, you can go to your command line and run `amplify publish` to deploy our new setup
- Your app should launch in a new window!! 🎉

![React app Hosted](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1549391504/transcript-images/egghead-deploy-your-react-application-to-aws-using-the-amplify-cli-final-deployment-of-app.jpg)

## References and Resources

- [AWS Amplify Hosting](https://docs.amplify.aws/cli/hosting)

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-store-data-in-amazon-s3-with-react)
