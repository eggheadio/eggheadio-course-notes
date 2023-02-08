# Clean Up Your Components with Variants

[Video Link](https://app.egghead.io/lessons/egghead-clean-up-your-components-with-variants?pl=animate-react-apps-with-framer-motion-aa83f52c)

<TimeStamp start="0:00" end="0:15">

To start go inside the `ShoppingList.js` file let's create a simple animation starting with the opacity at 0 and ending up at 1 with a tranition duration of 1.

```jsx
<div>
      <motion.h1
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >Shopping List
      </motion.h1>
    <ListForm onSubmit={addListItem} />
  <List items={items} removeItem={removeItem} />
</div>
```
</timeStamp>

<TimeStamp start="0:15" end="0:21">

We're also going to go into the `ListForm.js` file. Make sure to import Framer-motion at the top 

```jsx
import { motion } from "framer-motion";
```
</TimeStamp>

<TimeStamp start="0:22" end="0:35">

Now let's add the motion tag to `form` inside of `ListForms.js`

```html
<motion.form className="list-form" onSubmit={handleSubmit}>

</motion.form>
```

and let's add `animate`, `initial`, and `trasnition` with the same values as before. 

Your form tag should look simiar to this now.

```html
<motion.form className="list-form" 
    onSubmit={handleSubmit}
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    transition={{ duration: 1 }}
    >
      <input
        type="text"
        placeholder="Add an item"
        value={input}
        name="text"
        className="list-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="list-button">Add</button>
</motion.form>
```

</TimeStamp>

<TimeStamp start="0:35" end="0:46">

After refreshing the page not only should the h1 fade in but the intire ListForm as well!

Now lets head to `list.js` 

</TimeStamp>

<TimeStamp start="0:46" end="0:58">

We're going to animate when the list items are added. To do that, we will use a feature in Framer-motion called variant. 

</TimeStamp>

<TimeStamp start="0:58" end="1:07">

Varients will allow you to create complex animations, and any element can reference them in an animation.

</TimeStamp>

<TimeStamp start="1:07" end="1:13">

First make sure you import Framer-motion to the top of `List.js` as well. 

```jsx
import { motion } from "framer-motion";
```
</TimeStamp>

<TimeStamp start="1:13" end="1:25">

Now we're gonna add `motion.` to the start of both `li` tags. It'll look like this example bellow.

```html
<motion.li className="list-row" key={item.id}>
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

<TimeStamp start="1:25" end="1:37">

Next we create a new varient bellow the imports using `const`. You can call these variants whatever you want but to make it easy to reference it'll be named `itemVarients`

```jsx
const itemVariants = {

}
```
</TimeStamp>

<TimeStamp start="1:37" end="2:16">

Now we can add some propertys to say how you want It to animate. We call these varient labels. 

We'll add `hidden: {}`, and `visible: {}` as our first varient labels. Each with there own states of opacity

```jsx
const itemVarients = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
}
```

</TimeStamp>

<TimeStamp start="2:16" end="2:40">

Let's add a transition to this as well. A transition is different than a variant label. You make the transition label a part of whatever variant label you want It to animate. It is not another variant label.

Notice there's no closing bracket right after the opacity on visible.

```jsx
const itemVarients = {
  hidden: {opacity: 0},
  visible: {opacity: 1,
  transition: {duration: 1}}
}
```
</TimeStamp>

<TimeStamp start="2:41" end="3:00">

So to use varients go back to your `motion.li` element and add the varient to your `li` tag. Inside of your variant prop pass it the name of the variant you wanna use. 

```html
<motion.li
variants={itemVarients}
  className="list-row" key={item.id}>
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

<TimeStamp start="3:00" end="3:09">

Our element now knows what variant we wanna use.

</TimeStamp>

<TimeStamp start="3:10" end="3:21">

Now add an initial prop passing It with the string hidden. So initally it'll be hidden. 

```jsx
variants={itemVarients}
initial="hidden"
```
</TimeStamp>

<TimeStamp start="3:21" end="3:28">

Add animate as well but passing `visible` as a string instead. Now for the last state it will be visible.

```jsx
variants={itemVarients}
initial="hidden"
animate="visible"
```
</TimeStamp>

<TimeStamp start="3:30" end="3:44">

It's really nice to be able make your code more declartive by being able to asign your own names to the variant labels such as `hidden` and `visible`

</TimeStamp>

<TimeStamp start="3:45" end="4:02">

You can test out what we made by refreheshing the page and adding something to the list now. The items will have a nice fade when added instead of just popping into place.

</TimeStamp>