# Manually Sign Up New Users in React with AWS Amplify Auth Class

> ❗ AWS Amplify is a framework in constant change and improvement. If you find something here or in the video that is outdated, or not working, please make sure you check the [Official documentation](https://docs.amplify.aws/) to clear your doubts.

**[📹 Video](https://egghead.io/lessons/react-native-manually-sign-up-new-users-in-react-with-aws-amplify-auth-class)**

> ❗ This lesson is using React Class Components. you are free to use the Class syntax or change to use Function components, the core Auth methods will work in both escenarios with a slight different Syntax

- Even you use Class components or function components, here are the `Auth` methods you need to perform **Sign up, Sign in and Sign out** operations
- Styling is something you can tweak to match your overall app design, there is no restrictions around this impose by the Amplify framework

## Sign up

```javascript
import { Auth } from "aws-amplify"

async function signUp() {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
        phone_number, // optional - E.164 number convention
        // other custom attributes
      },
    })
    console.log(user)
  } catch (error) {
    console.log("error signing up:", error)
  }
}
```

the `Auth.signUp` method returns a Promise with a data object of type `[ISignUpResult](https://github.com/aws-amplify/amplify-js/blob/4644b4322ee260165dd756ca9faeb235445000e3/packages/amazon-cognito-identity-js/index.d.ts#L136-L139)` with a `[CognitoUser](https://github.com/aws-amplify/amplify-js/blob/4644b4322ee260165dd756ca9faeb235445000e3/packages/amazon-cognito-identity-js/index.d.ts#L48)`

```javascript
{
  user: CognitoUser
  userConfirmed: boolean
  userSub: string
}
```

## Confirm Sign up

- this is required if you enabled multi-factor auth

```javascript
import { Auth } from "aws-amplify"

async function confirmSignUp() {
  try {
    await Auth.confirmSignUp(username, code)
  } catch (error) {
    console.log("error confirming sign up", error)
  }
}
```

- You can also pass **custom attributes** during the signup process like so:

```javascript
Auth.signUp({
  username,
  password,
  attributes: {
    email,
    "custom:favorite_flavor": "Cookie Dough", // custom attribute, not standard
  },
})
```

From the Official docs:

> Amazon Cognito does not dynamically create custom attributes on sign up. In order to use a custom attribute, the attribute must be first created in the user pool. To open the User Pool to create custom attributes using the Amplify ClI, run amplify console auth. If you are not using the Amplify CLI, you can view the user pool by visiting the AWS console and opening the Amazon Cognito dashboard.

## Sign in

```javascript
import { Auth } from "aws-amplify"

async function signIn() {
  try {
    const user = await Auth.signIn(username, password)
  } catch (error) {
    console.log("error signing in", error)
  }
}
```

### Re-send confirmation code

```javascript
import { Auth } from "aws-amplify"

async function resendConfirmationCode() {
  try {
    await Auth.resendSignUp(username)
    console.log("code resent successfully")
  } catch (err) {
    console.log("error resending code: ", err)
  }
}
```

## Sign out

```javascript
import { Auth } from "aws-amplify"

async function signOut() {
  try {
    await Auth.signOut()
  } catch (error) {
    console.log("error signing out: ", error)
  }
}
```

- You can even execute a [Global sign-out](https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js#global-sign-out) to sign out the user from all its devices

```javascript
import { Auth } from "aws-amplify"

async function signOut() {
  try {
    await Auth.signOut({ global: true }) // this is the main difference
  } catch (error) {
    console.log("error signing out: ", error)
  }
}
```

---

- 🤔 [Docs: Sign up, Sign in & Sign out](https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js)
- 🤔 [Docs: Authentication Contepts](https://docs.amplify.aws/lib/auth/overview/q/platform/js)
- 📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-use-the-aws-amplify-withauthenticator-hoc-to-implement-a-react-user-authorization-flow)
- 📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-create-interact-with-an-aws-appsync-graphql-api-with-aws-amplify)
