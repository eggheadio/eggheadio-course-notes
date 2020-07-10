# Debug permission issues and allow a lambda function to access data from a DynamoDB table

**[📹 Video](https://egghead.io/lessons/aws-debug-permission-issues-and-allow-a-lambda-function-to-access-data-from-a-dynamodb-table)**

Let's deploy our changes and test the new `lambda` function.

A successful deploy will output a url (mine looks like this:
`https://6olvq234234.execute-api.eu-central-1.amazonaws.com/prod/`).

Unfortunately, if you `curl` that url (or paste it into your web browser), you'll discover the following error:
* `AccessDeniedException`

To debug this, let's go to the `aws` console and look for our `lambda` function (under resources in Cloudformation).

Click **Monitoring** and **View Cloud logs**, then click on the latest log stream. You should find an error like this:
* `is not authorized to perform: dynamodb:Scan on resource:`

👍 By default, `aws` follows the principle of the least privilege, so we'll have to add some permissions.

We need this line of code to our `lambda`:
* `todosTable.grantReadWriteData(this.handler);`

Test if the fix worked, by `curl`-ing the outputted url. It should return your todos.