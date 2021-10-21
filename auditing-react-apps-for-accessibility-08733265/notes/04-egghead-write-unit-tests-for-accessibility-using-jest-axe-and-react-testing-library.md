# []()

<TimeStamp start="0:07" end="0:15">

To get started we need to add the right dependencies. Run `npm install jest-axe @testing-library/react --save-dev`

</TimeStamp>


<TimeStamp start="0:22" end="0:35">

For our unit test, we need to import the following: 

```jsx
import  React from 'react';
import {render} from '@etesting-library/react';
import  {axe, toHaveNoViolations} from 'jest-axe';
import Login from '../Login'; 
```

</TimeStamp>

<TimeStamp start="0:58" end="1:10">

This is how our code for the test should look like:

```jsx 
expect.extend(toHaveNoViolations);

it('should not violate accessibility rules', async () => {
    const {container} = render (
        <login history={{ push: jest.fn() }}/>
    );

    const results = await axe(LoginPage.getDOMNode);
    expect(results).toHaveNoViolations();
});
```

</TimeStamp>
