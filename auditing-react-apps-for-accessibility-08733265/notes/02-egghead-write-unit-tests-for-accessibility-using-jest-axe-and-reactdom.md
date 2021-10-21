# []()


<TimeStamp start="0:02" end="0:07">

To get started with `jest-axe` we need to add the dependencies. Run `npm install jest-axe --save-dev`

</TimeStamp>

<TimeStamp start="1:00" end="1:10">

For our unit test, we need to import the following: 

```jsx
import  React from 'react';
import ReactDOM from 'react-dom';
import  {axe, toHaveNoViolations} from 'jest-axe';
import Login from '../Login'; 
```

</TimeStamp>

<TimeStamp start="1:20" end="1:32">

This is how our code for the test should look like:

```jsx 
expect.extend(toHaveNoViolations);

it('should not violate accessibility rules', async () => {
    const LoginPage = document.createElement('div');

    ReactDOM.render((
        <Login history = {{push:jest.fn()}}/>
    ), LoginPage);

    const results = await axe(LoginPage);
    expect(results).toHaveNoViolations();
});
```

</TimeStamp>

<TimeStamp start="2:05" end="2:27">

To run the test you'll need to run `npm run test`. Once axe scanned the rendered component, it will give a report with the results, for each one of the violations found you'll find the line of the code that is violating, we see what the violation was, a number of possible fixes and a resource to find more information about the violation. 

</TimeStamp>

<TimeStamp start="2:05" end="2:27">

Once you fixed all the violations, and run the test again it should be successful 

</TimeStamp>