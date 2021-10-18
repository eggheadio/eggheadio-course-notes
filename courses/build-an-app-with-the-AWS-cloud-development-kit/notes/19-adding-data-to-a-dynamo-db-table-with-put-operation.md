# Adding data to a DynamoDB table with put operation

**[📹 Video](https://egghead.io/lessons/aws-adding-data-to-a-dynamodb-table-with-put-operation)**

Let's implement the ability to add todos!

Start by updating the handler in our lambda, by adding:

```ts
try {
    const { httpMethod, body: requestBody } = event;
    // if GET return todos
    if (httpMethod === "GET") {
        const response = await getAllTodos();

        return createResponse(response.Items || []);
    }
    if (!requestBody) {
        return createResponse("Missing request body", 500);
    }

    // parsing the data we sent to the server
    const data = JSON.parse(requestBody);
    // if POST add a todo
    if (httpMethod === "POST") {
        const todo = await addTodoItem(data);
        return todo
            ? createResponse(`${todo} added to the database`)
            : createResponse("Todo is missing", 500);
    }
    // if DELETE, delete todo (we'll imlement that in the next lesson)
    if (httpMethod === "DELETE") {
        const id = await deleteTodoItem(data);
        return id
            ? createResponse(
                  `Todo item with an id of ${id} deleted from the database`
              )
            : createResponse("ID is missing", 500);
    }

    return createResponse(
        `We only accept GET, POST, OPTIONS and DELETE, not ${httpMethod}`,
        500
    );
} catch (error) {
    console.log(error);
    return createResponse(error, 500);
}
```

🤔 The source code is available [here](https://github.com/tlakomy/egghead-aws-cdk-workshop/blob/master/todo-app/lesson_08/lambda/todoHandler.ts).

Now let's write the function for adding the todos (head here for the [dynamoDB cheatsheet](https://github.com/dabit3/dynamodb-documentclient-cheat-sheet)).

We'll be using the `PUT` method, which either adds an item or replaces the item if the item already exists.

```ts
const addTodoItem = async (data: { todo: string; id: string }) => {
    const { id, todo } = data;
    if (todo && todo !== "") {
        await dynamo
            .put({
                // params object with two properties (TableName is our env variable)
                TableName: tableName,
                Item: {
                    id: "this_is_a_new_id",
                    todo
                }
            })
            .promise();
    }
    return todo;
};
```

👍 Let's deploy and test!

You'll need a REST client (like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/product/api-client/)) to test the `POST` request and of course, your app's endpoint.

For a `POST` request set the `body` to `JSON` (in Postman that means setting `Content-Type:application/json` in `Headers`).
