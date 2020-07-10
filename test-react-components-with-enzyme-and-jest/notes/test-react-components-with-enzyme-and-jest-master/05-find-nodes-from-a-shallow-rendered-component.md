# Find Nodes from a Shallow Rendered Component

**[📹 Video](https://egghead.io/lessons/react-find-nodes-from-a-shallow-rendered-component)**

## Searching for Nodes
We can use built-in methods to search for certain nodes in our Shallow Rendered Component, and combine these methods with Jest assertions to make sure everything renders correctly.

In App.test.js, we **define a search for a node on our Shallow Rendered Component with the .find() method**, and **wrap that in a Jest assertion, expect().toBe()**. In this case, we **search for a p element** and **expect it to be a length of 1**:
```js
describe('<App />', () => {
  const wrapper = shallow(<App />)
  it('should contain 1 p element', () => {
    expect(wrapper.find('p').length).toBe(1)
  })
})
```

Running our test script:
```
npm test
```
We can see that the test passes, and that our component contains just one p element.

In this next part, we use the class selector to make sure that an element with a specific class exists. **If your App.js component is different than the instructor's, like mine is, you have to give your p element a class:**
```js
<p className="App-intro">
  Edit <code>src/App.js</code> and save to reload.
</p>
```
Now we define a **search for an element with class "App-intro"** and **expect it to exist**:
```js
describe('<App />', () => {
  const wrapper = shallow(<App />)
  it('should contain 1 p element', () => {
    expect(wrapper.find('.App-intro').exists()).toBe(true)
  })
})
```
Looking back at our terminal, we should see that the test passes. *To see this test fail, we can change '.App-intro' selector within the .find() method to something else*.

Now we define a **search for a ul element** and **expect 3 child elements**. *We can also change 'should contain 1 p element' to something more fitting, like 'should contain a ul element with 3 children li elements'*.
```js
describe('<App />', () => {
  const wrapper = shallow(<App />)
  it('should contain a ul element with 3 children li elements', () => {
    expect(wrapper.find('ul').children().length).toBe(3)
  })
})
```
Now we must **create a ul element with 3 children li elements** in our App.js component:
```js
<img src={logo} className="App-logo" alt="logo" />
<ul>
  <li>Test 1</li>
  <li>Test 2</li>
  <li>Test 3</li>
</ul>
<p className="App-intro">
  Edit <code>src/App.js</code> and save to reload.
</p>
```
We should see that our test passes with our terminal in watch mode.

Adding an outlying li element to App.js:
```js
<img src={logo} className="App-logo" alt="logo" />
<ul>
  <li>Test 1</li>
  <li>Test 2</li>
  <li>Test 3</li>
</ul>
<li>Test 3</li>
<p className="App-intro">
  Edit <code>src/App.js</code> and save to reload.
</p>
```
Doesn't change the pass from our test, as **the test is only looking for children of the ul element**.

We can also **give a class to the ul element** in App.js:
```js
<ul className="tyler">
  <li>Test 1</li>
  <li>Test 2</li>
  <li>Test 3</li>
</ul>
<li>Test 3</li>
<p className="App-intro">
  Edit <code>src/App.js</code> and save to reload.
</p>
```
And define a test in App.test.js that **searches for a ul element** and **expects it to have that class**:
```js
describe('<App />', () => {
  const wrapper = shallow(<App />)
  it('should contain ul with class tyler', () => {
    expect(wrapper.find('ul').hasClass('tyler')).toBe(true)
  })
})
```
Our terminal in watch mode should show this test passes.

For this next test, we need to **add an h1 element with the text 'Welcome to React'** to our App.js component:
```js
<img src={logo} className="App-logo" alt="logo" />
<h1>Welcome to React</h1>
<ul className="tyler">
  <li>Test 1</li>
  <li>Test 2</li>
  <li>Test 3</li>
</ul>
<li>Test 3</li>
<p className="App-intro">
  Edit <code>src/App.js</code> and save to reload.
</p>
```
In our App.test.js, we **search for the h1 element** and **expect the text to be 'Welcome to React'**
```js
describe('<App />', () => {
  const wrapper = shallow(<App />)
  it('should contain an h1 with text Welcome to React', () => {
    expect(wrapper.find('h1').text()).toBe('Welcome to React')
  })
})
```
Returning to our terminal in watch mode, we should see that the test passes.
## Resources
- [Lesson 5 Code](https://github.com/ParkerGits/react-enzyme-jest/tree/04-find-nodes-from-a-shallow-rendered-component)
- [Enzyme .find(selector)](https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/find.html)
- [Jest Assertions - Expect](https://jestjs.io/docs/en/expect)
- [Shallow Rendering in Enzyme](https://enzymejs.github.io/enzyme/docs/api/shallow.html)
