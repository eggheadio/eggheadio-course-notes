# Write tests for react-intl output using enzyme and Jest

**[📹 Video](https://egghead.io/lessons/react-write-tests-for-react-intl-output-using-enzyme-and-jest)**

## Adding Dependencies ⚡
We're gonna need to install some dependencies for this lesson. In the terminal, at your project directory, run
```bash
yarn add enzyme enzyme-to-json react-addons-test-utils
```
We'll also need to add some test helper utilities. In your **src** folder, create a file called **intl-enzyme.js** and add the following code within:

### Deprecation ⚠
As of react-intl v3, `getChildContext()` is deprecated, so the helper function that the instructor uses will no longer work. Provided below is a different helper function that can be implemented just the same.
### intl-enzyme.js
```js
/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import React from 'react';
import {IntlProvider} from 'react-intl';
import {mount, shallow} from 'enzyme';
import {flattenMessages} from './utils'
// You can pass your messages to the IntlProvider. Optional: remove if unneeded.
import messages from './messages'
const defaultLocale = 'en-US';
const locale = defaultLocale;
const flattenedMessages = flattenMessages(messages[locale])


export function mountWithIntl(node) {
  return mount(node, {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale,
      defaultLocale,
      flattenedMessages,
    },
  });
}

export function shallowWithIntl(node) {
  return shallow(node, {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale,
      defaultLocale,
      flattenedMessages,
    },
  });
}
```
"What this helper will do is wrap the component being tested with all of the correct parent components, contexts, and props required by react-intl."

This helper also allows us to use Enzyme's shallow rendering or full-mount rendering.

We can now begin writing tests with our dependencies installed and our test helper utilities added.

Navigate to **src/components** and create a new folder called **__tests__**. Within this folder, create a new file called **BookDetail.test.js** to house all of our tests for the `BookDetail` component.

Inside of **BookDetail.test.js**,  we're going to import from React, enzyme-to-json, **BookDetail.js**, and our test helper utilities.

### BookDetail.test.js
```js
import React from "react";
import { mountWithIntl, shallowWithIntl } from "../../intl-enzyme";
import toJson from "enzyme-to-json";

import BookDetail from "../BookDetail";
```

### Deprecation ⚠
As of React-16, Enzyme requires an adapter to run tests. Start by adding enzyme-adapter-react-16:
```bash
yarn add enzyme-adapter-react-16
```
Next, in **BookDetail.test.js**, we'll configure the adapter:
### BookDetail.test.js
```js
import React from "react";
import { mountWithIntl, shallowWithIntl } from "../../intl-enzyme";
import toJson from "enzyme-to-json";

import BookDetail from "../BookDetail";

// Configure enzyme

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
```
Now we should be all good to get started writing tests! 

## Writing Assertions and Testing with Enzyme and Jest ⚡
We're going to initialize a `wrapper` variable to hold the rendered component in each test assertion.
### BookDetail.test.js
```js
let wrapper = null;
```

Now we can write our first test assertion. First we create a `describe` block for our `BookDetail` component, then we'll assert that our component renders intended markup.

### BookDetail.test.js
```js
describe('BookDetail', () => {
  it('renders expected markup', () => {

  });
```

Within our `it` assertion, we provide our `wrapper` with an instance of our `BookDetail` component wrapped by `mountWithIntl`: `mountWithIntl(<BookDetail />)`. 

### BookDetail.test.js
```js
describe('BookDetail', () => {
  it('renders expected markup', () => {
    wrapper = mountWithIntl(<BookDetail />);

  });
```
Within our `BookDetail` component, we want to provide the `match` prop from react-router-dom and pass in `{params: {bookId: 1}}` to specify that we want to test our component with the first book's information.

### BookDetail.test.js
```js
describe('BookDetail', () => {
  it('renders expected markup', () => {
    wrapper = mountWithIntl(<BookDetail match={{params: {bookId: 1}}}/>);
  });
```

Finally, we'll `expect` that `toJson(wrapper)` matches a snapshot (`toMatchSnapshot()`).

### BookDetail.test.js
```js
describe('BookDetail', () => {
    it('renders expected markup', () => {
      wrapper = mountWithIntl(<BookDetail match={{params: {bookId: 1}}}/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
})
```

We can run our test by heading to the terminal and running,
```bash
yarn test
```
"That's it. We've got our first test. However, there's one problem with this test. Jest's docs correctly say that tests should be deterministic, meaning that running the same test multiple times on a component that has not changed should produce the same result."

The problem that the instructor is referring to above involves our `FormattedRelativeTime` component. Recall that `FormattedRelativeTime` renders the number of *days* since a review was written. Because the rendered component is different from one day to the next, the snapshot test created today will fail tomorrow.

To fix this issue, we can "mock" `Date.now()` to return a constant timestamp. This way, no matter what day we run our test on, `Date.now()` is the same, so our rendered `FormattedRelativeTime` component doesn't change from day to day.

In our `BookDetail.test.js`, we can redefine `Date.now` to be a mock Jest function that returns a static timestamp:

### BookDetail.test.js
```js
import React from "react";
import { mountWithIntl, shallowWithIntl } from "../../intl-enzyme";
import toJson from "enzyme-to-json";

import BookDetail from "../BookDetail";

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

Date.now = jest.fn(() => 1491111687199)

let wrapper = null;

describe('BookDetail', () => {
    it('renders expected markup', () => {
      wrapper = mountWithIntl(<BookDetail match={{params: {bookId: 1}}}/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
})
```

We can now run our test again, and we should see that it fails now that our `Date.now()` value is different. We can update our snapshot by pressing 'u' in the terminal, and now our test should pass.

"Now that we've seen a snapshot, let's take a look at using Enzyme to assert specific things with regards to react-intl components."

We're going to set up a nested `describe` block for `'intl messages'`, and within we're going to define a function to run before each test runs with `beforeEach()`.

### BookDetail.test.js
```js
describe('BookDetail', () => {
    it('renders expected markup', () => {
      wrapper = mountWithIntl(<BookDetail match={{params: {bookId: 1}}}/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    describe('intl messages', () => {
      beforeEach(() => {
        
      });
    })
})
```

Within `beforeEach()` we're going to define our wrapper. We'll pass in `shallowWithIntl(<BookDetail match={{params: { bookId: 1}}}>)`. 

"Since our component is wrapped with the injectIntl higher-order component, calling `shallowWithIntl` will just provide the instance of `Intl` instead of our `BookDetail` component."

### Deprecation ⚠
In the lesson, the instructor, to fix this issue, calls `.first()` on `shallowWithIntl()` to get the first child of the component, then calls `.shallow()` on that. However, I've found that this does not actually provide us with the `wrapper` we want. If `shallowWithIntl(...).first().shallow()` doesn't work for you, I've provided an alternative that works for me below.

### BookDetail.test.js
```js
describe('BookDetail', () => {
    it('renders expected markup', () => {
      wrapper = mountWithIntl(<BookDetail match={{params: {bookId: 1}}}/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    describe('intl messages', () => {
      beforeEach(() => {
        wrapper = shallowWithIntl(<BookDetail match={{params: {bookId: 1}}}/>).shallow().shallow();
      });
    })
})
```
Now we can add an `it` block to define an assertion, and within it we'll `expect` to find one `{id: detail.purchase}` object.

### BookDetail.test.js
```js
describe('BookDetail', () => {
    it('renders expected markup', () => {
      wrapper = mountWithIntl(<BookDetail match={{params: {bookId: 1}}}/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    describe('intl messages', () => {
      beforeEach(() => {
        wrapper = shallowWithIntl(<BookDetail match={{params: {bookId: 1}}}/>).shallow().shallow();
      });
      it('renders a single "purchase" message', () => {
        expect(wrapper.find({id: 'detail.purchase'})).toHaveLength(1);
      });
    })
})
```
We can now run this test, again with `yarn test` in the terminal, and it should pass.

Finally, we can test that our our component `'passes number of merchants to "new window" message'` with another `it` block. This time, we'll `expect` the element with `id: 'detail.window'` to have a `values` prop of `numMerchants: 3`.

### BookDetail.test.js
```js
describe('BookDetail', () => {
  it('renders expected markup', () => {
    wrapper = mountWithIntl(<BookDetail match={{params: {bookId: 1}}}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('intl messages', () => {
    beforeEach(() => {
      wrapper = (shallowWithIntl(<BookDetail match={{params: {bookId: 1}}}/>)).shallow().shallow()
    });

    it('renders a single "purchase" message', () => {
      expect(wrapper.find({id: 'detail.purchase'})).toHaveLength(1);
    });

    // New Test
    it('passes number of merchants to "new window" message', () => {
      expect(wrapper.find({id: 'detail.window'}).prop('values')).toMatchObject({
        numMerchants: 3
      });
    });
  });
});
```
Running `yarn test` one final time in the terminal should result in passing tests.
## Resources 📖
- [getChildContext() Deprecation - react-intl](https://formatjs.io/docs/react-intl/upgrade-guide-3x/#testing)
- [Testing - react-intl](https://formatjs.io/docs/react-intl/testing/)