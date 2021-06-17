## :movie_camera: [Lesson 7](https://egghead.io/lessons/react-customise-the-appearance-of-an-app-using-react-beautiful-dnd-ondragstart-and-ondragend)

<TimeStamp start="0:08" end="0:19">

As mention before there are three callbacks, so far we have worked only on `onDragEnd`

</TimeStamp>

<TimeStamp start="0:23" end="0:30">

We can also use `onDragUpdate` and `onDragStart`if we want to add more visual styling to our application. 

</TimeStamp>

<TimeStamp start="1:18" end="1:50">

We can do things like change the text color when we start to drag something and have it change back to normal once the drag has ended. 

```js
onDragStart = () => {
  document.body.style.color = 'orange';
}

onDragEnd = result => {
  document.body.style.color = 'inherit';
  ...
}
```

</TimeStamp>

<TimeStamp start="1:55" end="2:25">

We can do the same thing when something gets updated. We can make it so that the background color changes with each update to the tasks list.

```js
onDragUpdate = update => {
  const { destination } = update;
  const opacity = destination 
    ? destination.index /Object.keys(this.state.tasks).length
    : 0;
  document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`
}
```
</TimeStamp>

<TimeStamp start="2:27" end="2:50">

We can add in transitions to the color change on update and have it revert back normal once the drag has ended.

```js
onDragStart = () => {
  document.body.style.color = 'orange';
  document.body.style.transition = 'background-color 0.2s ease';
}

onDragUpdate = update => {
  const { destination } = update;
  const opacity = destination 
    ? destination.index /Object.keys(this.state.tasks).length
    : 0;
  document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`
}

onDragEnd = result => {
  document.body.style.color = 'inherit';
  document.body.style.backgroundColor = 'inherit';

  ...
}
```
