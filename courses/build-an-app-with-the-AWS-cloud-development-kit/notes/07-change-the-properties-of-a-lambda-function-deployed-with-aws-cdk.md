# Change the properties of a lambda function deployed with AWS CDK

**[📹 Video](https://egghead.io/lessons/aws-change-the-properties-of-a-lambda-function-deployed-with-aws-cdk)**

Back in the **aws console** we can see that our `lambda` came preconfigured with memory size (128MB) and a timeout of 3 seconds. Let's change that!

Add the following lines to your stack document:

```ts
const helloLambda = new lambda.Function(this, "HelloLambda", {
  // to create a 10 second timeout (max is 15 minutes)
    timeout: cdk.Duration.seconds(10),
    // memory size of 256MB
    memorySize: 256,
});
```
![Lambda Function Image](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1591637696/transcript-images/07-change-the-properties-of-a-lambda-function-deployed-with-aws-cdk-lambda-config-image.png)

Run `cdk diff` and `cdk deploy` then verify your changes in the  `aws console`.