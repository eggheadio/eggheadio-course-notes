# Test React Component Props with Enzyme and Jest

**[📹 Video](https://egghead.io/lessons/react-test-react-component-props-with-enzyme-and-jest)**

## Testing React Component Props

To begin this lesson, let's create a new component.

In App.js:
```js
// ...
export class Link extends Component {
  render() {
    return <a href={this.props.address}>Click</a>
  }
}
//...
```
**Make sure to import Component from React**:
```js
import React, { Component } from 'react';
```
Now we have a simple Link component that returns an 'a' element with an href tag that receives an address via props.

In App.test.js, we create a new describe block for our new Link component:
```js
// ...

describe('<Link />', () => {
  it('link component accepts address prop', () => {
    const wrapper = shallow(<Link address='www.google.com' />)
    expect(wrapper.instance().props.address).toBe('www.google.com')
  })
})
```

**"When it comes to testing component props with Enzyme, it's important to understand which prop of the component we're trying to test, and what I mean by this is, are we trying to test the actual instance of the component? (<Link address='www.google.com' />), or are we trying to test the href value on the returned a tag node? (<a href={this.props.address}>Click</a>)"**

For the test defined above, "we're testing the actual instance of the address prop"

Running our test in the terminal:
```
npm test
```
We should see that our test passes.

We define a new test in App.test.js:
```js
describe('<Link />', () => {
  it('link component accepts address prop', () => {
    const wrapper = shallow(<Link address='www.google.com' />)
    expect(wrapper.instance().props.address).toBe('www.google.com')
  })
  // New test:
  it('a tag node renders href correctly', () => {
    const wrapper = shallow(<Link address='www.google.com' />)
    expect(wrapper.props().href).toBe('www.google.com')
  })
})
```
In this test, we're making sure that our href is using the correct prop value, as opposed to the first test where we use the .instance() method.

"Now we're just using the props method on the wrapper itself. This will return all the props of the component's returned node. In our case, we're looking at the a tag, and it's treating the href like a prop. **Our two tests are testing the same prop essentially, but in different ways."**

What if our component's return method was conditional and depended on the prop that's been passed?

In App.js:
```js
// ...

export class Link extends Component {
  render() {
    return this.props.hide ? null : <a href={this.props.address}>Click</a>
  }
}
```
Now we define a new test for our component:
```js
// ...

describe('<Link />', () => {
  it('link component accepts address prop', () => {
    const wrapper = shallow(<Link address='www.google.com' />)
    expect(wrapper.instance().props.address).toBe('www.google.com')
  })
  it('a tag node renders href correctly', () => {
    const wrapper = shallow(<Link address='www.google.com' />)
    expect(wrapper.props().href).toBe('www.google.com')
  })
  it('returns null with a true hide props', () => {
    const wrapper = shallow(<Link hide={false} />)
    expect(wrapper.find('a').length).toBe(1)
  })
})
```
In the terminal, we see that the test passes. This means that our hide={false} prop is returning our a tag.

Now let's test that our null is being returned correctly:
```js
describe('<Link />', () => {
  it('link component accepts address prop', () => {
    const wrapper = shallow(<Link address='www.google.com' />)
    expect(wrapper.instance().props.address).toBe('www.google.com')
  })
  it('a tag node renders href correctly', () => {
    const wrapper = shallow(<Link address='www.google.com' />)
    expect(wrapper.props().href).toBe('www.google.com')
  })
  it('returns null with a true hide props', () => {
    const wrapper = shallow(<Link hide={false} />)
    expect(wrapper.find('a').length).toBe(1)
    wrapper.setProps({ hide: true })
    expect(wrapper.get(0)).toBeNull()
  })
})
```
In the terminal, we should see our tests pass.

setProps takes an object and passes it through as new props to a component.

**The setProps() method is useful for testing how components behave with changing props.**


## Resources
- [Lesson 8 Code](https://github.com/ParkerGits/react-enzyme-jest/tree/07-test-react-component-props-with-enzyme-and-jest)
- [Enzyme .get() method](https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/get.html)
- [Enzyme .setProps() method](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/setProps.html)
