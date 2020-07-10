# Manually Control the Animation with progress in Greensock

📹 [Vidoe](https://egghead.io/lessons/greensock-manually-control-the-animation-with-progress-in-greensock)

### Manually Control animation
- Use a wheel event listener and the 🤔[progress property](https://greensock.com/docs/v2/TimelineMax/progress()) on the timeline.
```js
document.addEventListener('wheel', () => {
    timeline.progress(timeline.progress() + 0.1)
})
```
- This only advances the animation a tenth of a second ( + 0.1 ).

### Animate forward and backwards with wheel event
- Use the event object and the .wheelDelta property to determine if you are scrolling up or down.
- A conditional then allows you to either add to the progress or subtract from it.
```js
if(event.wheelDelta > 0){
    timeline.progress(timeline.progress() + 0.1)
} else {
    timeline.progress(timeline.progress() - 0.1)
}
```
- Check it out . . . Pretty cool, but a little choppy right?
    
### Animate smoothly with TweenMax.to
- .progress is a property on any Timeline(), we know we can animate to a property value with a TweenMax.to
```js
TweenMax.to("selectedElement", duration {properties})
```
- Combine the above timeline.progess with TweenMax.to().
```js
document.addEventListener('wheel', event => {
    if(event.wheelDelta > 0){
        TweenMax.to(timeline, .25, {progress: "+=0.1"})
    } else {
        TweenMax.to(timeline, .25, {progress: "-=0.1"})
    }
    
})
```
- Notice that the "selectedElement" is timeline, not "#box". That is because the progress is a property on the timeline, not on the box div.

📹 [Go to Previous Lesson](https://egghead.io/lessons/greensock-pause-or-resume-an-animation-by-checking-isactive-with-greensock)
📹 [Go to Next Lesson](https://egghead.io/lessons/greensock-animate-from-a-variable-point-with-from-and-fromto-in-greensock)
