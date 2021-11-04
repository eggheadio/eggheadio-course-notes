# 6 - Animating a Skeleton Loader using Reanimated 2

[Video Link](https://egghead.io/lessons/react-native-animating-a-skeleton-loader-using-reanimated-2)

# Notes

<TimeStamp start="0:35" end="0:40">

Create a new file called `SkeletonLoader.js` and add the following 

```jsx 
import * as React from 'react';
import { View } from 'react-native';

export const SkeletonLoader = ({ children }) => {
    const [layout, setLayout] = React.useState();

    if (!layout) {
    return <View> {children} </View>
    }
}
```

</TimeStamp>

<TimeStamp start="9:20" end="9:25">

You can find the full code for this lesson [here](https://snack.expo.dev/@kadikraman/animated-skeleton-loader)

</TimeStamp>

