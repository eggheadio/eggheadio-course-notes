# 25 - Write e2e tests for our Next.js application with Nx and Cypress
[Video Link]()

<TimeStamp start="1:24" end="1:26">

`yarn nx e2e site-e2e` 

</TimeStamp>

<TimeStamp start="2:01" end="2:03">

`nx run site-e2e:e2e --watch`

</TimeStamp>

<TimeStamp start="2:41" end="2:45">

In the `app.spec.ts` file add the following: 

```jsx 
it('should render the title of the article', () => {
    cy.get('h1').should('contain', 'Dynamic Routing and Static Generation');
});
```

</TimeStamp>

<TimeStamp start="3:21" end="3:25">

```jsx 
it('should properly render the embedded Youtube component', () => {
    cy.get('iframe').should('be.visible');
});
```

</TimeStamp>