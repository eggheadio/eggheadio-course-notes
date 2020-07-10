# Create an S3 event notification to trigger a lambda function on file upload

**[📹 Video](https://egghead.io/lessons/aws-create-an-s3-event-notification-to-trigger-a-lambda-function-on-file-upload)**

Let's trigger our `lambda` function every time we upload a file to our `s3` bucket.

We'll need to install `s3 notifications`.

Run:
* `npm install --save @aws-cdk/aws-s3-notifications`

Import it to our stack file:

* `import * as s3Notifications from @aws-cdk/aws-s3-notifications;`

and then:

```ts
// attaching a notification to our logo bucket
logoBucket.addEventNotification(
    // every time a new file is added to our bucket
    s3.EventType.OBJECT_CREATED,
    // execute our lambda function
    new s3Notifications.LambdaDestination(helloLambda)
);
```

👍 Tip: Make sure you have `npm run watch` running in another terminal tab - this will let you know if there are any `typescript` errors.

In the `aws` console, go to **Services** and search for `s3`. Upload a file to the bucket then check if the `lambda` function was triggered by going back to **Services** and looking for `lambda`.

👍 You can see your recently accessed `aws` dashboards in the **History** sidebar on the left.

In your `lambda` dashboard notice how a new function was added (for me it was: `TodoAppStack-BucketNotificationsHandler050a0587b75-1BQ2LOUD7KPXI`).

Click on the `HelloLambda` function, then click **Monitoring** and **View logs in CloudWatch**.

Then click on the latest log and expand the `event` log (it will mention things like `eventVersion`, `eventSource` etc) and look for the information about your recently uploaded image.

Mine looked like this:
```json
"object": {
            "key": "Screenshot+2020-05-13+at+07.24.34.png",
            "size": 19145,
            "eTag": "40502d42d31dab5fe8581bd3d7ce0202",
            "sequencer": "005EBCD5882BF314F4"
        }
```
