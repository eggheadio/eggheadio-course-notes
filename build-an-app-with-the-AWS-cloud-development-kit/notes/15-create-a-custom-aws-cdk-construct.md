# Create a custom AWS CDK construct

**[📹 Video](https://egghead.io/lessons/aws-create-a-custom-aws-cdk-construct)**

Let's start creating a serverless backend for our todo application.

We're going to create a custom construct, where we are going to put our database and a `lambda` function.

![Custom Construct Illustration](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1592247659/transcript-images/15-create-a-custom-aws-cdk-construct-custom-construct-images.png)

Create a new file next to our stack file (in the `lib` directory), called `todo-backend-ts.`

Import `aws-cdk/core` then, let's type our custom construct (which is going to look a lot like the `logoBucket` code from our stack file).

```ts
export class TodoBackend extends cdk.Construct {
    // so we can export it later
    public readonly handler: lambda.Function;

    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id);
    }
}
```

Then import the construct into our main stack app and create an instance of it:

```ts
import { TodoBackend } from "./todo-backend";

const todoBackend = new TodoBackend(this, "TodoBackend");
```

Let's cleanup the file a bit: delete `logoBucket`, the `s3Notifications` import, lastly, swap `helloLambda` for `todoBackend.handler`.
