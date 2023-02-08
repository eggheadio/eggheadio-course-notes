# Animate Elements Removed fro, the DOM with Animate Presence

[Video Link](https://app.egghead.io/lessons/egghead-animate-elements-removed-from-the-dom-with-animate-presence?pl=animate-react-apps-with-framer-motion-aa83f52c)

<TimeStamp start="0:00" end="0:27">

Our list items only animate when added but not when taken away. We want a better, more consistent experience when adding and removing it from the list. To do this inside of Framer-motion, we will use the animate presence component

</timeStamp>

<TimeStamp start="0:27" end="0:35">

To do so add `AnimatePresence` to your Framer-motion imports.

```jsx
import { motion, AnimatePresence } from "framer-motion";
```
</timeStamp>

<TimeStamp start="0:35" end="1:00">

After you've imported `AnimatePresence`, we will start using it by wrapping It around the items we want to animate

```html
<AnimatePresence>
    {items.map((item, index) => (
    <motion.li
        key={item.id}
        variants={itemVarients}
        initial="hidden"
        animate="visible"
        className="list-row"
    >
        <div>{item.text}</div>
        <div className="icons">
        <RiCloseCircleLine
            onClick={() => removeItem(item.id)}
            className="delete-icon"
        />
        </div>
    </motion.li>
    ))}
</AnimatePresence>
```
</timeStamp>

<TimeStamp start="1:00" end="1:10">

Also, when you use `AnimatePresence` you want to make sure you have a key prop on what you're animating.

```jsx
key={item.id}
```
</timeStamp>

<TimeStamp start="1:10" end="1:27">

after wrapping our item with AnimatePresence we now have the ability to use a prop called `exit`

`exit` is what allows the element to be removed from the dom and let's us animate it.

</timeStamp>

<TimeStamp start="1:28" end="1:35">

Let's add the exit prop to our `motion.li` and we're gonna gonna set It to `hidden` which is our variant label.

```html
<motion.li
    key={item.id}
    variants={itemVarients}
    initial="hidden"
    animate="visible"
    className="list-row"
    exit="hidden" 
>
    <div>{item.text}</div>
    <div className="icons">
    <RiCloseCircleLine
        onClick={() => removeItem(item.id)}
        className="delete-icon"
    />
    </div>
</motion.li>
```
</timeStamp>

<TimeStamp start="1:35" end="1:52">

Now when the item is removed from the dom It will go back to the hidden state which would be invisible. So if you remove an item It will fade out.

</timeStamp>