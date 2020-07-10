# Pass environment variables to a lambda function deployed with AWS CDK

**[📹 Video](https://egghead.io/lessons/aws-pass-environment-variables-to-a-lambda-function-deployed-with-aws-cdk)**

Let's pass an environment variable to our `lambda` function.

We can do that by adding a prop to our `helloLambda` function in the stacks file:

```ts
const helloLambda = new lambda.Function(this, "HelloLambda", {
    environment: { isProduction: "absolutely not" }
});
```

Let's `console.log` our variable:
```ts
console.log("isProduction?", process.env.isProduction);
```

Once you've deployed, you'll be able to see the log. Click on **Test** in the `aws` console and checkout the **Environment variables**.

![Environment variable Images](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1591637696/transcript-images/09-pass-environment-variables-to-a-lambda-function-deployed-with-aws-cdk-env-image.png)
