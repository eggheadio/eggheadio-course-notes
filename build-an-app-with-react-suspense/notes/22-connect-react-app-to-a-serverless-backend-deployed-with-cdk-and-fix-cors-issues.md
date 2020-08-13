# Connect React app to a serverless backend deployed with CDK and fix CORS issues

**[📹 Video](https://egghead.io/lessons/aws-connect-react-app-to-a-serverless-backend-deployed-with-cdk-and-fix-cors-issues)**

Let's connect our backend to a frontend react application. Download the `frontend` directory from [here](https://github.com/tlakomy/egghead-aws-cdk-workshop).

Your root directory should now look like this:
```
.
├── frontend
└── todoApp
```

Go to `frontend` and install all dependencies by running:

* `yarn install`.

And then:

*  `yarn start`

Unfortunately, you'll get the following error:

*  `failed to load resource: net::ERR_NAME_NOT_RESOLVED`.

To fix the error, go to the `app.tsx` in the frontend application.

There's an issue with the `APIendpoint` which we should be passing as an `env` variable `REACT_APP_TODO_ENDPOINT` (in the `.env` file). Replace the dummy url provided with your own (you can copy it from the REST Client).

👍 Restart the app and try again.

Now we will encounter a `CORS` issue. To fix it modify the `createReponse` function in your `lambda` file so that it includes the two `headers` properties and returns this:

```ts
return {
    statusCode,
    headers: {
      // this API can be accessed from all origins
      "Access-Control-Allow-Origin": "*",
      // and will allow for all of these methods
      // OPTIONS is a pre-flight method and is sent before the actual method `GET`, `POST`, `DELETE`
      "Access-Control-Allow-Methods": "OPTIONS,GET,POST,DELETE"
    },
    body: JSON.stringify(body, null, 2)
};
```

🤔 [More about the `OPTIONS` method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS).

Finally, add this to the handler (in the same file):
```ts
if (httpMethod === "OPTIONS") {
    return createResponse("ok");
}
```

👍 Deploy, and now your frontend app should be working.
