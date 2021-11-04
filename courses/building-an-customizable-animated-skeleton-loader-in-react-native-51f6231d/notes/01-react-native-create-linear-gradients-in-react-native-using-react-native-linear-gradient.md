# 1 - Create Linear Gradients in React Native Using React Native Linear Gradient

[Video Link](https://egghead.io/lessons/react-native-create-linear-gradients-in-react-native-using-react-native-linear-gradient)

# Notes

<TimeStamp start="0:04" end="0:05">

[LinearGradient Documentation](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)

</TimeStamp>

<TimeStamp start="0:30" end="0:31">

[React Native Linear Gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)

</TimeStamp>

<TimeStamp start="0:35" end="0:36">

`yarn add react-native-linear-gradient`

</TimeStamp>

<TimeStamp start="0:40" end="2:05">

- `cd ios`
- `pod install`

</TimeStamp>


<TimeStamp start="0:58" end="3:39">

`npx react-native run-ios`

</TimeStamp>

<TimeStamp start="1:05" end="1:06">

`import LinearGradient from 'react-native-linear-gradient';`

</TimeStamp>

<TimeStamp start="2:03" end="2:08">

You can change the direction of your gradient:

```jsx 
// Direction goes default direction
start={{x:0, y:0}}
end={{x: 0, y:1}}
// Reverse direction
start={{x:0, y:1}}
end={{x: 0, y:0}}
// Left to right 
start={{x:0, y:0}}
end={{x: 1, y: 0}}
// Right to left 
start={{x:1, y:0}}
end={{x: 0, y:0}}
// Diagonal 
start={{x:1, y:0}}
end={{x: 0, y:1}}
```

</TimeStamp>

