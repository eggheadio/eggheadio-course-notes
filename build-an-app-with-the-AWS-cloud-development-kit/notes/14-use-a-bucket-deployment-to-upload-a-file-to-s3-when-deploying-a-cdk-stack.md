# Use a bucket deployment to upload a file to S3 when deploying a CDK stack

**[📹 Video](https://egghead.io/lessons/aws-use-a-bucket-deployment-to-upload-a-file-to-s3-when-deploying-a-cdk-stack)**

Instead of manually uploading our assets, let's create an `assets` folder in our todo application and upload those assets automatically.

👍 We'll be using the `aws-s3-deployment` deployment construct to do that.

Create an `assets` directory in the root of the project and add a test file to it.

Run:

* `npm install --save @aws-cdk/aws-s3-deployment`

Import it to our todo app:

`import * as s3Deployment from "@aws-cdk/aws-s3-deployment";`

Then add the deployment:
```ts
new s3Deployment.BucketDeployment(this, "DeployLogo", {
    destinationBucket: logoBucket,
    // an array of sources
    sources: [s3Deployment.Source.asset("./assets")]
});
```

Once we run `cdk deploy` our test file should be safe and sound in our todo `s3` bucket.
