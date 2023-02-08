# Create Dynamic Animation Values for Different Elements with Custom

[Video Link](https://app.egghead.io/lessons/egghead-create-dynamic-animation-values-for-different-elements-with-custom?pl=animate-react-apps-with-framer-motion-aa83f52c)

<TimeStamp start="0:00" end="0:15">

When we have multiple items on our list and refresh the page, they all load in simultaneously. This is not the worst, but we can make it into something better.

</TimeStamp>

<TimeStamp start="0:15" end="0:32">

Using variants, let's make it so each item loads in one after another instead of all at once. We use varients since It will allow every child component to be animated. 

</TimeStamp>

<TimeStamp start="0:32" end="0:48">

There is a component called staggerChildren used with your transition prop. However, since `exit="hidden"` is already in use, It wouldn't work as expected. Instead, we will use a `custom data-dynamic` inside our variant 

</TimeStamp>

<TimeStamp start="0:48" end="1:01">

To start, go to the variant label we created and paste in the new `visible` information below.

```jsx
const itemVarients = {
    hidden: { opacity: 0 },

    visible: (custom) => ({ 
      opacity: 1, 
      transition: { delay: custom }
  })
\\
```
</TimeStamp>

<TimeStamp start="1:01" end="1:13">

We pasted in a function that returns an object. The opacity is set to 1, so that doesn't change, but the transition is going to have a delay.

</TimeStamp>

<TimeStamp start="1:13" end="1:23">

Since we want each of these items to animate one at a time, the delay will be a dynamic value which is where custom comes in. 

</TimeStamp>

<TimeStamp start="1:23" end="1:32">

Inside our `motion.li` item let's add a custom prop

```jsx
custom={(index + 1) * 0.2}
```

</TimeStamp>

<TimeStamp start="1:32" end="1:50">

`Index + 1` will go through each item we have listed and multiply It by `0.2` seconds. So every time we add a new item to the index, it will add 0.2 seconds to it

</TimeStamp>

<TimeStamp start="1:50" end="1:59">

What's added in the custom prop will be the value of transition delay inside the variant label

</TimeStamp>

<TimeStamp start="2:00" end="2:24">

If you refresh the page the items will load in staggered now. 

</TimeStamp>








