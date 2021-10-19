# []()

<TimeStamp start="0:07" end="1:10">

Save cypress in your dev dependencies by running `npm install cypress cypress-axe --save-dev`

</TimeStamp>

<TimeStamp start="0:22" end="0:27">

 In your `package.json` add `"cypress:open": "cypress open"` and run it for the first time `npm run cypress:open"`

</TimeStamp>

<TimeStamp start="0:50" end="1:00">

Import these in your `cypress/support/index.js` to give cypress access to additional commands to test the accessibility of your app

```jsx 
import `./commands'
import 'cypress-axe'
```

</TimeStamp>

<TimeStamp start="1:05" end="1:20">
 
In the new file `Login.spec.js` add the following code:

```jsx 
beforeEach(() => {
    cy.visit('http://localhost:300/login'); //we are telling cypress to navigate the exact page
    cy.injectAxe();
})
```

</TimeStamp>

<TimeStamp start="1:25" end="1:20">

Our cypress test should look like this:

```jsx
describe('Login page', () => {
    it('should not violate accessibility rules', () => {
        cy.checkA11y(); //command included in cypress plugin 
    })
})
```

</TimeStamp>

<TimeStamp start="2:17" end="2:26">
 
In the cypress interface you can see the violations highlighted in your web browser. However, if you open console you can see more details of the violations. 

</TimeStamp>

<TimeStamp start="2:45" end="2:51">
 
 By opening the `Nodes:` component in the console, you'll be able to see each of the elements 


</TimeStamp><TimeStamp start="3:00" end="3:07">
 
```jsx 
it('has no accessibility violations when login button clicked', () =>{
    cy.get('button#login-button').click();
    cy.checkA11y();
})
```

</TimeStamp>
