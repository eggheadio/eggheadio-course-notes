# Animate through Multiple States with Keyframes

[Video Link](https://app.egghead.io/lessons/egghead-animate-through-multiple-states-with-keyframes?pl=animate-react-apps-with-framer-motion-aa83f52c)

<TimeStamp start="0:00" end="0:24">

The properties you pass inside the animate prop don't have to take one value. You can use keyframes. 

Keyframes use an arrey `[]`. Using the values passed inside the keyframe arrey, you can create a sequence to the value you want to animate.

</timeStamp>

<TimeStamp start="0:24" end="0:52">

For example, with the `y-axis`, we can use a keyframe array to animate the header up and down by creating a sequence of positions.

```jsx
animate={{ y: [-200, 0, 200, -200, 0]}}
```

</timeStamp>

<TimeStamp start="0:53" end="1:05">

Using the `transition prop`, let's customize the duration of the animations to 2.

```jsx
animate={{ opacity: 1, y: [-200, 0, 200, -200, 0]}}
transition={{ duration: 2}}
```

</timeStamp>

<TimeStamp start="1:14" end="1:28">

By default, Framer animates the values inside the array at the same speed/intervals in between each animation. You can customize that by using the `times prop`

</timeStamp>

<TimeStamp start="1:28" end="2:15">

The `times prop` is also an array. The number of items in the time's array must match the same amount of items in the array you want to animate. 

`Times` let's us use the values 0 to 1 in ascending order. Increasing in value will increase the animation intervals speed. On refresh, you can now see that at 0 it'll start off at -200 pixels, at 0.2 it'll be at 0, then 0.3 it'll be at 200, and etc.

```jsx
animate={{ opacity: 1, y: [-200, 0, 200, -200, 0]}}
transition={{ duration: 2, times: [0, 0.2, 0.3, 0.7, 0.9, 01]}}
```
</timeStamp>

<TimeStamp start="2:27" end="2:15">

So If you ever want to animate through different states and pass more than one value to any prop inside the animate property, you can pass an array called a keyframe thats customizable with other properties. On top of all this, you can use the time's property to customize the time in between each animation

</timeStamp>