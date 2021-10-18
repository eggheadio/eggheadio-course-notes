# Deploy a static website to S3 with AWS CDK

**[📹 Video](https://egghead.io/lessons/aws-deploy-a-static-website-to-s3-with-aws-cdk)**

Let's deploy our frontend app (that currently lives on `localhost`) to the Internet.

First, let's `build` the app! Go to `frontend` directory and run:

* `yarn run build`

We'll be using a new `s3` bucket to host our frontend app! Add the new bucket to the stack file:

```ts
const websiteBucket = new s3.Bucket(this, "WebsiteBucket", {
    // so that it's publicly available
    publicReadAccess: true,
    // the index document
    websiteIndexDocument: "index.html"
});
```
Instead of copying the contents of the `build` folder manually, let's deploy it automatically by adding this:

```ts
new s3Deployment.BucketDeployment(this, "DeployWebsite", {
    destinationBucket: websiteBucket,
    // path to our build directory
    sources: [s3Deployment.Source.asset("../frontend/build")]
});
```

Lastly, just like with the logo url, let's output the website url.

```ts
new cdk.CfnOutput(this, "WebsiteUrl", {
    value: websiteBucket.bucketWebsiteUrl
});
```