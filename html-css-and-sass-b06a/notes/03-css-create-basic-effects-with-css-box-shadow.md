[Video Link](https://egghead.io/lessons/css-create-basic-effects-with-css-box-shadow)

<TimeStamp start="0:01" end="0:18">

In this lesson we are going to work with `box-shadow` to stylize a card. This is the syntax of `box-shadow: offset-x | offset-y | blur-radius | spread-radius | color`
 
```css
.card{
    box-shadow: 5px 8px 10px black;
}
```

</TimeStamp>

<TimeStamp start="1:03" end="1:09">

`inset` reposition our shadow to be off-set whiting the element 


</TimeStamp>
<TimeStamp start="1:10" end="1:20">

Another way to make the shadow appears in the other side of the box is by using negative values. For example:

```css
.card{
    box-shadow: -5px -5px 10px black;
}
```

</TimeStamp>

<TimeStamp start="1:33" end="1:42">

Negative values can also be applied to the *spread-radius*  this creates a more natural shadow appearance by tacking the shadow under card.

</TimeStamp>

<TimeStamp start="2:00" end="2:15">

To create a shadow that equally surround the box, we'll need to implement the following code: 

```css
.card{
    box-shadow: 0 0 20px black;
}
```

</TimeStamp>

<TimeStamp start="2:40" end="2:55">

To implement multiple shadows we need the following: 

```css
.card{
    box-shadow: 0 0 0 3px #79009e,
    box-shadow: 0 10px 20px #79009e;
}
```
</TimeStamp>
