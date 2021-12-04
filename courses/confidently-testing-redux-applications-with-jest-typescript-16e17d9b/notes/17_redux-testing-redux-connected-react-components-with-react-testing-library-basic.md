# Testing Redux Connected React Components with React Testing Library (Basic)

<TimeStamp start="1:45" end="2:30">

Anytime you render a redux component, you have to wrap it with a redux provider.

This helper method will make that process easier:

```
function renderWithContext(element: React.ReactElement) {
  render(
    <Provider store={store}>
      <Router>{element}</Router>
    </Provider>
  );
}
```

</TimeStamp>
