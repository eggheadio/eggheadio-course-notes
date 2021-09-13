# Validate use of Context using a custom hook and the useContext React hook

[Video link](https://www.egghead.io/lessons/react-validate-use-of-context-using-a-custom-hook-and-the-usecontext-react-hook?pl=build-advanced-components-with-react-hooks-810906cc)

<TimeStamp start="00:40" end="01:00">

If you render your compound component outside of the main component, you'll get an error since there is no provider. One workaround is giving the full values for the context attributes.

```jsx
const WizardContext = React.createContext({
  activePageIndex: 0,
  goNextPage: () => {},
  goPrevPage: () => {}
})
```

</TimeStamp>

<TimeStamp start="01:30" end="01:45">

The other way, one that we are going to do, is add a validation step and issue an error message.

```jsx
const useWizardContext = () => {
  const context = React.useContext(WizardContext)
  if(!context) {
    throw new Error('Error message here')
  }
  return context;
}
```

</TimeStamp>

<TimeStamp start="00:00" end="00:00">

Replace every reference to `React.useContext(WizardContext);` to `useWizardContext()` and this will display the new error message describing what exactly is going on.

</TimeStamp>