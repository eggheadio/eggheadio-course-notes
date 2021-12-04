# Test React Component Lifecycle Methods with Enzyme

**[📹 Video](https://egghead.io/lessons/react-test-react-component-lifecycle-methods-with-enzyme)**

## Testing Appropriate Usage and Purpose of Lifecycle Methods
We can use Enzyme to test that our Lifecycle Methods are being called appropriately, and that our conditionally rendered components are being rendered appropriately.

We begin by writing a new test in App.test.js:
```js
describe('<App /> shallow rendering', () => {
  // ...
  it('calls componentDidMount, updates p tag text', () => {
    jest.spyOn(App.prototype, 'componentDidMount')
    const wrapper = shallow(<App />)
    expect(App.prototype.componentDidMount.mock.calls.length).toBe(1)
    expect(wrapper.find('.lifeCycle').text()).toBe('componentDidMount')
  })
})
```
**"Jest's spyOn method gives this ability to mock out the componentDidMount method inside of our App component."**

Our Jest assertion then tests for the lifecycle method to have been called once.

When we run our tests:
```
npm test
```
We see that our newest test for the componentDidMount lifecycle method failed. This is because the componentDidMount method does not exist on our component.

To make this test pass, we add a componentDidMount method to our App component:
```js
class App extends Component {
  state = {
     on: false,
     input: '',
     mainColor: 'blue',
  }
  componentDidMount() {
    this.setState({lifeCycle: 'componentDidMount'})
  }
  // ...
}
  ```
We can return to our terminal to see that all of our tests pass.

To actually utilize our lifecycle method, we can add a 'lifeCycle' property to our state, update it with componentDidMount(), and render it under a p tag:
```js
class App extends Component {
  state = {
     on: false,
     input: '',
     mainColor: 'blue',
     lifeCycle: ''
  }
  componentDidMount() {
    this.setState({lifeCycle: 'componentDidMount'})
  }
  render() {
      return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React</h1>
          <h3 className={this.state.mainColor}>Everyone is Welcome!</h3>
          <ul className="tyler">
            <li>Test 1</li>
            <li>Test 2</li>
            <li>Test 3</li>
          </ul>
          <li>Test 3</li>
          // Begin new element:
          <p className='lifeCycle'>{this.state.lifeCycle}</p>
          // End new element
          <p className='button-state'>{this.state.on ? 'Yes!' : 'No!'}</p>
          // ...
    );
  }
}
```
With that in place, we can write a new assertion that expects our p tag to contain the text 'componentDidMount' after our componentDidMount lifecycle method is called:
```js
it('calls componentDidMount, updates p tag text', () => {
    jest.spyOn(App.prototype, 'componentDidMount')
    const wrapper = shallow(<App />)
    expect(App.prototype.componentDidMount.mock.calls.length).toBe(1)
    expect(wrapper.find('.lifeCycle').text()).toBe('componentDidMount')
  })
```
Returning to our terminal, we see that our only failing tests are the snapshot tests because we update our App component. Update the snapshots by pressing 'u' in the terminal, and we should see that all of our tests pass.

**"Now, in another test we've written, we've set props to test some come conditional content. We can take that once step further and test a corresponding lifecycle method."**

We'll write a new test that expects setProps to call the componentWillReceiveProps lifecycle method. In App.test.js:
```js
it('setProps calls componentWillReceiveProps', () => {
  jest.spyOn(App.prototype, 'componentWillReceiveProps')
  const wrapper = shallow(<App />)
  wrapper.setProps({ hide: true })
  expect(App.prototype.componentWillReceiveProps.mock.calls.length).toBe(1)
})
```
Again, we see that this test fails if we return to our terminal because this function does not yet exist on our component.

As we fixed the failing test with componentDidMount, we can add componentWillReceiveProps to our App component:
```js
class App extends Component {
  state = {
     on: false,
     input: '',
     mainColor: 'blue',
     lifeCycle: ''
  }
  componentDidMount() {
    this.setState({lifeCycle: 'componentDidMount'})
  }
  componentWillReceiveProps() {

  }
  render() {
      // ...
    );
  }
}
```
With our method in place, we can return to our terminal and see that our tests pass.

Taking this one step further, we can have our componentWillReceiveProps lifecycle method update the lifecycle property in our component's state to be 'componentWillReceiveProps'.
```js
componentWillReceiveProps() {
  this.setState({lifeCycle: 'componentWillReceiveProps'})
}
```
Then we can return to our App.test.js and create a new assertion that expects our p tag to contain the text 'componentWillReceiveProps' after the componentWillReceiveProps lifecycle method is called.
```js
it('setProps calls componentWillReceiveProps', () => {
  jest.spyOn(App.prototype, 'componentWillReceiveProps')
  const wrapper = shallow(<App />)
  wrapper.setProps({hide: true})
  expect(App.prototype.componentWillReceiveProps.mock.calls.length).toBe(1)
  expect(wrapper.find('.lifeCycle').text()).toBe('componentWillReceiveProps')
})
```
Returning to our terminal, we should see that all of our tests pass.
## Resources
- [Lesson 12 Code](https://github.com/ParkerGits/react-enzyme-jest/tree/11-test-react-component-lifecycle-methods-with-enzyme)
- [spyOn() - Jest](https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname)
- [Lifecycle Methods - React](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class)
