# 26 - Write Cypress Tests for our React Storybook Components with Nx
[Video Link]()

<TimeStamp start="0:56" end="0:58">

`yarn nx e2e storybook-e2e-ui-e2e --watch`

</TimeStamp>

<TimeStamp start="2:24" end="2:28">

```jsx 
it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to TopicButton!');
});
```

</TimeStamp>

<TimeStamp start="3:03" end="3:07">

```jsx 
it('should render the topic name', () => {
    cy.get('[data-testid=topicName]').should('contain', 'React');
});
```

</TimeStamp>

<TimeStamp start="3:36" end="3:39">

```jsx 
it('should correctly pass the topic name to the click event', () => {
    cy.get('[data-testid=topicButton]').click();
    cy.get('[data-testid=click-result]').should('contain', 'React');
});
```

</TimeStamp>