# Test Simulated Event Handlers with Enzyme

**[📹 Video](https://egghead.io/lessons/react-test-simulated-event-handlers-with-enzyme)**

## Testing Event Handlers
With Enzyme we can both test components that use event handlers by simulating those events, and test that conditionally rendered attributes work as intended.

In App.test.js, we define a new test:
```js
describe('<App /> shallow rendering', () => {
  it('should contain an element with logo as alt tag', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find({alt: 'logo'}).exists()).toBe(true)
  })
  it('matches the snapshot', () => {
    const tree = shallow(<App />)
    expect(toJson(tree)).toMatchSnapshot()
  })
  // New Test:
  it('on button click changes p text', () => {
    const wrapper = shallow(<App />)
    const button = wrapper.find('button')
    expect(wrapper.find('.button-state').text()).toBe('No!')
  })
})
```
If we check our terminal now:
```
npm test
```
We should see that our newly defined test fails because the elements we're searching for do not yet exist.

In App.js, we introduce the new p tag with class 'button-state' and the button with the onClick. **Important: These notes have used App as a functional component until now. We must change App to a class component, as we are now using setState(). More information on class vs functional components in the [resources](#resources)**
```js
class App extends Component {
  state = { on: false }
  render() {
      return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React</h1>
          <ul className="tyler">
            <li>Test 1</li>
            <li>Test 2</li>
            <li>Test 3</li>
          </ul>
          <li>Test 3</li>
          // Begin new elements
          <p className='button-state'>{this.state.on ? 'Yes!' : 'No!'}</p>
          <button onClick = {() => this.setState({on: true})}>Click</button>
          // End new elements
          <p className="App-intro">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Title text="Some title" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>Hello World</p>
        </header>
        <Test />
      </div>
    );
  }
}
```
Returning to our terminal, we should see that the only tests that fail are our snapshots tests. Pressing 'u' to update our snapshots should allow all of our tests to pass.

Now, back in App.test.js, we'll simulate a click event and expect our .button-state to change from 'No!' to 'Yes!':
```js
it('on button click changes p text', () => {
  const wrapper = shallow(<App />)
  const button = wrapper.find('button')
  expect(wrapper.find('.button-state').text()).toBe('No!')
  button.simulate('click')
  expect(wrapper.find('.button-state').text()).toBe('Yes!')
})
```
Now let's see how this could be used in the case of an input element that, whenever a user inputs text, updates state.

We define a new test in App.test.js:
```js
describe('<App /> shallow rendering', () => {
  it('should contain an element with logo as alt tag', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find({alt: 'logo'}).exists()).toBe(true)
  })
  it('matches the snapshot', () => {
    const tree = shallow(<App />)
    expect(toJson(tree)).toMatchSnapshot()
  })
  it('on button click changes p text', () => {
    const wrapper = shallow(<App />)
    const button = wrapper.find('button')
    expect(wrapper.find('.button-state').text()).toBe('No!')
    button.simulate('click')
    expect(wrapper.find('.button-state').text()).toBe('Yes!')
  })
  it('on input change, title changes text', () => {
    const wrapper = shallow(<App />)
    const input = wrapper.find('input')
    expect(wrapper.find('h2').text()).toBe('')
    input.simulate('change')
    expect(wrapper.find('h2').text()).toBe('Tyler')
  })
})
```
Now, inside our App.js, we add our h2 and input elements, and add our input state:
```js
// Add input state
class App extends Component {
  state = {
     on: false,
     input: ''
  }
  render() {
      return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React</h1>
          <ul className="tyler">
            <li>Test 1</li>
            <li>Test 2</li>
            <li>Test 3</li>
          </ul>
          <li>Test 3</li>
          <p className='button-state'>{this.state.on ? 'Yes!' : 'No!'}</p>
          <button onClick = {() => this.setState({on: true})}>Click</button>
          // Begin new elements
          <h2>{this.state.input}</h2>
          <input onChange={(e) => this.setState({input: e.currentTarget.value})} type='text'/>
          // End new elements
          <p className="App-intro">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Title text="Some title" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>Hello World</p>
        </header>
        <Test />
      </div>
    );
  }
}
```
After running our tests and updating our snapshots, we should see that our on input change test is failing.

**"This is because our simulated event is looking for this currentTarget property from the event. Our test does not have that being passed through to the method."**

We can fix this by passing an optional object argument to the simulate() method. In App.test.js:
```js
it('on input change, title changes text', () => {
  const wrapper = shallow(<App />)
  const input = wrapper.find('input')
  expect(wrapper.find('h2').text()).toBe('')
  input.simulate('change', {currentTarget: {value: 'Tyler'}})
  expect(wrapper.find('h2').text()).toBe('Tyler')
})
```

We should now see our test passes properly in the terminal.

**"We can see that our on input change test is now passing because it's looking at our mocked-out event object grabbing Tyler from the value and updating our h2"**
## Resources
- [Lesson 10 Code](https://github.com/ParkerGits/react-enzyme-jest/tree/09-test-simulated-event-handlers-with-enzyme)
- [Class vs Functional Components in React](https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108)
- [simulate() - Enzyme](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/simulate.html)
