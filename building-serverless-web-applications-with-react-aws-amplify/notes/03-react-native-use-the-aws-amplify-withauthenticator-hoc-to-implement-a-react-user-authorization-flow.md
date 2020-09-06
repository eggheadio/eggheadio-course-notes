# Use the AWS Amplify withAuthenticator HOC to Implement a React User Authorization Flow

> ❗ AWS Amplify is a framework in constant change and improvement. If you find something here or in the video that is outdated, or not working, please make sure you check the [Official documentation](https://docs.amplify.aws/) to clear your doubts.

**[📹 Video](https://egghead.io/lessons/react-native-use-the-aws-amplify-withauthenticator-hoc-to-implement-a-react-user-authorization-flow)**

- the Amplify CLI comes with commands to help you create and add services to your applications
- in this lesson, you will add authentication service to your app

- First, in the root of your project, you run:

```bask
amplify add auth

? Do you want to use the default authentication and security configuration? Default configuration
? How do you want users to be able to sign in? Username
? Do you want to configure advanced settings?  No, I am done.
```

- In order to deploy the service, you can run:

```bash
amplify push
```

- this will show you the operation it will execute. This process may take a while depending on the service you are pushing (First time always takes a little more)

```bash
$ amplify push
✔ Successfully pulled backend environment dev from the cloud.

Current Environment: dev

| Category | Resource name       | Operation | Provider plugin   |
| -------- | ------------------- | --------- | ----------------- |
| Auth     | <__RESOURCE_NAME__> | Create    | awscloudformation |
? Are you sure you want to continue? Yes
```

- after the process is finished, we can now setup and configure our React app with the new AWS resource.

- open `src/index.js` and include the next lines of code:

```javascript
import Amplify from "aws-amplify"
import awsExports from "./aws-exports"
Amplify.configure(awsExports)
```

> 👍 The `aws-exports.js` file is auto-generated, so you should not edit this file during this steps ( ...or any really XD )

- Now we can go to `src/App.js` to secure our app with our Auth service:

```javascript
// 1. import the `withAuthenticator` component
import { withAuthenticator } from "@aws-amplify/ui-react"

// 2. Change the default export with a `withAuthenticator` call passing the main component
export default withAuthenticator(App)
```

- Now we can run our app again and see the new Authentication flow that protects our whole app

```bash
yarn start
# or
npm start
```

- You should be able to see the app loads with an authentication flow in place (auth form)
- If you create a user and log in, even if you refresh the page you will be still logged in, that's because your user sessions is stored in localStorage by the Library itself.
- you are using the default React UI library for the form component, but you can customize it the way you prefer
  - Customize the look and feel
  - Add/Remove fields
  - and also other configurations
- You have access to the `Auth` class too, which lets you create your own custom Auth flow
- `Auth` has over 30 methods including `signUp`, `signIn`, `forgotPassword` and `signOut`, that gives you full control over all the Authentication flow.

> ❗ To include a sign out button, you need to follow other steps rather than adding a second parameter to the `withAuthenticator` High-order component (HoC). You can follo the new steps [here](https://docs.amplify.aws/lib/auth/getting-started/q/platform/js#option-2-call-authentication-apis-manually)

## References and Resources

- 🤔 [Official Docs: Add Authentication](https://docs.amplify.aws/start/getting-started/auth/q/integration/react)
- 🤔 [Official Docs: Configure your React app (frontend)](https://docs.amplify.aws/start/getting-started/setup/q/integration/react#set-up-frontend)
- 🤔 [Complete Auth Class API](https://aws-amplify.github.io/amplify-js/api/classes/authclass.html)
- 🤔 [Authentication Documentation](https://docs.amplify.aws/lib/auth/getting-started/q/platform/js#authentication-with-amplify)
- 🤔 [Amazon Cognito user Pools](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html)

---

- 📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-create-configure-an-aws-amplify-project-with-a-react-application)
- 📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-manually-sign-up-new-users-in-react-with-aws-amplify-auth-class)
