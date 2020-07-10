# Test Against Different React Releases with Enzyme

**[📹 Video](https://egghead.io/lessons/react-test-against-different-react-releases-with-enzyme)**

## Setting up Enzyme with different releases of React

At the time of writing these notes, Create React App uses React 16. In order to use Enzyme with React 16, we need to install the enzyme-adapter-react-16 package:
```
npm install --save-dev enzyme-adapter-react-16
```
With this package, we can now configure our application to use this adapter. In src/App.test.js:
```javascript
// ...
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
// ...
```
More information about the enzyme-adapter-react-16 package and what package to use with specific versions of React can be found in the [resources](#resources).

## Resources
- [Lesson 3 Code](https://github.com/ParkerGits/react-enzyme-jest/tree/02-test-against-different-react-releases-with-enzyme)
- [enzyme-adapter-react-16 documentation](https://www.npmjs.com/package/enzyme-adapter-react-16)
