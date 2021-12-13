# Install Framer Motion and Create a Motion Component

[Video Link](https://app.egghead.io/lessons/react-install-framer-motion-and-create-a-motion-component?pl=animate-react-apps-with-framer-motion-aa83f52c)


We have a react list app that works, but it's pretty simple. We will add a bit of life to the app with Framer-motion.

You can install framer-motion by searching for framer-motion inside codesandbox's dependencies search as seen in the photo below or going to the terminal and typing `npm install framer-motion.`

<p align="left"><img src="https://p-zmfjnlq.b3.n0.cdn.getcloudapp.com/items/NQu70dZB/00aca4cb-71ee-4d33-a094-318790fdf6b8.jpg?source=viewer&v=8e037d777dbcd40c5829d12a9d31516c" width="340"></p>

After that you'll need to import framer at the top of the file you're working on

```jsx
import { motion } from "framer-motion"
```
<p align="left"><img src="https://p-zmfjnlq.b3.n0.cdn.getcloudapp.com/items/6quvl0zx/491a96d2-ff11-4635-8dc0-b423d69272ab.jpg?source=viewer&v=6953303e41345f3e6c91b03a6af6fbf7" width="340"></p>

lastly you will need to add `motion.` to any html or svg element. like this h1 example. 

```html
<motion.h1>Shopping List</motion.h1>
```
