# Test New Component State with setState in Enzyme

**[📹 Video](https://egghead.io/lessons/react-test-new-component-state-with-setstate-in-enzyme)**

## Simulating Component State in Enzyme
With Enzyme, we can simulate and test different component contexts. We can use the setState() method to change the state of our component, and then we can test that it renders correctly under the new state.

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
  // Begin new test
  it('updates className with new State', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.blue').length).toBe(1)
    expect(wrapper.find('.red').length).toBe(0)
    wrapper.setState({mainColor: 'red'})
    expect(wrapper.find('.blue').length).toBe(0)
    expect(wrapper.find('.red').length).toBe(1)
  })
  // End new test
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
    input.simulate('change', {currentTarget: {value: 'Tyler'}})
    expect(wrapper.find('h2').text()).toBe('Tyler')
  })
})
```
Now we navigate to our App.js component and define both our mainColor state and an h3 element with className as the mainColor state:
```js
class App extends Component {
  // Add new mainColor state
  state = {
     on: false,
     input: '',
     mainColor: 'blue'
  }
  render() {
      return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React</h1>
          // Begin new element
          <h3 className={this.state.mainColor}>Everyone is Welcome!</h3>
          // End new element
          <ul className="tyler">
            <li>Test 1</li>
            <li>Test 2</li>
            <li>Test 3</li>
          </ul>
          <li>Test 3</li>
          <p className='button-state'>{this.state.on ? 'Yes!' : 'No!'}</p>
          <button onClick = {() => this.setState({on: true})}>Click</button>
          <h2>{this.state.input}</h2>
          <input onChange={(e) => this.setState({input: e.currentTarget.value})} type='text'/>
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
When we run our tests:
```
npm test
```
And update our snapshots by pressing 'u' in the terminal, we should see our tests all pass.

**"Now, as you can imagine, when we use this setState method on our wrapper, it will invoke setState on the root component and cause it re-render. This is useful for testing our components in different states."**

## Resources
- [Lesson 11 Code](https://github.com/ParkerGits/react-enzyme-jest/tree/10-test-new-component-state-with-set-state-in-enzyme)
- [setState() - Enzyme](https://github.com/enzymejs/enzyme/blob/master/docs/api/ShallowWrapper/setState.md)
