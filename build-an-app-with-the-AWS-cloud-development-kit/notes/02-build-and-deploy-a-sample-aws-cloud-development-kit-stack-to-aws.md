# Build and deploy a sample AWS Cloud Development Kit stack to AWS

**[📹 Video](https://egghead.io/lessons/aws-build-and-deploy-a-sample-aws-cloud-development-kit-stack-to-aws)**

Although many files have been installed when we initialized a new `cdk` project, we'll only touch two of those files (and we'll create some new files too):

1. the `.ts` file found in the `bin` directory (`todo-app.ts` for Tomasz). This is the app's entry point (kind of like `index.js` in your standard `reactJS` application)

2. the `.ts` file found in `lib` directory (`todo-app-stack.ts` for Tomasz). This is where our stack is defined and where we will write most of our code (Similar to `app.js` in your typical `ReactJS` application).

👍 I will refer to the second file as the **stack file**.

At the top of the stack file, you'll find several imports.

`import * as sns from '@aws-cdk/aws-sns';`

This is the core `cdk` library that every stack file needs. We'll be deleting the rest of the imports shortly, mainly:

* SNS or ([Amazon Simple Notification Service](https://aws.amazon.com/sns))

* SQS or ([Amazon Simple Queue Service](https://aws.amazon.com/sqs/))

These imports are an example of [constructs](https://docs.aws.amazon.com/cdk/latest/guide/constructs.html). In `aws` constructs are the basic building blocks of AWS CDK apps. A construct can be a single resource, or it can be a higher-level component that has multiple resources. Constructs can be published to `npm` and you can import constructs by other users to your own code.

We'll use `typescript`, so let's start the `typescript` compiler to watch for any errors.

* Run `npm run watch`

👍 Note, you should have the compiler running every time you work on the `cdk` project (it will save you a lot of time that you would otherwise spend chasing errors/warnings!)

* Then open **a new terminal window/tab** and run: `cdk diff`

👍 Similar to `git diff`, this will give you a preview of you what you'll be deploying.

👍 Side note: if you haven't used `aws` before (like me!), you will get this error message: `Unable to resolve AWS account to use. It must be either configured when you define your CDK or through the environment`.

Don't panic, Tomasz created a video to help you set up, and I've added notes on that in the [00-Intro and Welcome](00-intro-and-welcome.md) section of the notes.

Running `cdk diff` for the first time will produce a list of things to be deployed. The most important changes can be found under `Resources`.

```bash
Resources
[+] AWS::SQS::Queue TodoAppQueue TodoAppQueueF04C191C
[+] AWS::SQS::QueuePolicy TodoAppQueue/Policy TodoAppQueuePolicy77BA4F8B
[+] AWS::SNS::Subscription TodoAppQueue/TodoAppStackTodoAppTopic0382DBE7 TodoAppQueueTodoAppStackTodoAppTopic0382DBE791B1BFB6
[+] AWS::SNS::Topic TodoAppTopic T
```

To deploy run:

* `cdk deploy`

👍 Every time we're making **potentially sensitive changes**, we'll be asked to confirm that we are ready to deploy. Hit `y` to agree.
