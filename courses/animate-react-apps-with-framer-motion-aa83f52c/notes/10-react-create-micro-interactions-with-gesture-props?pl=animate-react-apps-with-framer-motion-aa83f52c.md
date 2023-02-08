# Create Micro Interactions with Gesture Props

[Video Link](https://app.egghead.io/lessons/react-create-micro-interactions-with-gesture-props?pl=animate-react-apps-with-framer-motion-aa83f52c)

<TimeStamp start="0:00" end="0:28">

In this lesson, we will be making this application more interactive. Right now, if you hover over the items in your list, nothing happens. We can change that by adding some micro-interactions to the application.

</TimeStamp>

<TimeStamp start="0:28" end="0:47">

On our `motion.li` component add the `whileHover` prop with scale set to 1.05.

```jsx
whileHover={{scale: 1.05}}
```
</TimeStamp>

<TimeStamp start="0:47" end="1:05">

now once we save and refresh the items will scale just a tad bit once you hover over them.

</TimeStamp>

<TimeStamp start="1:05" end="1:22">

Lets add one more called `whileTap`

```jsx
whileTap={{scale: 1.1}}
```
</TimeStamp>


<TimeStamp start="1:23" end="1:22">

Now once you click an item It will get bigger as well.

</TimeStamp>

<TimeStamp start="1:23" end="1:22">

These helper gesture props automatically know you when to temporarily animate to a different visual state during tapping, hovering, etc

</TimeStamp>



