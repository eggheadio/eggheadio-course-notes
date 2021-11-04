# 3 - Mask UI Elements in React Native With React Native Masked View

[Video Link](react-native-mask-ui-elements-in-react-native-with-react-native-masked-view)

# Notes

<TimeStamp start="0:23" end="0:24">

[React Native - Mask VIew](https://github.com/react-native-masked-view/masked-view)

</TimeStamp>

<TimeStamp start="0:42" end="0:44">

`yarn add @react-native-masked-view/masked-view`

</TimeStamp>

<TimeStamp start="1:07" end="1:08">

`import MaskedView from '@react-native-masked-view/masked-view';`

</TimeStamp>

<TimeStamp start="1:17" end="1:20">

```jsx 
<MaskedVIew maskElement={<Text style={styles.text}> Hello, world!</Text>}>
    <View styles={styles.content}>
        <View style={styles.first} />
        <View style={styles.second} />
        <View style={styles.third}/>
    </View>
</MaskedView>
```

</TimeStamp>
