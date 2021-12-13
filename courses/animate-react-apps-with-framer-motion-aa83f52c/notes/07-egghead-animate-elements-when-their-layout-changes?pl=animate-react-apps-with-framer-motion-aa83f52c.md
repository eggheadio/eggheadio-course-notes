# Animate Elements When Their Layout changes

[Video Link](https://app.egghead.io/lessons/egghead-animate-elements-when-their-layout-changes?pl=animate-react-apps-with-framer-motion-aa83f52c)

<TimeStamp start="0:00" end="0:23">

Our items might fade in smoothly, but when we add another item or remove an item, it jerks the last item down/up. In this lesson, we will learn how to make this a smooth animation

</TimeStamp>

<TimeStamp start="0:23" end="0:33">

Luckly for us in the latest version of Framer-motion this is pretty easy!

</TimeStamp>

<TimeStamp start="0:33" end="0:51">

In our `motion.li` add a prop called `layoutId` and let's have it set to `item.id` We do this because we want Framer-motion to keep track of the layout of the Id of each item.

```html
<motion.li
    key={item.id}
    variants={itemVarients}
    initial="hidden"
    animate="visible"
    className="list-row"
    exit="hidden"
    layoutId={item.id}
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
</TimeStamp>

<TimeStamp start="0:51" end="1:09">

Now when one of the items we're tracking layout changes, Framer-motion automatically animates it in place because now all these items are considered to share the same layout. 

</TimeStamp>

<TimeStamp start="1:09" end="1:33">

On refresh your items should fade up and down whenever added on top of another or removed.

</TimeStamp>



