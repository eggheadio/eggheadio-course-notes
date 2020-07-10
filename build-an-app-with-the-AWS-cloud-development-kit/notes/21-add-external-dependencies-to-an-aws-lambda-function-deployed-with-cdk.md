# Add external dependencies to an AWS Lambda function deployed with CDK

**[📹 Video](https://egghead.io/lessons/aws-add-external-dependencies-to-an-aws-lambda-function-deployed-with-cdk)**

Let's figure out how to add unique, random `ids` (a.k.a. the Partition Key) to our todos.

👍 We'll add the `uuid` dependency to our `lambda` function.

Navigate to the `lambda` directory and run:

*  `npm init -y`

This will initialize a new `package.json`. Then run:

* `yarn add uuid`
* `yarn add @types/uuid`

(since we are using `typescript`)

Then in our `lambda` function, import `uuid`:

* `import { v4 as uuid} from "uuid"`

Now change the `addTodoItem`:
```ts
Item: {
    // use either an id provided through the UI, or get a randomly generated id with uuid
    id: id || uuid(),
    todo
}
```

👍 Test that `uuid` is working by adding a new todo via a REST client.
