## :movie_camera: [Lesson 8](https://egghead.io/lessons/react-designate-control-of-dragging-for-a-react-beautiful-dnd-draggable-with-draghandleprops)

<TimeStamp start="0:00" end="0:30">

The `dragHandleProps` is what is allowing us to click anywhere on our Task component to drag our tasks throughout our list. If we wanted to, we could create a little box inside of our Task box to be the only place we could click and drag our task.

</TimeStamp>

<TimeStamp start="0:31" end="1:40">

We do this by creating a Handle component inside of our `Draggable` container. We move `{...provided.dragHandleProps}` from our `Container` to our newly created `Handle`. We also need to create our Handle and give it some styling. 

```js
const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`

export default class Task extends React.Component {
  render() {
    return (
    <Draggable draggableId={this.props.task.id} index={this.props.index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Handle 
            {...provided.dragHandleProps}
          />
          {this.props.task.content}
        </Container>
      )}
    </Draggable>
    );
  }
}
```
</TimeStamp>

<TimeStamp start="2:02" end="2:18">

While this may be nice, it's not going to stay in the application for this course. 

</TimeStamp>

