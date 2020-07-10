# Animate and Center an Element to a Click Event with Greensock

📹 [Video](https://egghead.io/lessons/greensock-animate-and-center-an-element-to-a-click-event-with-greensock)

1. Create a box with basic styles in index.html.
    - div with id="box"
    ```html
    <div id="box"></div>
    ```
    - Create css file and link it in the head of your html.
    ```html
    <link rel="stylesheet" href="./styles.css">
    ```
    - Add basic styles.
    ```css
    #box {
        width: 25px;
        height: 25px;
        background-color: deepskyblue
    }
    ```

2. Now start your server.
```
yarn dev
```

3. Switch to your index.js file to add an event.
    - Add event listener.
    ```js
    document.addEventListener("click", event => {}) 
    ```
    - Add TweenMax inside event listener.
    ```js
    document.addEventListener("click", event => {
        TweenMax.to("#box", 1, { x: 100, y: 100})
    })
    ```
    - TweenMax syntax is
    ```js
    TweenMax.to("selectedElement", duration(in seconds), {properties})
    ```
    - TweenMax will move the "selectedElement" to the {properties} in the time set by duration.
    - So the code from above will move our div with id box `"#box"` to `x = 100px` and `y = 100px` in `1` second.



### If you want to move the box to the location of your click a few additional steps are necessary.

1. Grab the location of your click.
    - This can be done by accessing the clientX and clientY properties from the click event.
    ```js
    document.addEventListener("click", event => {
        const {clientX, clientY} = event
    })
    ```
2. Use the locations inside your TweenMax.
    ```js
    document.addEventListener("click", event => {
        const {clientX, clientY} = event

        TweenMax.to("#box", 1, { x: clientX, y: clientY})
    })
    ```
    - Check it out . . . not quite right just yet is it? 
3. Eliminate body margin.
    - Inside your CSS file,
    ```css
    body {
        margin: 0;
    }
    ```
    - Check it out . . . now the corner lines up with the pointer click, but to make it center on the pointer keep going.
4. Align the center of the box to the x and y coordinates.
    - Use TweenMax.set, syntax looks like this
    ```js
    TweenMax.set("selectedElement", {properties})
    ```
    - This will set the {properties} of the "selectedElement" from the get go and keep them throughout animation.
    ```
    TweenMax.to("#box", {xPercent: -50, yPercent: -50})
    ```
    - Check it out . . . nice Right!?

📹 [Go to Previous Lesson](https://egghead.io/lessons/greensock-setup-greensock-as-a-module-with-parcel) 
📹 [Go to Next Lesson](https://egghead.io/lessons/greensock-rotate-an-element-based-on-previous-values-with-greensock)
