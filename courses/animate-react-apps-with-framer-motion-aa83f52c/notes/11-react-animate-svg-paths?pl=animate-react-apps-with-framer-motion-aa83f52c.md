# Animate SVG Paths

[Video Link](https://app.egghead.io/lessons/react-animate-svg-paths?pl=animate-react-apps-with-framer-motion-aa83f52c)

<TimeStamp start="0:00" end="0:07">

In this lesson we will animate the bag svg at the top left of the page. 

</TimeStamp>

<TimeStamp start="0:07" end="0:14">

Inside of `bag.js` import Framer-motion

```jsx
import { motion } from "framer-motion";

```
</TimeStamp>

<TimeStamp start="0:14" end="0:24">

Now copy and past in this varient:

```jsx
const svgVariants = {
  start: {
    opacity: 0,
    pathLength: 0
  },
  finished: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
};
```
</TimeStamp>

<TimeStamp start="0:24" end="0:42">

the variant is called `svgVariant` the variant label of `start` has an opacity of 0, making it invisible and a pathLength of 0, so It starts at the beginning of Its path 

```jsx
start: {
opacity: 0,
pathLength: 0
},
```

</TimeStamp>

<TimeStamp start="0:42" end="1:11">

Once It's finished/uses the variant label finished, we have an opacity of 1 to be completely visible and a pathLength of 1, so It finishes its entire path. We also have a transition with a duration of 2 seconds and a ease using "easeInOut" so It comes in slow and ends fast. 

</TimeStamp>

<TimeStamp start="1:13" end="1:23">

Now we want to actually go to where our svg is being rendered and change path to `motion.path`

```html
<motion.path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1"
    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
/>
```
</TimeStamp>

<TimeStamp start="1:24" end="1:43">

Next add a variants prop and set it to `svgVariant` which is the one we just created 

```html
<motion.path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1"
    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    variants={svgVariants}
/>
```
</TimeStamp>

<TimeStamp start="1:43" end="2:04">

Then add the initial prop using the variant label of start and animate prop using the variant label of finished 

```html
<motion.path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1"
    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    variants={svgVariants}
    initial="start"
    animate="finished"
/>
```
</TimeStamp>

<TimeStamp start="2:04" end="2:22">

Now your svg will draw itself in on refresh!

</TimeStamp>
















