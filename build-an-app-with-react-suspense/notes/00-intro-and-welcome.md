# Intro and Welcome

**[📹 Video](https://egghead.io/lessons/aws-build-and-deploy-a-sample-aws-cloud-development-kit-stack-to-aws)**

**[💻 Code](https://github.com/tlakomy/egghead-aws-cdk-workshop)**

Hi and welcome! This document contains some of the things that I had to lookup while I was going through this course. I hope you find them useful too!

## Install Libraries

You need to ensure that all CDK packages (core, s3, etc.) have the same version. The recommended version for all CDK packages is `1.31.0`.

You can install an old version of an npm package using the `@` syntax:

```
npm install <package>@<version>
```
```
npm i @aws-cdk/aws-s3@1.31.0
```

## What is a lambda function?

* `lambda` means function as a service, where you, the developer, don't have to worry about managing servers, just the functions that need to be executed.

* The function can be triggered by multiple sources like **API Gateway** (`http` requests), as well as changes to the **Dynamo DB** database or `s3` storage bucket.

* `lambda` functions can be written in a variety of different languages.

If you prefer a video tutorial, follow this [one](https://egghead.io/lessons/aws-wtf-is-aws-lambda).

## Create an admin user with IAM and configure AWS CLI to enable programmatic access to AWS

Go to [AWS Management Account](https://aws.amazon.com/console/) and either create a new account or log in.

* In the **Find Services** section look for **IAM**

* Once you are in **Identity and Access Management** select **Users** from the sidebar.

* Click on **Add user** and create a new **admin-user** and select both **Programmatic access** AND **AWS Management Console access**

* Under **Permissions** create a new **admin** group and create an **admin-user** for this group.

* Create a group called **AdminUsers** and check **AdministratorAccess** under Policy Name then click **Create Group**.

* You can skip the **tag** section and click on **Create user**.

* Make sure to save your **access key** and **password** (Secret Access Key) as this is the only time that they will be displayed (👍 you can download them as a `.csv` file)

Here for the [📹 video tutorial](https://egghead.io/lessons/egghead-create-an-admin-user-with-iam-and-configure-aws-cli-to-enable-programmatic-access-to-aws).

## Avoid aws charges by setting up a billing alarm

* Log into your `aws` console as a `root` user then search for **Billing**.

* Scroll down and check your usage in **Top Free Tier Services by Usage**

* Under **Services** search for **CloudWatch**, click on **Billing** and then **Create alarm**.

* Leave the default configuration then add a threshold value, for example: $5 (meaning you'll get a notification whenever you spend more than $5).

* On the next page, choose: **Create new topic**, for example: `PayingTooMuchAWSAlarm` and add your email address.

* You'll have to confirm the subscription link sent to your email before the alarm is activated.

* Next, add an alarm name, for example `PayingTooMuchAWSAlarm`

[📹 Video](https://egghead.io/lessons/aws-review-billing-dashboard-and-set-up-a-billing-alarm-to-avoid-paying-too-much-for-aws?pl=use-aws-billing-cost-management-dashboard-to-keep-your-aws-bill-to-minimum-ff0f) tutorial.

## Installing AWS CLI

There are several ways of installing the `aws CLI`. I'm on a macOS computer and installed it using the graphical interface.

🤔 [Source](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)

Verify that `aws` CLI has been installed:

* `aws --version`

Now let's start configuring it (have your `.cvs` file with your access keys ready), run:

* `aws configure`

* For the region I chose: `eu-central-1` (Frankfurt) since I'm based in Europe.

👍 You can check the list of available regions back in your IAM Management Console, by clicking **Global** in your top right corner.

* For the output format, I left it at default.

To verify that your settings have been configured successfully run:

* `aws s3 ls`

Even if you have no visible output (because you currently don't have any active `s3` buckets), no errors means happy aws!

To see your credentials run:

* `cat ~/.aws/credentials`
