# Create & Interact with a Serverless REST API with AWS Lambda from React

> ❗ AWS Amplify is a framework in constant change and improvement. If you find something here or in the video that is outdated, or not working, please make sure you check the [Official documentation](https://docs.amplify.aws/) to clear your doubts.

**[📹 Video](https://egghead.io/lessons/react-native-create-interact-with-a-serverless-rest-api-with-aws-lambda-from-react)**

## AWS Amplify !== AWS AppSync

[Appsync](https://aws.amazon.com/appsync/) is the AWS service focus on creating flexible APIs, and Amplify is the framework that combines multiple AWS tools to help you build any type of Application.

## Create a REST API

```bash
amplify add api
```

Select the following options:

```bash
? Please select from one of the below mentioned services: REST
? Provide a friendly name for your resource to be used as a label for this category in the project: peopleapi
? Provide a path (e.g., /items): /people (or whatever path you would like)
? Choose a Lambda source: Create a new Lambda function
? Provide a friendly name for your resource to be used as a label for this category in the project: peoplefunction
? Provide the AWS Lambda function name: peoplefunction
? Choose the function runtime that you want to use: NodeJS
? Choose the function template that you want to use: Serverless express function
? Do you want to access other resources created in this project from your Lambda function? y
```

- This should open your new Lambda function file to start editing (`/amplify/backend/function/peoplefunction/src/app.js`)
- Now go and replace the generated code on `app.get('/people', ...)` with the above code

```javascript
app.get('/people', function (req, res) {
  const people = [
    {name: "Nader". hair_color: 'brown'},
    {name: "Lilly". hair_color: 'black'},
    {name: "Victor". hair_color: 'blonde'}
  ]

  res.json({
    people
  })
});
```

- Save this file and go back to the command line and continue with the prompt questions

```
? Do you want to invoke this function on a recurring schedule? N
? Do you want to edit the local lambda function now? N
? Restrict API access: Y
? Who should have access? (Use arrow key)
❯ Authenticated users only
  Authenticated and Gest users
? What kind of access do you eant for Authenticated users (Use arrow key)
❯ read
  write
  read/write
? Do you want to add another path? N
```

- With the configuration setup, now you need to push it to your AWS Account with `amplify push`
- When this is finished, lets jump to `App.js`

> 🤔 Remember that you need to [Configure your React App](03-react-native-use-the-aws-amplify-withauthenticator-hoc-to-implement-a-react-user-authorization-flow.md) in order to successfully connect your app with your AWS Amplify Services

```javascript
import { API } from "aws-amplify"
```

- and last lets glue all together in React (the example above is using Functional components, not Class components as in the video)

```javascript
import React from "react"
import { withAuthenticator } from "@aws-amplify/ui-react"
import { API } from "aws-amplify"

function App() {
  const [people, setPeople] = React.useState([]) // important to initialize your state with an empty array!

  React.useEffect(() => {
    async getPeople() {
    const data = await API.get('peopleapi', '/people')
    setPeople(data.people)
    }

    getPeople() // Async functions are not permitted as `useEffect` functions parameters. that's why I created another async function inside of it instead
  }, [])

  return (
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
    </header>
    {
      people((person, i)) => (
        <div>
          <h3>{ perosn.name }</h3>
          <p>{ person.hair_color }</p>
        </div>
      ))
    }
    </div>
  );
}

export default withAuthenticator(App)
```

- when this is ready, you can go to your command line and run `npm start` or `yarn start` and see the result in the browser ([http://localhost:3000/](http://localhost:3000/))

![React App](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1549391501/transcript-images/react-native-create-interact-with-a-serverless-rest-api-with-aws-lambda-from-react-data-rendered-in-app.jpg)

- Now go one level further, and query data from another API and return it through our own API
- install `axios` as a dependency off your lambda function code, you should navigate to the function's package project and install it as below

```bash
cd amplify/backend/function/peoplefunction/src
yarn add axios
```

now open your Lambda function code (`/amplify/backend/function/peoplefunction/src/app.js`) and updated with the code below

```javascript
var axios = require("axios")

app.get("/people", function (req, res) {
  // const people = [
  //   {name: "Nader". hair_color: 'brown'},
  //   {name: "Lilly". hair_color: 'black'},
  //   {name: "Victor". hair_color: 'blonde'}
  // ]

  axios
    .get(`https://swapi.co/api/people/`)
    .then((response) => {
      const people = response.data.results
      res.json({
        people,
        error: null,
      })
    })
    .catch((err) => {
      res.json({
        error: err,
        people: null,
      })
    })
})
```

- save the file and go back to the command line
- With the Lambda function updated, you need to push it to your AWS Account again with the command `amplify push` (You should see the `Function` resource with the operation set to `Update`)
- when this is ready, you can go to your command line and run `npm start` or `yarn start` and see the result in the browser ([http://localhost:3000/](http://localhost:3000/))
- When the app loads, we should now see the data being returned from the Star Wars API.

![React App](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1549391502/transcript-images/react-native-create-interact-with-a-serverless-rest-api-with-aws-lambda-from-react-star-wars-api-data.jpg)

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-create-interact-with-an-aws-appsync-graphql-api-with-aws-amplify)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-store-data-in-amazon-s3-with-react)
