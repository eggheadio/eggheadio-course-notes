# 05 - Generate an Access Token for Users with Twilio Serverless Functions

[Video link](https://egghead.io/lessons/gatsby-generate-an-access-token-for-users-with-twilio-serverless-functions)

First thing, is to sign up to a new account on Twilio.
![twilio signup form](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1576277267/transcript-images/gatsby-generate-an-access-token-for-users-with-twilio-serverless-functions-sign-up-form.jpg)
Once logged in, go to the _console_, click `I do write code` and select `Node`. Now, head over to the Dashboard.
![Twilio dashboard](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1576277267/transcript-images/gatsby-generate-an-access-token-for-users-with-twilio-serverless-functions-twilio-dashboard.jpg)
Head to settings and generate a new standard API key. Copy the SID and Token, you're going to need those in a bit.
![creating a twilio api key](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1576277267/transcript-images/gatsby-generate-an-access-token-for-users-with-twilio-serverless-functions-twilio-api-key-creation.jpg)
Next, we'll create a serverless function. So, from `All products and services` on the left, represented by `...` select `Functions` from the `Runtime` submenu. You can pin this option to make it easily accessible later.
![twilio sidebar runtime functions](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1576277267/transcript-images/gatsby-generate-an-access-token-for-users-with-twilio-serverless-functions-runtime-functions.jpg)
In our function, we firstly want to allow our API token and secret to be available from earlier. So, in functions select configure and check the `Enable ACCOUNT_SID and AUTH_TOKEN` check box so allow these to be accessible in our function.
Now, we need to add the API_KEY and API_SECRET as variables. They are called different things in different places so for us:
API_KEY -> Twilio Account SID
API_SECRET -> Twilio Auth Token
Save this, head back to `Manage` and create a new function using a `blank` template. Call it _Create Room Token_ and set the path to /create-room-token. Copy this endpoint URL for later.
![blank template](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1576277267/transcript-images/gatsby-generate-an-access-token-for-users-with-twilio-serverless-functions-blank-template.jpg)
We don't need to `check for valid Twilio signature` and we don't need any events. For the code block, delete everything inside the function.
For our code, we'll destructure the ACCOUNT_SID, API_KEY and API_SECRET from process.env.
Then we will use the Twilio object, which has a ton of helper functions, to get the AccessToken function.

### "Code" Textarea

```js
exports.handler = function(context, event, callback) {
  const { ACCOUNT_SID, API_KEY, API_SECRET } = process.env;
  const AccessToken = Twilio.jwt.AccessToken;
};
```

![functions configuration](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1576277267/transcript-images/gatsby-generate-an-access-token-for-users-with-twilio-serverless-functions-functions-configuration.jpg)
We will need to set the VideoGrant which is provided through the AccessToken. We can then initialize the grant and the token with our destructured variables above.

### "Code" Textarea

```js
exports.handler = function(context, event, callback) {
  const { ACCOUNT_SID, API_KEY, API_SECRET } = process.env;
  const AccessToken = Twilio.jwt.AccessToken;
  const VideoGrant = AccessToken.VideoGrant;

  const grant = new VideoGrant();
  const token = new AccessToken(ACCOUNT_SID, API_KEY, API_SECRET);
};
```

We will set the `token.identity` based on the `event.identity` as we grab the requested name from the form submission. The last step, before we start constructing the response to add the video grant to the token. This is a way of confirming that this person is allowed to use the video functionality.

### "Code" Textarea

```js
exports.handler = function(context, event, callback) {
  const { ACCOUNT_SID, API_KEY, API_SECRET } = process.env;
  const AccessToken = Twilio.jwt.AccessToken;
  const VideoGrant = AccessToken.VideoGrant;

  const grant = new VideoGrant();
  const token = new AccessToken(ACCOUNT_SID, API_KEY, API_SECRET);

  token.identity = event.identity;
  token.addGrant(grant);
};
```

Now we are ready to create our response. We'll again use the Twilio object which has a Response() convenience method to ensure we pass a valid response object. We'll set some headers:

- allow for cross origin requests to make sure that any domain can request this resource
- define the allowed methods/HTTP verbs
- define the allowed headers
- declare the content-type

```js
const response = new Twilio.Response();

response.setHeaders({
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json"
});
```

The body of our response is going to be a JSON Web Token, so we'll convert our token to that format. Finally, we will use the `callback` function. The first parameter is the `error` for which we will pass `null`. The second is our constructed `response`. Our final code block should now look like this:

### "Code" Textarea

```js
exports.handler = function(context, event, callback) {
  const { ACCOUNT_SID, API_KEY, API_SECRET } = process.env;
  const AccessToken = Twilio.jwt.AccessToken;
  const VideoGrant = AccessToken.VideoGrant;

  const grant = new VideoGrant();
  const token = new AccessToken(ACCOUNT_SID, API_KEY, API_SECRET);

  token.identity = event.identity;
  token.addGrant(grant);

  const response = new Twilio.Response();

  response.setHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  });

  response.setBody(token.toJwt());

  callback(null, response);
};
```

Once this is done, we can save and Twilio will deploy our function.

### Personal Take

**Summary**: Creating a serverless function on Twilio to generate an access token. This is a walk-through of there platform with some code. Could be quite brittle if Twilio make major updates there.
