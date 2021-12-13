# Control Animations with Framer Motion's Animate Prop

[Video Link](https://app.egghead.io/lessons/react-control-animations-with-framer-motion-s-animate-prop?pl=animate-react-apps-with-framer-motion-aa83f52c)

<TimeStamp start="0:00" end="0:18">

To start, we add an `animate` prop to the `motion.h1`. Animate will take an object, and you'll use its key-value pairs to describe how you want the animation to animate.

```html
<motion.h1 animate={{}}>Shopping List</motion.h1>
```
</TimeStamp>

<TimeStamp start="0:19" end="0:09">

We can add an animation that increases the scale of the heading by adding `"scale: 2"` to our `animate` prop. The number is relative to the size of the header. 2 will double in size, -2 shrinks double Its size, while 1 wouldn't change anything.

```html
<motion.h1 animate={{ scale: 2}}>Shopping List</motion.h1>
```
</TimeStamp>

<TimeStamp start="0:55" end="1:06">

You can also animate the position of the header using one of the `X Y or Z axis` and specifying the amount of pixels you wanna move

```html
<motion.h1 animate={{ scale: 2, y: -200}}>Shopping List</motion.h1>
```
</TimeStamp>

<TimeStamp start="1:14" end="1:46">

Framer defaults to interpreting whatever number you add to an axis animation as pixels. If you wanted to use a different measurement you have to add quotes like the example bellow

```html
<motion.h1 animate={{ scale: 2, y: "-10rem"}}>Shopping List</motion.h1>
```

</TimeStamp>