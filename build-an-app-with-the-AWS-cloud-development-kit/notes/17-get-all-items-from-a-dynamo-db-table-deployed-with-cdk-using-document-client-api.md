# Get all items from a DynamoDB table deployed with CDK using DocumentClient API

**[📹 Video](https://egghead.io/lessons/aws-get-all-items-from-a-dynamodb-table-deployed-with-cdk-using-documentclient-api)**

Let's create a new `lambda` function that is going to be responsible for reading, creating, and deleting data in our database.

🤔 A handy [dynamodb cheatsheet](https://github.com/dabit3/dynamodb-documentclient-cheat-sheet).

👍 Create `todoHandler.ts` (we can also delete the other `hello` lambda function since we just used it for testing).

🤔 The source code is available [here](https://github.com/tlakomy/egghead-aws-cdk-workshop/blob/master/todo-app/lesson_07/lambda/todoHandler.ts).

```ts
import AWS = require("aws-sdk");
// the table name that we get from an env variable
const tableName = process.env.TABLE_NAME || "";
// for interacting with dynamoDB from JavaScript / nodeJS
const dynamo = new AWS.DynamoDB.DocumentClient();

const createResponse = (
    body: string | AWS.DynamoDB.DocumentClient.ItemList,
    statusCode = 200
) => {
    return {
        statusCode,
        body: JSON.stringify(body, null, 2)
    };
};
// DynamoDB Scan operation scans and returns all of the items in the db
const getAllTodos = async () => {
    const scanResult = await dynamo
        .scan({
            TableName: tableName
        })
        .promise();

    return scanResult;
};
// async function that respons to apiGateway events
exports.handler = async function(event: AWSLambda.APIGatewayEvent) {
    try {
        const { httpMethod, body: requestBody } = event;
        // GET request
        if (httpMethod === "GET") {
            const response = await getAllTodos();

            return createResponse(response.Items || []);
        }
        return createResponse(
            `We only accept GET requests for now, not ${httpMethod}`,
            500
        );
    } catch (error) {
        console.log(error);
        return createResponse(error, 500);
    }
};
```

We'll have to make some changes to our `todo-backend` file. Let's make a new `lambda` function:

`import * as lambda from "@aws-cdk/aws-lambda";`

```ts
// use this instead of const, you'll say in a moment
this.handler = new lambda.Function(this, "TodoHandler", {
    code: lambda.Code.fromAsset("lambda"),
    // the name of the method in your code that lambda will call
    // our file is called `todoHandler.ts` and it `exports.handler`
    handler: "todoHandler.handler",
    runtime: lambda.Runtime.NODEJS_12_X,
    // we need to pass the name of our table as env variable
    environment: {
        TABLE_NAME: todosTable.tableName
    }
});
```