# Review an AWS CloudFormation stack deployed with AWS CDK

**[📹 Video](https://egghead.io/lessons/aws-review-an-aws-cloudformation-stack-deployed-with-aws-cdk)**

CDK is built on top of **CloudFormation**.

But [what is CloudFormation?](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)

It's a tool from AWS that allows you to spin up resources effortlessly. You write a template (using `YAML` or `json`) and then AWS does the rest.

Instead of writing `yaml` or `json`, we'll be using `cdk`, and write our code in `typescript`. Afterward, our code will be transformed into a CloudFormation template and our stack deployed to `aws`.

To view your current stack got to **AWS Management Console** search for **CloudFormation** and click on **Stacks** in the sidebar on the left.

👍 Note that whenever I refer to aws (management) console, I mean the console living on https://aws.amazon.com/console. You will have to be logged in to see your changes.

👍 Make sure that you are selecting the right region (the region where your `cdk` app was initialized) as well.

Stack status should say: `CREATE_COMPLETE`

You can check out all the resources deployed, under the **Resources** tab.

Lastly, see all the `yaml` code that we have been spared from writing, by checking out the **CloudFormation** tab.

If you prefer to visualize your code, click on **View in designer** (you might need to scroll down and zoom-in to see your template). This is particularly useful with a larger infrastructure as it enables an overview of how different pieces are connected.

![CloudFormation Trigger Image](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1591637696/transcript-images/03-review-an-aws-cloud-formation-stack-deployed-with-aws-cdk-trigger-image.png)