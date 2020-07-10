# Make the contents of an S3 bucket deployed with CDK public

**[📹 Video](https://egghead.io/lessons/aws-make-the-contents-of-an-s3-bucket-deployed-with-cdk-public)**

By default, an `s3` bucket is secure and publicly inaccessible. To fix that, we'll have to add a single property to our `LogoBucket`.

![Closed Buckets Illustration](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1592247658/transcript-images/12-make-the-contents-of-an-s3-bucket-deployed-with-cdk-public-closed-buckets.png)

```ts
const logoBucket = new s3.Bucket(this, "LogoBucket", {
    publicReadAccess: true
});
```

Once deployed, our `s3` links will be available to everyone.
