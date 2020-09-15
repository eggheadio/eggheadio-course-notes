# Store Data in Amazon S3 with React

> ❗ AWS Amplify is a framework in constant change and improvement. If you find something here or in the video that is outdated, or not working, please make sure you check the [Official documentation](https://docs.amplify.aws/) to clear your doubts.

**[📹 Video](https://egghead.io/lessons/react-native-store-data-in-amazon-s3-with-react)**

## What the freak is S3??

- from the [official docs](https://docs.amplify.aws/lib/datastore/getting-started/q/platform/js):

> AWS Amplify Storage module provides a simple mechanism for managing user content for your app in public, protected or private storage buckets. The Storage category comes with built-in support for Amazon S3.

- to get started with adding storage to our app, lets go to the command line and type:

```bash
amplify add storage

? Please select from one of the below mentioned services (Use arrow keys)
❯ Content (Images, audio, video, etc.)
  NoSQL Database
? Please provide a friendly name for your resource that will be used to lael this category in the project: <YOUR_PREFERED_NAME>
? Please provide a bucket name: <YOUR_PREFERED_NAME>
? Who should have access: (Use arrow key)
❯ Auth users only
  Auth and Guest users
? What kind of access do you want for Authenticated users (Use arrow key)
  read
  write
❯ read/write
```

- With the configuration setup, now you need to push it to your AWS Account with `amplify push`
- When this is finished, lets jump to `App.js`

> 🤔 Remember that you need to [Configure your React App](03-react-native-use-the-aws-amplify-withauthenticator-hoc-to-implement-a-react-user-authorization-flow.md) in order to successfully connect your app with your AWS Amplify Services

> ❗ the example above is using Functional components, not Class components as in the video

```javascript
import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { withAuthenticator } from "@aws-amplify/ui-react"
import { Storage } from "aws-amplify"

function App() {
  const [media, setMedia] = React.useState({})

  function handleChange(e) {
    const file = e.target.files[0]
    setMedia({
      fileUrl: URL.createObjectURL(file),
      file,
      filename: file.name,
    })
  }

  async function saveFile() {
    Storage.put(media.filename, media.file)
      .then(() => {
        console.log("successfully uploading file!")
        setMedia({})
      })
      .catch((err) => {
        console.log("error uploading file!", err)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <input type="file" onChange={handleChange} />
      <img src={media.fileUrl} />
      <button onClick={saveFile}>Save File</button>
    </div>
  )
}

export default withAuthenticator(App)
```

- when this is ready, you can go to your command line and run `npm start` or `yarn start` and see the result in the browser ([http://localhost:3000/](http://localhost:3000/))
- When you add a file and save it, you should be able to see the successful message in the console

![React App](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1549391501/transcript-images/react-native-store-data-in-amazon-s3-with-react-successfully-saved-file.jpg)

- The file should be in the bucket you just create it in your AWS Amazon account. You can search for it in the AWS Console

![AWS Console Bucket public folder](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1549391502/transcript-images/react-native-store-data-in-amazon-s3-with-react-s3-public-folder-images.jpg)

- Copy one of the file's names to your clipboard, and go back to the `App.js` file. Lets see how we can retrieve a file from our bucket
- Lets update our code to the above:

```javascript
import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { withAuthenticator } from "@aws-amplify/ui-react"
import { Storage } from "aws-amplify"

function App() {
  const [fileUrl, setFileUrl] = React.useState("")

  React.useEffect(() => {
    Storage.get("IMAGE_URL_YOU_COPIED")
      .then((data) => {
        setFileUrl(data)
      })
      .catch((err) => {
        console.log("error fetching image")
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <img src={fileUrl} />
    </div>
  )
}

export default withAuthenticator(App)
```

- when this is ready, you can go to your command line and run `npm start` or `yarn start` and see the result in the browser ([http://localhost:3000/](http://localhost:3000/))

![React App](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1549391505/transcript-images/react-native-store-data-in-amazon-s3-with-react-image-rendered.jpg)

- amplify add storage
  - content
  - change name
  - use bucket name (unique)
  - auth users only
  - read/write
- amplify push
- in App.js add an input handler (follow the guide)
- open the bucket
- update the app to get files?
  - maybe check the guides and see what is up to date

## References and Resources

- [AWS Amplify Storage Official documentation](https://docs.amplify.aws/lib/storage/getting-started/q/platform/js)
- [Storage Core Contepts](https://docs.amplify.aws/lib/storage/overview/q/platform/js)

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-create-interact-with-a-serverless-rest-api-with-aws-lambda-from-react)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-deploy-your-react-application-to-aws-using-the-amplify-cli)
