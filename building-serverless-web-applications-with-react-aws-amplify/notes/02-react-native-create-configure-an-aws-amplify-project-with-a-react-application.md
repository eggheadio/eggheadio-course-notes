# Create & Configure an AWS Amplify Project with a React Application

**[📹 Video](https://egghead.io/lessons/react-native-create-configure-an-aws-amplify-project-with-a-react-application)**

- create a Create-React-App using `npx` and run inside the app `amplify init`

```bash
npx create-react-app <YOUR-APP-NAME> # YOUR-APP-NAME can be any name
cd <YOUR-APP-NAME>
```

- Fron the root of your project, run:

```bash
amplify init
```

You will be prompted for some information about the app:

```bash
Enter a name for the project (<YOUR-APP-NAME>)

# All AWS services you provision for your app are grouped into an "environment"
# A common naming convention is dev, staging, and production
Enter a name for the environment (dev)

# Sometimes the CLI will prompt you to edit a file, it will use this editor to open those files.
Choose your default editor

# Amplify supports JavaScript (Web & React Native), iOS, and Android apps
Choose the type of app that you're building (javascript)

What JavaScript framework are you using (react)

Source directory path (src)

Distribution directory path (public)

Build command (yarn build)

Start command (yarn start)

# This is the profile you created with the `amplify configure` command in the introduction step.
Do you want to use an AWS profile
```

> ❗ The default build folder for a Create React App application is `public` and not `build`

- the Amplify CLI will infer as much information as it can from the current project setup.
- A few things happen with this process:

  - a directory called `amplify` at the top level of the app, that stores your backend definition
  - a file called `aws-exports` in the `src` directory that holds all the configuration for the services you create and will create with AWS Amplify
  - it modifies the `.gitignore` file adding some generated files to the ignore list
  - A cloud project is created in your AWS Amplify console

- now let's install the react-amplify libraries needed

```bash
npm install aws-amplify @aws-amplify/ui-react
# or
yarn add aws-amplify @aws-amplify/ui-react
```

> ❗ the React Library has a new package name! (@aws-amplify/ui-react)

- Now we are ready to add new features to our React app!

---

🤔 [Oficial Documentation Tutorial](https://docs.amplify.aws/start/getting-started/setup/q/integration/react#initialize-a-new-backend)

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-install-configure-the-aws-amplify-cli)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-use-the-aws-amplify-withauthenticator-hoc-to-implement-a-react-user-authorization-flow)
