# Test React Component Methods with Enzyme

**[📹 Video](https://egghead.io/lessons/react-test-react-component-methods-with-enzyme)**

## Enzyme Method Testing
We can use Enzyme to test the functionality of our component methods.

In our App.test.js:
```js
describe('<App /> shallow rendering', () => {
  // ...
  it('handleStrings function returns correctly', () => {
    const wrapper = shallow(<App />)
    const trueReturn = wrapper.instance().handleStrings('Hello World')
    expect(trueReturn).toBe(true)
  })
})
```
When we run our tests in the terminal:
```
npm test
```
We see that our newest test is failing because handleStrings() does not yet exist.

**"We're able to access methods on this class because of enzyme's instance function. It returns the component that we've shadowed rendered, and give this access to its properties."**

In our App.js file, we add the handleStrings() method to our component:
```js
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
    lifeCycle: ''
  }
  handleStrings(str) {
    return true
  }
  // ...
}
```
We should now see that our test passes on returning to the terminal.

Let's now set up our test to expect a false return given a different input. In App.test.js:
```js
it('handleStrings function returns correctly', () => {
  const wrapper = shallow(<App />)
  const trueReturn = wrapper.instance().handleStrings('Hello World')
  const falseReturn = wrapper.instance().handleStrings('')
  expect(trueReturn).toBe(true)
  expect(falseReturn).toBe(false)
})
```
On returning to our terminal, we should see that our test fails because our handleStrings function always returns true.

We'll now refactor our handleStrings function to conditionally return true or false:
```js
handleStrings(str) {
  if (str === 'Hello World') return true
  return false
}
```
Returning to our terminal, we should see all of our tests pass.

## Resources:
- [Lesson 13 Code](https://github.com/ParkerGits/react-enzyme-jest/tree/12-test-react-component-methods-with-enzyme)
- [How to Directly Test React Component Methods with Enzyme](https://bambielli.com/til/2018-03-04-directly-test-react-component-methods/)
- [.instance() - Enzyme](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/instance.html)
