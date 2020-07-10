# Destroy an AWS CDK stack

**[📹 Video](https://egghead.io/lessons/aws-destroy-an-aws-cdk-stack)**

If at some point you want to delete your app (along with all of its resources), you just need to run:

* `cdk destroy`.

The only thing that won't get deleted is the `s3` `LogoBucket` which you can delete manually.

👍 And if you want to redeploy the app again in the future (assuming you didn't delete the code on your computer!), just run `cdk deploy` and your app will be live again.
