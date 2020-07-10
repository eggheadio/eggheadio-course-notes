# Shallow Render a React Component with Enzyme

**[📹 Video](https://egghead.io/lessons/react-shallow-render-a-react-component-with-enzyme)**

## Setting up a Shallow Render
Shallow Rendering is useful to test components as individual units.
- **"Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components."**

Start by importing shallow from 'enzyme'. In App.test.js:
```javascript
import { configure, shallow } from 'enzyme'
```
Now we describe our shallow render in App.test.js. Make sure to remove the default Create React App code:
```javascript
// ...
configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('should render App', () => {
    const wrapper = shallow(<App />, {context: {}, disableLifecycleMethods: bool})
  })
})
```
**"Shallow rendering is easy to use when working with the component itself. It's not going to chase rendering child components."**

We can see what our shallow rendered component looks like by calling the debug method on the wrapper:
```js
configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('should render App', () => {
    const wrapper = shallow(<App />, {context: {}, disableLifecycleMethods: bool})
    console.log(wrapper.debug())
  })
})
```
Now head over to src/App.js to view our App component. This is the default Create React App component. You may notice that your App.js looks different from the instructor's, but do not fret. Whatever we see here is what we expect to see in our terminal when we run our test script.

We can now run our test script in the terminal:
```
npm test
```
And our terminal should soon display the console.log of the shallow rendered component.

To test the rendering of children, we create a React functional component called Test, and place it inside of our App component. Again, your App.js may look different than that of the video or that which is shown below, but just make sure the Test component makes it into your App component. In App.js:
```javascript
// ...
const Test = () => <div>Testing</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Test />
    </div>
  );
}

export default App;
// ...
```
We can also pass configurations to our shallow rendered component.

**Note: In the video, the instructor uses bool as pseudocode representing either true or false. To run your test without error, change bool to true/false**.

In App.test.js:
```javascript
const wrapper = shallow(<App />, {context: {}, disableLifecycleMethods: bool})
```
The context property allows us to provide context to our rendered component, if that is important in our test.

The disableLifecycleMethods allows us to tell Enzyme whether to ignore calling componentDidMount on our component, and ignore calling componentDidUpdate on our component after setProps and setContexts is used. This is set to false by default, but can be set to true through these configurations.
## Resources
- [Lesson 4 Code](https://github.com/ParkerGits/react-enzyme-jest/tree/03-shallow-render-a-react-component-with-enzyme)
- [Shallow Rendering in Enzyme](https://enzymejs.github.io/enzyme/docs/api/shallow.html)
