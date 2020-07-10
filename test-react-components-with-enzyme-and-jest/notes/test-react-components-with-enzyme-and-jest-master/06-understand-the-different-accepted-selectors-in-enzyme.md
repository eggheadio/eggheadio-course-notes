# Understand the Different Accepted Selectors in Enzyme

**[📹 Video](https://egghead.io/lessons/react-understand-the-different-accepted-selectors-in-enzyme)**

## Enzyme Selectors
Many methods in Enzyme accept selectors as arguments. There are 5 categories of selectors that are accepted in Enzyme.

## 1. Valid CSS selectors include:
Element Syntax:
```js
expect(wrapper.find('h1').text()).toBe('Welcome to React')
```
Class Syntax:
```js
expect(wrapper.find('.tyler').text()).toBe('Welcome to React')
```
ID Syntax:
```js
expect(wrapper.find('#tyler').text()).toBe('Welcome to React')
```
Attribute Syntax:
```js
expect(wrapper.find('[href="tyler"]').text()).toBe('Welcome to React')
```
Combination of above:
```js
expect(wrapper.find('a[href="tyler"]').text()).toBe('Welcome to React')
```
Contextual Selectors (>, +, ~):
```js
expect(wrapper.find('[href="tyler ~ .clark"]').text()).toBe('Welcome to React')
```
## 2. Prop Selectors
Now we're gonna take a look at prop selectors.

In app.js, we create a Title component that returns a div with a text prop, then we add it to our App component:
```js
const Test = () => <div>Testing</div>

// Title Component:
const Title = ({text}) => <div>{text}</div>

function App() {
  return (
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
        <p className="App-intro">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        // Add title component to App component:
        <Title text="Some title" />
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
```
In App.test.js, we can select our Title component by its text prop using an attribute selector:
```js
expect(wrapper.find('[text="Some title"]').text()).toBe('Welcome to React')
```
## 3. Referencing Component Constructor
We can pass in a function that replicates the component we're trying to find as a selector:
```js
expect(wrapper.find(function App() { return ... }).text()).toBe('Welcome to React')
```

## 4. Referencing Component displayName
To select a component with a displayName, simply pass in a string of that displayName as a selector:
```js
expect(wrapper.find('App').text()).toBe('Welcome to React')
```

## 5. Object Property Selector
We can use the object property selector to find nodes by passing in an object that matches the property of a node as a selector. As demonstrated in the video, the following could select an img element with an alt tag of 'logo':
```js
expect(wrapper.find({alt: 'logo'}).text()).toBe('Welcome to React')
```
**Undefined properties are not allowed in the object property selector, and will cause error.**

## Resources
- [Lesson 6 Code](https://github.com/ParkerGits/react-enzyme-jest/tree/05-understand-the-different-accepted-selectors-in-enzyme)
- [Enzyme Selectors](https://enzymejs.github.io/enzyme/docs/api/selector.html)
