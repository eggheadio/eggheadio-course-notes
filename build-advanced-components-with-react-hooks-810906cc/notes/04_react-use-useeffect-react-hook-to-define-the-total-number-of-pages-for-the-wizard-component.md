# Use useEffect React Hook to Define the Total Number of Pages for the Wizard Component

[Video link](https://www.egghead.io/lessons/react-use-useeffect-react-hook-to-define-the-total-number-of-pages-for-the-wizard-component?pl=build-advanced-components-with-react-hooks-810906cc)

<TimeStamp start="00:30" end="00:40">

To obtain the number of steps programmatically, we will use the [React.Children](https://reactjs.org/docs/react-api.html#reactchildren) api and the `count` method that will return the number of elements of the children prop. 

```jsx
const steps = React.Children.count(props.children)
```

</TimeStamp>

<TimeStamp start="00:55" end="01:05">

The [useEffect Hook](https://reactjs.org/docs/hooks-effect.html) lets you perform side effects in function components.

```jsx
React.useEffect(() => {

}, [steps])
```

</TimeStamp>

<TimeStamp start="01:30" end="01:40">

```jsx
const Wizard = ({ children }) => {
  const [ steps, setSteps ] = React.useState(0);
  ...
}
const context = {
  activePageIndex,
  goNextPage,
  goPrevPage,
  steps,
  setSteps
}
```

</TimeStamp>

<TimeStamp start="01:55" end="02:05">

```jsx
const WizardPage = (props) => {
  const [ activePageIndex, setSteps ] = useWizardContext();
  ...
  React.useEffect(() => {
    setSteps(steps)
  }, [steps, setSteps])
}
```

</TimeStamp>