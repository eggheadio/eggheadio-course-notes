# Add a custom CloudFormation stack output with CDK

**[📹 Video](https://egghead.io/lessons/aws-add-a-custom-cloudformation-stack-output-with-cdk)**

Let's fix the missing logo at the bottom of our todo application. We need to tell our frontend application to source it from our `s3` `logoBucket`.

Instead of manually searching for the logo url in our `aws` console (not a true hacker move!), we can output the url in our terminal with each deployment.

To do that, let's modify the `output` in our stack file by adding this:
```ts
new cdk.CfnOutput(this, "LogoPath", {
    // add the name of your bucket and your file (in the assets folder)
    value: `https://${logoBucket.bucketDomainName}/testFile.png`
});
```

👍 Once you deploy, you should see the logo path in the output section.

Now go to the frontend application and add this `url` as the logo `src` (in `app.tsx`).
