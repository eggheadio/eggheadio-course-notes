# Review and execute a lambda function deployed with CDK in AWS Console

**[📹 Video](https://egghead.io/lessons/aws-review-and-execute-a-lambda-function-deployed-with-cdk-in-aws-console)**

Let's go to the [AWS management console](https://aws.amazon.com/console/), search for Cloudformation, click on Stacks, and checkout what we've deployed.

Under the **Resources** we can see:
* AWS::IAM::Role
* AWS::Lambda::Function
* AWS::CDK::Metadata

Click on the lambda function id to explore it. You'll be able to use the entire code, which starts with `use strict` and finishes with the sourcemap (because this code was transpiled from `typescript`).

Further down the page, you'll see **Tags** associated with this function (those were added automatically).

We currently don't have any **Triggers** so click on **Test** and **Configure test event** to test it manually. Choose [**Api Gateway AWS Proxy**](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html). Name the test then click **Create**.

Once you click **Test** again the lambda function will be called and you should see the `console.log` with "Hello, egghead friends!" (or your own text).
