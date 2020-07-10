# Test Enzyme Rendered Components with Jest Snapshots

**[📹 Video](https://egghead.io/lessons/react-test-enzyme-rendered-components-with-jest-snapshots)**

## Test UI of a component
**With unit tests, "we could test that the logo and title are rendered correctly inside of this component, but how could we make sure that the logo is above the h1 in hierarchy?"**

In this lesson, we will create Jest snapshots in order to make sure that our rendered output remains consistent.

Navigate to App.test.js and write a new test:
```js
describe('<App />', () => {
  const wrapper = shallow(<App />)
  it('should contain an element with logo as alt tag', () => {
    expect(wrapper.find({alt: 'logo'}).exists()).toBe(true)
  })
  // New Test:
  it('matches the snapshot', () => {
    const tree = shallow(<App />)
    expect(tree).toMatchSnapshot()
  })
})
```

Now, we run our test in the terminal:
```
npm test
```
And we should see that our test passes, and that a snapshot has been written.

Our new snapshot can be found at src/\_\_snapshots\_\_/App.test.js.snap. If we navigate there, you'll either see what the instructor sees in the video, or you'll see this:
```js
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`<App /> matches the snapshot 1`] = `ShallowWrapper {}`;
```
The example shown above is what is generated in newer versions of Jest. In either case, it's easy to understand that our snapshot is hard to read.

To solve this problem, we need to add a serializer.

In the terminal, we install enzyme-to-json as a Dev Dependency:
```
npm install --save-dev enzyme-to-json
```
Inside of our App.test.js, we import from our new package:
```js
// imports
import toJson from 'enzyme-to-json'

//...
```
And we pass our 'tree' into toJson():
```js
it('matches the snapshot', () => {
  const tree = shallow(<App />)
  expect(toJson(tree)).toMatchSnapshot()
})
```
Now, on returning to our terminal, we can see that our snapshots are working. **Our latest test has failed because the JSON rendered component does not match our original component.**

**In order to update our snapshot with a change we want to keep, we can press 'u' in the terminal.**

Now, if we make a change in our App.js component, such as adding <p>Hello World!</p>, **our test will fail because the component no longer matches that which is defined in the snapshot.**

Again, to update our snapshot with a change we want to keep, we press 'u' in the terminal.

## Resources
- [Lesson 7 Code](https://github.com/ParkerGits/react-enzyme-jest/tree/06-test-enzyme-rendered-components-with-jest-snapshots)
- [Enzyme Shallow Rendered Component Snapshot Empty Issue](https://github.com/facebook/jest/issues/7802)
- [Snapshot Testing - Jest](https://jestjs.io/docs/en/snapshot-testing)
