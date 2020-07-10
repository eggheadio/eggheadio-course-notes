# Testing React Forms with Enzyme

**[📹 Video](https://egghead.io/lessons/react-testing-react-forms-with-enzyme)**

## Following Along
In order to follow along with this lesson, we need to add a couple things to our project.

In our src folder, we need to add:
- Form.css
- Form.js
- Form.test.js
- api.js

Within these files:
**Form.css**
```css
form {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 50px auto;
    background: #535774;
    padding: 35px;
}
input {
    margin: 10px 0;
    border: none;
    border-radius: 10px;
    padding: 7px;
}
button {
    background: #0F4FFF;
    border: none;
    border-radius: 30px;
    width: 300px;
    color: #fff;
    margin: auto;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 20px;
    padding: 10px 0;
    margin-top: 25px;
}
h2 {
    color: #fff;
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 3px;
}
.promotions {
    display: inline-block;
    margin-left: 10px;
    color: #fff;
}
```
**Form.js**
```js
import React, { Component } from 'react'
import './Form.css'
import api from './api'

export default class Form extends Component {
    state = {
        name: '',
        email: '',
        number: '',
        optIn: true
    }
    handleChange = str => e => {
        this.setState({ [str]: e.currentTarget.value })
    }
    handleSubmit = e => {
        e.preventDefault()
        return api.addUser(this.state.name, this.state.email, this.state.number)
    }
    handlePromotionClick = e => {
        this.setState(prevState => ({ optIn: !prevState.optIn }))
    }
    render() {
        return (
            <form data-testid='addUserForm' onSubmit={this.handleSubmit}>
                <h2>Request Information</h2>
                <input data-testid='name' type='text' onChange={this.handleChange('name')} placeholder='Name' value={this.state.name} />
                <input data-testid='email' type='text' onChange={this.handleChange('email')} placeholder='Email' value={this.state.email} />
                <input data-testid='number' type='text' onChange={this.handleChange('number')} placeholder='Number' value={this.state.number} />
                <div>
                    <input data-testid='checked' type='checkbox' checked={this.state.optIn} onChange={() => {}} onClick={this.handlePromotionClick} />
                    <p data-testid='promotionsP' className='promotions'>Receive Promotions</p>
                </div>
                <button type='submit' data-testid='submitButton'>Submit</button>
            </form>
        )
    }
}
```
**Form.test.js**
```js
import React from 'react'
import Form from './Form'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import api from './api'

configure({ adapter: new Adapter() })

describe('<Form />', () => {

})
```
**api.js**
```js
export default {
    addUser : (name, email, number) => fetch(`www.someurl.com`).then(res => res.json())
}
```
In order to actually render our component, we need to update our **index.js**:
```js
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'
import App from './App'
import TodoListContainer from './TodoList'
import Form from './Form'

ReactDOM.render(
  <Form />,
  document.getElementById('root')
)
```
To view our project, we can run in the terminal:
```
npm start
```
And navigate to the provided link in our browser (in my case, localhost:3000). The CSS was a bit messed up for me, but this won't affect our testing.

## React Form Testing in Enzyme
We have now a basic Form component that accepts Name, Email, and Phone Number, and also contains a "Receive Promotions" button and a submit button that calls an AJAX API method with the inputted information.

We can see in Form.js that the component state keeps track of the inputted information, and whether or not the user opted in for promotions.
```js
export default class Form extends Component {
  state = {
      name: '',
      email: '',
      number: '',
      optIn: true
  }

  ...
}
```

- The handleChange method updates the state of the corresponding input element that's being updated.
- Our handleSubmit makes sure that the page doesn't reload once this is submitted, and calls the API addUser method with our state information.
- Finally our handlePromotionClick method updates our input checkbox state on click.

```js
handleChange = str => e => {
    this.setState({ [str]: e.currentTarget.value })
}
handleSubmit = e => {
    e.preventDefault()
    return api.addUser(this.state.name, this.state.email, this.state.number)
}
handlePromotionClick = e => {
    this.setState(prevState => ({ optIn: !prevState.optIn }))
}
```
Our input fields have data attributes that we'll be using as selectors, as they give us more security than classes which can change with tools like CSS modules.
```js
<input data-testid='name' // ...
/>
```
For more information on data attributes, see the [resources below](#resources).

We can now begin testing our form behavior with Enzyme.

**"It's best to think about how will our users interact with the form, then to write unit tests to make sure our form answers that question."**

We need to
- Test that users are opted in to receive promotions by default
- Test that users are able to input information
- Test that users are able to submit the form and call our API method
- Create a snapshot to ensure our form says in the order of name, email, then number

Within Form.test.js, we first write a test that expects our users to be opted into promotions by default. **Note that 'it()' is an alias of 'test()', and that they are the same thing**:
```js
test('receive promotions default is true', () => {
    const wrapper = shallow(<Form />)
    const promotionInput = wrapper.find('[data-testid="checked"]')
    expect(promotionInput.props().checked).toBe(true)
})
```
Navigating to our terminal and running our tests:
```
npm test
```
We should see that our tests pass. Editing our test, for example, by changing .toBe(true) to .toBe(false), should cause our test to fail.

Our test finds our checkbox and asserts that its "checked" prop is true by default.

We'll now write a test that expects our user to be able to input their information. In Form.test.js, we start by creating a helper function outside of our describe block:
```js
const updateInput = (wrapper, instance, newValue) => {
  const input = wrapper.find(instance)
  input.simulate('change', {
      currentTarget: {value: newValue}
  })
  return wrapper.find(instance)
}
```
With that in place, we now call this function in our new test for each input, and assert that their "value" props are equal to what has been inputted:
```js
describe('<Form />', () => {
  // ...
  test('allows user to fill out form', () => {
    const wrapper = shallow(<Form />)
    const nameInput = updateInput(wrapper, '[data-testid="name"]', 'Tyler')
    const emailInput = updateInput(wrapper, '[data-testid="email"]', 'test@gmail.com')
    const numberInput = updateInput(wrapper, '[data-testid="number"]', '8018882321')

    expect(nameInput.props().value).toBe('Tyler')
    expect(emailInput.props().value).toBe('test@gmail.com')
    expect(numberInput.props().value).toBe('8018882321')
  })
})
```
We should see after navigating back to our terminal that the test passes.

**"To recap, we made this helper function that accepts a wrapper or a shallow rendered component, a selector which will find our individual instant input, and the new value we want the provided input to update to, and then we use the simulate method to mock a simulated event, in our case an onChange, and passes through a mocked out event object with our new value."**

In the same test, let's simulate a click on our check box, and expect that its "checked" prop is false. In Form.test.js:
```js
test('allows user to fill out form', () => {
  const wrapper = shallow(<Form />)
  const nameInput = updateInput(wrapper, '[data-testid="name"]', 'Tyler')
  const emailInput = updateInput(wrapper, '[data-testid="email"]', 'test@gmail.com')
  const numberInput = updateInput(wrapper, '[data-testid="number"]', '8018882321')
  // Find checkbox
  wrapper.find('[data-testid="checked"]').simulate('click')
  expect(nameInput.props().value).toBe('Tyler')
  expect(emailInput.props().value).toBe('test@gmail.com')
  expect(numberInput.props().value).toBe('8018882321')
  // Assert "checked" prop is false
  expect(wrapper.find('[data-testid="checked"]').props().checked).toBe(false)
})
```
On navigating back to our terminal, we should see that our tests pass. We are now confident that our user can input their information and uncheck the "Receive Promotions" checkbox.

Next, we're going to make sure that our form submits and calls the API. In Form.test.js:
```js
describe('<Form />', () => {
  // ...
  test('submits the form', () => {
    jest.spyOn(api, 'addUser').mockImplementation(() => Promise.resolve({data: 'New User Added'}))
    const wrapper = shallow(<Form />)
    updateInput(wrapper, '[data-testid="name"]', 'Tyler')
    updateInput(wrapper, '[data-testid="email"]', 'test@gmail.com')
    updateInput(wrapper, '[data-testid="number"]', '8018882321')
    wrapper.find('[data-testid="addUserForm"]').simulate('submit', {preventDefault: () => {}})

    expect(api.addUser).toHaveBeenCalledWith('Tyler', 'test@gmail.com', '8018882321')
  })
})
```
On returning to our terminal, we should see that our tests pass.

**"To recap, we're using Jest's spyOn method to mock out our API method addUser. We tell it to just return a resolved promise with a data object. Then we find the form and simulate a submit event. We need to pass through this event object ({preventDefault: () => {}}) because we call this preventDefault method inside of our component. Finally we test that our API is not only called, but called with the right parameters (expect(api.addUser).toHaveBeenCalledWith('Tyler', 'test@gmail.com', '8018882321'))."**

Finally, let's test that our component matches a snapshot. In Form.test.js:
```js
describe('<Form />', () => {
  // ...
  test('matches saved snapshot', () => {
    const wrapper = shallow(<Form />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
```
Returning to our terminal, we should see that a snapshot has been written, and that our tests still pass. We can see our snapshot in src/\_\_snapshots\_\_ as Form.test.js.snap.

Our snapshot test ensures that our form layout will remain consistent with what currently exists in Form.js.
## Resources
- [Lesson 15 Code](https://github.com/ParkerGits/react-enzyme-jest/tree/14-testing-react-forms-with-enzyme)
- [Data Attributes](https://www.w3schools.com/tags/att_data-.asp)
