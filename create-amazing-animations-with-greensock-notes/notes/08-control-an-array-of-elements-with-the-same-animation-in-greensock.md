# Control and Array of Elements with the Same Animations in Greensock

📹 [Video](https://egghead.io/lessons/greensock-control-an-array-of-elements-with-the-same-animation-in-greensock)

### Create 100 boxes and place them randomly
1. Use the 🤔[Array.from() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) to create an array with 100 div elements.
```js
const divs = Array.from({length: 100}, () => 
    document.createElement("div")
)
```
2. Loop through the array with a 🤔[.forEach() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) and set the properties with [TweenMax.set()](https://greensock.com/docs/v2/TweenMax/static.set()).
```js
divs.forEach(div => {
    TweenMax.set(div, {
        position: "absolute",
        x: `${Math.random() * window.innerWidth}px`,
        y: `${Math.random() * window.innerHeight}px`,
        width: 20,
        height: 20,
        backgroundColor: "green",
        border: "3px solid black"
    })
})
```
3. Mount each div in the .forEach() to the document's body.
```js
document.body.appendChild(div)
```

All together
```js
const divs = Array.from({length: 100}, () => 
    document.createElement('div')
)

divs.forEach(div => {
    TweenMax.set(div, {
        position: "absolute",
        x: `${Math.random() * window.innerWidth}px`,
        y: `${Math.random() * window.innerHeight}px`,
        width: 20,
        height: 20,
        backgroundColor: "green",
        border: "3px solid black"
    })
    
    document.body.appendChild(div)
})
```

- Check it out . . . If you refresh the page the boxes will be randomly placed again due to the 🤔[Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) used to set the x and y properties.

### Collect the divs together with a click
1. Add and event listener for a click event, you will need the event param.
    ```js
    document.addEventListener("click", event => {})
    ```
2. Use the x and y properties from the click.
    ```js
    const { x, y } = event
    ```
3. Use 🤔[TweenMax.to()](https://greensock.com/docs/v2/TweenMax/static.to()) to animate them to the location of your click.
    ```js
    TweenMax.to(divs, 1, { x, y })
    ```
    - Notice the selected Element is the entire array (divs).

All together
```js
document.addEventListener("click", event => {
    const { x, y } = event

    TweenMax.to(divs, 1, { x, y })
})
```

📹 [Go to Previous Lesson](https://egghead.io/lessons/greensock-animate-from-a-variable-point-with-from-and-fromto-in-greensock)
📹 [Go to Next Lesson](https://egghead.io/lessons/greensock-stop-animations-with-killtweensof-and-killall-in-greensock)
