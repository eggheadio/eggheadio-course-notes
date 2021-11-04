# 2 - Using React Native Linear Gradient for Making White Text Visible on Light Images

[Video Link](https://egghead.io/lessons/react-native-using-react-native-linear-gradient-for-making-white-text-visible-on-light-images)

# Notes

<TimeStamp start="0:30" end="0:32">

To make the test contrast more, we can use the following 

```jsx
textShadowColor:'black',
textShadowRadius:1
```
</TimeStamp>

<TimeStamp start="0:56" end="1:10">

Another approach would be implementing a background color for the image with a percentage of opacity, opacity specifies how transparent an element is: 

```jsx 
backgroundColor: 'rgba(0,0,0,0.4)' //This line of code is saying the background will be black with opacity of 40%
```

</TimeStamp>

<TimeStamp start="1:23" end="1:28">

Finally, what we could is to add `import LinearGradient from 'react-native-linear-gradient';`, change <View> to <LinearGradient> and add `colors={['transparent', 'rgba(0,0,0,0.4')]}`

</TimeStamp>

<TimeStamp start="1:44" end="1:46">

Don't forget to comment out the `backgroundColor: 'rgba(0,0,0,0.4)'`  

</TimeStamp>

