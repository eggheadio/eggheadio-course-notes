# Animate Between CSS Classes with GreenSock

📹 [Video](https://egghead.io/lessons/greensock-animate-between-css-classes-with-greensock)

### Animate class changes
1. Create a div with a class of box.
2. Establish styles for the .box class.
3. Add two new classes .hover and .down and styles for both.
4. Add an eventListener on the box and use 🤔[TweenMax.to()](https://greensock.com/docs/v2/TweenMax/static.to()) to adjust the className of the box.
    - Make sure to add the additional classes. If you replace the class you won't be adding styles to the box, but replacing them.
    ```js
    TweenMax.to(box, .25, { className: '+=hover' })
    ```
5. Make sure to use opposite addEventListeners to remove the classNames.
    - "mouseenter" adds, "mouseout" removes
    - "mousedown" adds, "mouseup" removes

📹 [Go to Previous Lesson](https://egghead.io/lessons/greensock-stop-animations-with-killtweensof-and-killall-in-greensock)
📹 [Go to Next Lesson](https://egghead.io/lessons/greensock-spin-elements-in-3d-with-greensock)
