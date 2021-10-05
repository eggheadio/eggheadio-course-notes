[Video Link](https://egghead.io/lessons/css-create-a-basic-responsive-grid-system-with-css-grid)

<TimeStamp start="0:10" end="0:18">

In our `html` file we have the following code:

```html
<body> 
    <main>
      <div class="grid">
        <span>Grid Item</span>
      </div>
    </main>
</body>
```

</TimeStamp>

<TimeStamp start="0:46" end="0:50">

The intend of this video is create a responsive multi column grid

</TimeStamp>

<TimeStamp start="1:00" end="1:20">

We can accomplish a responsive layout with just one line of css code

```css
$minWidth: 15rem;

.grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax($minWidth, 1fr)); // responsive
}

@import "grid-item";
```

</TimeStamp>

<TimeStamp start="1:30" end="1:42">

`fr` is a unique key word in grid which means to use a computed fraction of available space. If you want to know more about this unit of length you can check their [documentation](https://mozilladevelopers.github.io/playground/css-grid/04-fr-unit/)

</TimeStamp>


<TimeStamp start="3:10" end="3:15 ">

`+` adjacent sibling selector [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator)

</TimeStamp>

