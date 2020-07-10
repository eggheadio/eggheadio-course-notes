# Fully Render React Components with Enzyme

**[📹 Video](https://egghead.io/lessons/react-fully-render-react-components-with-enzyme)**

## Full DOM Rendering
"Full DOM rendering is ideal for use cases where you have components that interact with DOM APIs, or require React lifecycles."

In App.test.js:
```js
// ...
import { configure, shallow, mount } from 'enzyme'
// ...
```
Now, duplicate our first describe block, and specify the first as using shallow rendering and the second as using mount rendering. Then, change the "shallows" in the second describe block to "mounts":
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
})

describe('<App /> mount rendering', () => {
  it('should contain an element with logo as alt tag', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find({alt: 'logo'}).exists()).toBe(true)
  })
  it('matches the snapshot', () => {
    const tree = mount(<App />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
```
"Full DOM rendering requires that a full DOM API be available at the global scope. This means that we must run our test in an environment that at least looks like a browser environment."

To satisfy this, we need to import jsdom. If you're not using Create React App (the notes so far HAVE used Create React App), run the following in the terminal:
```
npm install jsdom
```
We can input a second argument in our wrapper mount render:
```js
const wrapper = mount(<App />, {context: {}, attachTo: DOMElement})
```
The context object allows us to pass context into our component, and the attachTo object allows us to attach our component to a specific DOM element. Check out the [resources](#resources) for more information on mount rendering and its arguments.

If you added the argument above, remove it now:
```js
const wrapper = mount(<App />)
```
Moving on:
**"Unlike shallow or static rendering, full rendering actually mounts the component in a DOM, which means that tests can affect each other if they're using the same DOM."**

Adding the unmount() method at the end of each mount render test unmounts the component from the DOM. It can also be used to simulate a component going through an unmount mount lifecycle in React:
```js
describe('<App /> mount rendering', () => {
  it('should contain an element with logo as alt tag', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find({alt: 'logo'}).exists()).toBe(true)
    wrapper.unmount()
  })
  it('matches the snapshot', () => {
    const tree = mount(<App />)
    expect(toJson(tree)).toMatchSnapshot()
    tree.unmount()
  })
})
```
Running our test in the terminal:
```
npm test
```
And updating the snapshot by pressing 'u' in the terminal allows all of our tests to pass.

The mount toJson rendering is slightly different than the shallow rendering, so changing the mount rendering to shallow rendering will cause our snapshot test to fail.
```js
describe('<App /> mount rendering', () => {
  it('should contain an element with logo as alt tag', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find({alt: 'logo'}).exists()).toBe(true)
    // wrapper.unmount()
  })
  it('matches the snapshot', () => {
    const tree = shallow(<App />)
    expect(toJson(tree)).toMatchSnapshot()
    // tree.unmount()
  })
})
```
We can see the result of this with our terminal in watch mode.
## Resources
- [Lesson 9 Code](https://github.com/ParkerGits/react-enzyme-jest/tree/08-fully-render-react-components-with-enzyme)
- [Mount Options - Enzyme](https://github.com/enzymejs/enzyme/blob/master/docs/api/mount.md#mountnode-options--reactwrapper)
