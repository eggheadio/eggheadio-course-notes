# Install & Configure the AWS Amplify CLI

**[📹 Video](https://egghead.io/lessons/react-install-configure-the-aws-amplify-cli)**

**[🤔 You can setup your project with a guided help from the Official AWS documentation here](https://docs.amplify.aws/start)**

## Prerequisites

- [Node.js](https://nodejs.org/) v10.x or later
- [npm](https://www.npmjs.com/) v5.x or later
- [git](https://git-scm.com/) v2.4.1 or later

- This tutorial assumes you are familiar with both JavaScript/ES6 and React. If you need to refresh some of the core concepts, we recommend you go through [the React official tutorial](https://reactjs.org/tutorial/tutorial.html)

- Also make sure you have an AWS account. You need one in order to follow all the steps. You can create an AWS account [here](https://portal.aws.amazon.com/billing/signup?redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start)

- 🤔 for the next steps, you have also this other video resource and follow the steps: https://www.youtube.com/watch?v=fWbM5DLh25U

- Install the CLI

```bash
npm install -g @aws-amplify/cli
```

- Configure the CLI with the user from your AWS account

```bash
amplify configure
```

- This command should open the AWS console. Log in with your account and jump back to the terminal (console)
- Specify the AWS reagion closer to you or the one you prefer
- Set the username of the user that we are about to create

```bash
Specify the AWS Region
? region:  # Your preferred region
Specify the username of the new IAM user:
? user name:  # User name for Amplify IAM user
Complete the user creation using the AWS console
```

- This should open the IAM dashboard in our AWS account with pre-configured settings that we can accept by clicking next in all the steps:
  - `Next: Permissions`
  - `Next: Review`
  - and finally `Create User`

> 🤔 Amazon IAM (Identity and Access Management) enables you to manage users and user permissions in AWS. You can learn more about Amazon IAM [here](https://aws.amazon.com/iam/).

- Now you will see the user created, with an `Access key ID` and a `Secret access key` which you need to paste in your terminal (console)
- Now you need to set a Profile Name (choose the name of your choice)
- and that's it!, you have the AWS Amplify CLI setup and ready to create new projects!

---

🤔 [Official Docs Tutorial](https://docs.amplify.aws/start/getting-started/installation/q/integration/react#sign-up-for-an-aws-account)

📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-create-configure-an-aws-amplify-project-with-a-react-application)
