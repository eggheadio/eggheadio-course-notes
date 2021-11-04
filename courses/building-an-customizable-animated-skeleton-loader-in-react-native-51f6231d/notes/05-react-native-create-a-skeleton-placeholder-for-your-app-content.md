# 5 - Create a Skeleton Placeholder for your App Content

[Video Link](https://egghead.io/lessons/react-native-create-a-skeleton-placeholder-for-your-app-content)

# Notes

<TimeStamp start="0:55" end="1:00">

Create a new file called `ItemListLoader.js` and add the following 

```jsx
import * as React from 'react';
import { View } from 'react-native';

export const ItemListLoader = () => {
    return <View />;
}
```

</TimeStamp>

<TimeStamp start="0:22" end="0:23">

```jsx
<View style={[styles.line, {width: width * 0.6 }]} />
<View style={[styles.line, {width: width * 0.4 }]} />
<View style={[styles.line, {width: width * 0.2 }]} />
```

</TimeStamp>

