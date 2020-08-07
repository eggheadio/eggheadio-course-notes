# Display Local and Remote Images in React Native

**[📹 Video](https://egghead.io/lessons/react-native-display-local-and-remote-images-in-react-native)**

## High resolution images

We can specify higher resolution images for higher density screens by appending `@2x` or `@3x` to the image name.

```bash
.
├── coffee.png
├── coffee@2x.png
└── coffee@3x.png
```

When importing the images, the `@2x` and `@3x` are excluded from the path, however the extension is required.

```jsx
import coffee from '../images/coffee.png'
```

## Displaying images

React Native's `<Image />` component is used to display images - similar to the `<img />` element in HTML. The `source` prop is used instead of `src` to specify the image's path.

When using a local image, the image is passed to the `source` prop, however, when loading a remote image - such as a URL - you must provide an object to `source` with a `uri` property.

Local:

```jsx
import { Image } from 'react-native'
import coffee from '../images/coffee.png'
...
<Image source={coffee} />
```

Remote:

```jsx
import { Image } from 'react-native'
...
<Image source={{ uri: 'https://good-coffee.com/coffee.png' }} />
```

Dimensions must be specified for the `<Image />` component to display.

```jsx
<Image
  source={coffee}
  style={styles.img}
/>

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
  },
})
```

👍If the dimensions aspect ratio is incorrect, the `<Image />` component will automatically clip the image. This behavior can be overridden with the `resizeMode` prop.

```jsx
<Image
  source={coffee}
  style={styles.img}
  resizeMode="contain"
/>

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 100,
  },
})
```

## New component

🤔[`<Image />`](https://reactnative.dev/docs/image) - used for displaying images.

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-fetch-data-from-an-http-server-in-a-react-native-application-using-fetch-or-axios)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-add-icons-to-a-react-native-app-with-react-native-vector-icons)
