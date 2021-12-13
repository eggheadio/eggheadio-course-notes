# Customize Animations with the Transitions Prop

[Video Link](https://app.egghead.io/lessons/egghead-customize-animations-with-the-transition-prop?pl=animate-react-apps-with-framer-motion-aa83f52c)

<TimeStamp start="0:00" end="0:15">

As you can see so far, only Framer decides how the animation looks. You have to choose where you want It to start and end up.

</TimeStamp>

<TimeStamp start="0:16" end="0:23">

If you want to customize the animation, you'll need to add the transition prop. `transition={{}}`

```jsx
<div>
  <motion.h1 
    initial={{ opacity: 0, y: -100}}
    animate={{ opacity: 1, y: 0 }}
    transition={{}}
        >Shopping List</motion.h1>
      <ListForm onSubmit={addListItem} />
   <List items={items} removeItem={removeItem} />
</div>
```
</TimeStamp>

<TimeStamp start="0:35" end="0:42">

What happens between initial and animate is what transition mainly deals with.

</TimeStamp>

<TimeStamp start="0:43" end="0:50">

The first thing we will change is the `duration` of the animation. This is the length of time between initial and animate

```jsx
transition={{ duration: 0.5}}
```

</TimeStamp>

<TimeStamp start="1:00" end="1:25">

Next, we'll add `ease`. This affects the flow of the animation. You can have It start slow, then fast, vice versa, and many other options.

We will add a default flow by using a string with `linear` as the input. This will keep the flow consistent the entire time.

```jsx
transition={{ duration: 0.5, ease: "linear"}}
```

</TimeStamp>

<TimeStamp start="1:33" end="2:05">

Let's add a `type` to the `transition prop`. Similar to `ease` we can input a preset using a string. Let's add `tween`. 

Some other options are `spring`, and `inertia`.

```jsx
transition={{ duration: 0.5, ease: "linear", type: "tween"}}
```

</TimeStamp>

<TimeStamp start="2:14" end="2:23">

The main takeaway is if you want to go beyond the default animations, you can use the `transition prop`.

</TimeStamp>