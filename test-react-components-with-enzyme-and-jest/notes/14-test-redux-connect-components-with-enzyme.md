# Test Redux Connect Components with Enzyme

**[📹 Video](https://egghead.io/lessons/react-test-redux-connect-components-with-enzyme)**

## Following Along
In order to follow along with this lesson, we need to add a couple things to our project.

In our src folder, we need to add
- TodoList.css
- TodoList.js
- TodoList.test.js
- store.js

Within these files:

**Todolist.css**
```css
* {
    box-sizing: border-box;
}
input {
    font-size: 14px;    
    border-radius: 2em;
    width: 100%;
    background: none;
    font-family: "Source Sans Pro", sans-serif;
    border: #4fc08d 1px solid;
    -webkit-transition: border 250ms ease-out;
    transition: border 250ms ease-out;
}
.todo--button {
    font-size: 14px;
    width: 100%;
    border-radius: 2em;
    padding: 0.75em 1.5em;
    cursor: pointer;
    background: #4fc08d;
    color: #fff;
    border: 1px solid;
    letter-spacing: 1px;
    font-family: "Source Sans Pro", sans-serif;
    border: #4fc08d 1px solid;
    -webkit-transition: 250ms ease-out;
    transition: 250ms ease-out;
}
.todo--button:hover {
    opacity: 0.7;
}
li {
    font-size: 20px;
    color: #4fc08d;
    list-style: none;
    transition: .4s;
}
ul {
    text-align: left;
}
.todos--container {
    max-width: 500px;
    text-align: center;
    margin: auto;
    border: #4fc08d 1px solid;
    padding: 20px 10px;
    border-radius: 7px;
}
.todos--h1 {
    color: #4fc08d;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 3px;
}
```

**TodoList.js**
```js
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from './store'

import './TodoList.css'

export class TodoList extends Component {
  state = { input: '' }

  handleClick = i => () => {
    this.props.removeTodo(i)
  }

  handleChange = e => {
    this.setState({ input: e.currentTarget.value })
  }

  handleSubmit = () => {
    this.props.addTodo({text: this.state.input})
    this.setState({input: ''})
  }

  render() {
    return (
      <div className='todos--container'>
        <h1 className='todos--h1'>Todos</h1>
        <input type="text" onChange={this.handleChange} value={this.state.input} />
        <ul>
          {this.props.todos.map(({ text }, i) => (
            <li onClick={this.handleClick(i)} key={i}>
              {text}
            </li>
          ))}
        </ul>
        <button className='todo--button' onClick={this.handleSubmit}>Add Todo</button>
      </div>
    )
  }
}

const mapStateToProps = ({ currentList: {todos} }) => ({ todos })

const bindActionsToDispatch = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  removeTodo: id => dispatch(removeTodo(id))
})

const TodoListContainer = connect(mapStateToProps, bindActionsToDispatch)(
  TodoList
)

export default TodoListContainer
```

**TodoList.test.js**
```js
import React from 'react'
import { TodoList } from './TodoList'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

```

**store.js**
```js
import { createStore } from 'redux'
import { combineReducers } from 'redux'

export const addTodo = todo => ({
  type: 'ADD_TODO',
  todo
})

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
})

const initialState = {
  todos: []
}

const handleNewTodo = (state, action) => ({
  todos: [...state.todos, action.todo]
})

const handleRemoveTodo = (state, action) => ({
  todos: [
    ...state.todos.slice(0, action.id),
    ...state.todos.slice(action.id + 1)
  ]
})

const currentList = (state = initialState, action) => {
  const handlers = {
    REMOVE_TODO: handleRemoveTodo,
    ADD_TODO: handleNewTodo
  }
  return handlers[action.type] ? handlers[action.type](state, action) : state
}

const rootReducer = combineReducers({
  currentList
})

export const store = createStore(rootReducer)
```

In our terminal, we need to install Redux and React-Redux:
```
npm install redux react-redux
```

At this point, running our tests:
```
npm test
```
Should allow us to see that all of our tests pass.

In order to actually render our component, we need to update our **index.js**:
```js
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'
import App from './App'
import TodoListContainer from './TodoList'
ReactDOM.render(
  <Provider store={store}>
    <TodoListContainer />
  </Provider>,
  document.getElementById('root')
)
```

To view our project, we can run in the terminal:
```
npm start
```
And navigate to the provided link in our browser (in my case, localhost:3000). The CSS was a bit messed up for me, but this won't affect our testing.

## Testing Redux Connect Components
In our browser, we can see a functioning Todo List. You can try it by entering a task, pressing "Add Todo", seeing the added task, then clicking on the added task to delete it.

We can view our TodoList component within TodoList.js
- The component state keeps track of our current input
- The handleClick method attaches to our task li elements and fires removeTodo Action Creator on click.
- The handleChange method lives on the input to update our input state on change.
- The handleSubmit method lives on the addTodo button and calls addTodo Action Creator, sending off the current input state and clearing the input.

All the Redux concepts can be found in src/store.js

In index.js, we pass in our store through the Provider.

In TodoList.test.js, we can begin writing our tests.

**"When it comes to testing Redux components, as you can imagine, the biggest headache comes from trying to replicate a Redux store by mocking out its functionality."**

Because we really just want to test our component methods and render, we can import our component directly in Todolist.test.js:
```js
import { TodoList } from './TodoList'
```
Here, we bring in our component and exclude the higher order connected component.

We need to test that
- Our addTodo is called when the button is clicked.
- Our removeTodo is called when an li is clicked
- Our component matches a snapshot

In Todolist.test.js:
```js
describe('<TodoList />', () => {
  it('calls addTodo Redux action creator with button click', () => {
    const props = {
      addTodo: jest.fn(),
      todos: []
    }
    const wrapper = shallow(<TodoList {...props} />)
    wrapper.find('input').simulate('change', {currentTarget: {value: 'Buy Groceries'}})
    wrapper.find('.todo--button').simulate('click')

    expect(props.addTodo).toHaveBeenCalledWith({text: 'Buy Groceries'})
  })
})
```
The props that we pass through our TodoList component replicate our Redux store data.

By simulating a change in our input field and then simulating a click of our addTodo button, we can assert that our addTodo Action Creator is called with the correct parameter.

We can navigate to our terminal and run these tests:
```
npm test
```
And we should see that our tests pass. We can edit the test by, for example, changing the toHaveBeenCalledWith() parameter, and we should see that the test then fails.

Now let's test that our removeTodo Action Creator is called correctly on li click. In Todolist.test.js:
```js
describe('<TodoList />', () => {
  // ...
  it('calls removeTodo Redux action creator on li click', () => {
  const props = {
    removeTodo: jest.fn(),
    todos: [{text: 'Buy groceries'}, {text: 'Change oil'}]
  }
  const wrapper = shallow(<TodoList {...props} />)
  wrapper.find('li').at(0).simulate('click')

  expect(props.removeTodo).toHaveBeenCalledWith(0)
  })
})
```
We again create our props object to replicate the store data and pass it through the TodoList component. In this case, we've given our TodoList two Todos (try saying that five times fast): 'Buy groceries' and 'Change oil'.

We then find the first li in the list with .at(0) and simulate a click on it, and we assert that our removeTodo action is called with the correct index of 0.

Again, we can navigate to our terminal and see that our tests pass. And again, we can edit the test, for example, by editing the toHaveBeenCalledWith() parameter, and we should see that the test tthen fails.

Lastly, we can create a snapshot of the component. In Todolist.test.js:
```js
it('matches snapshot', () => {
  const props = {
    todos: []
  }
  const wrapper = shallow(<TodoList {...props} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
```
Within src/\_\_snapshots\_\_, we should see our Todolist.test.js.snap snapshot.

## Resources
- [Lesson 14 Code](https://github.com/ParkerGits/react-enzyme-jest/tree/13-test-redux-connect-components-with-enzyme)
- [React Redux](https://react-redux.js.org/)
- [Testing a React-Redux app using Jest and Enzyme](https://medium.com/netscape/testing-a-react-redux-app-using-jest-and-enzyme-b349324803a9)
