# []()

<TimeStamp start="0:07" end="0:15">

To get started we need to add the right dependencies, keep in mind the `enzyme-adapter` corresponds to the react version you are using. Run `npm install jest-axe enzyme enzyme-adapter-react16 --save-dev`

</TimeStamp>

<TimeStamp start="0:30" end="0:35">

Create a new file under the `src` directory called `setupTests.js`

</TimeStamp>

<TimeStamp start="0:37" end="0:47">

In the new `setupTest.js` file you'll need to add the following code:

```jsx
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react16'; //keep in mind in this line you'll need to import the adapter that corresponds to the react version you are using 

configure({adapter:new Adapter()});
```

</TimeStamp>


<TimeStamp start="1:01" end="1:10">

For our unit test, we need to import the following: 

```jsx
import  React from 'react';
import {mount} from 'enzyme';
import  {axe, toHaveNoViolations} from 'jest-axe';
import Login from '../Login'; 
```

</TimeStamp>

<TimeStamp start="1:33" end="1:45">

This is how our code for the test should look like:

```jsx 
expect.extend(toHaveNoViolations);

it('should not violate accessibility rules', async () => {
    const LoginPage = mount(
        <Login history={{push: jest.fn()}}/>
    );

    const results = await axe(LoginPag.getDOMNode);
    expect(results).toHaveNoViolations();
});
```

</TimeStamp>

<TimeStamp start="1:53" end="2:10">

To run the test you'll need to run `npm run test`. Once axe scanned the rendered component, it will give a report with the results, for each one of the violations found you'll find the line of the code that is violating, we see what the violation was, a number of possible fixes and a resource to find more information about the violation. 

</TimeStamp>

<TimeStamp start="2:13" end="2:17">

Once you fixed all the violations, and run the test again it should be successful 

</TimeStamp>