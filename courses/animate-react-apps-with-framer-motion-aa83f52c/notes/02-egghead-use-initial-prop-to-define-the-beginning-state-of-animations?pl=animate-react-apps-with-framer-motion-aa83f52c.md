# Use Initial Prop To Define The Beginning State Of Animations

[Video Link](https://app.egghead.io/lessons/egghead-customize-animations-with-the-transition-prop?pl=animate-react-apps-with-framer-motion-aa83f52c)

<TimeStamp start="0:00" end="0:38">

We can use an initial prop before the animate prop to decide how to begin the animation.

Let's start by setting the animate props Y coordinate to 0 and the initial props y coordinate to -200. This is so the header moves from -200 pixels back to 0.

```html
<motion.h1 initial={{ y: -200}}animate={{ y: 0}}>Shopping List</motion.h1>
```
</TimeStamp>

<TimeStamp start="0:55 " end="1:10">

Now we can add a nice fade using opacity. You'll add `opacity: 0` inside the initial prop. We set It to 0, so It'll be invisible at the start.

```html
<motion.h1 initial={{ opacity: 0, y: -200}}animate={{ y: 0}}>Shopping List</motion.h1>
```
</TimeStamp>

<TimeStamp start="1:11 " end="1:30">

Now let's do the same with the animate prop, but this time set to 1, so It's fully visible.

```html
<motion.h1 initial={{ opacity: 0, y: -200}}animate={{ opacity: 1, y: 0}}>Shopping List</motion.h1>
```
After a refresh the header will fade into place now.

</TimeStamp>

<TimeStamp start="1:31 " end="1:39">

The takeaway from this lesson is that the initial prop is how you want to start it, and the animate prop is how you want It to end.

</TimeStamp>