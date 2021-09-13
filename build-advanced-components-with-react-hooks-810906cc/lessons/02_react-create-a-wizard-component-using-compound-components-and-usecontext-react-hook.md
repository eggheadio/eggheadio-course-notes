# Create a Wizard Component Using Compound Components and useContext React Hook

[Video link](https://www.egghead.io/lessons/react-create-a-wizard-component-using-compound-components-and-usecontext-react-hook?pl=build-advanced-components-with-react-hooks-810906cc)

<TimeStamp start="00:20" end="00:30">

```jsx
const App = () {
  return (
    <Wizard>
      <Wizard.pages>
      <Page1 />
      <Page2 />
      <Page3 />
      </Wizard.pages>
      <Wizard.ButtonNext />
      <Wizard.ButtonPrev />
    <Wizard>
  )
}
```

</TimeStamp>

<TimeStamp start="00:35" end="00:45">

```jsx
const ButtonPrev = () => 
  activePageIndex> 0 ? (
    <button
      type="button"
      className="wizard__buttons-left"
      onClick={onPrevClick}
    >
      Atras
    </button>
  ) : null;
const ButtonNext = () => 
  activePageIndex < pages.length - 1 ? (
    <button
      type="button"
      className="wizard__buttons-left"
      onClick={onNextClick}
    >
      Siguiente
    </button>
  ) : null;

const Pages = ({ children }) => 
  <div>{children}</div>
```

</TimeStamp>

<TimeStamp start="00:00" end="00:00">

[Context](https://reactjs.org/docs/context.html) provides a way to pass data through the component tree without having to pass props down manually at every level.

```jsx
const WizardContext = React.createContext();
```

</TimeStamp>

<TimeStamp start="01:15" end="01:20">

We define the context component as the parent component of the ENTIRE wizard component tree by using `WizardContext.Provider`. 

```jsx
<WizardContext.Provider value={{}} >
```

</TimeStamp>

<TimeStamp start="01:30" end="01:35">

```jsx
const context = { 
  activePageIndex, 
  goNextPage,
  goPrevPage
}
```

</TimeStamp>

<TimeStamp start="01:30" end="01:35">

```jsx
<WizardContext.Provider value={context} >
```

</TimeStamp>

<TimeStamp start="01:50" end="02:00">

```jsx
const ButtonPrev = () => {
  const { activePageIndex, goPrevPage } = React.useContext(WizardContext)
...
}
const ButtonNext = () => {
  const { activePageIndex, goNextPage, steps } = React.useContext(WizardContext)
...
}
```

</TimeStamp>

<TimeStamp start="02:15" end="02:30">

```jsx
const Wizard = ({ children, steps }) => {
  ...
}
const context = {
  activePageIndex, 
  goNextPage,
  goPrevPage,
  steps
}
const App = () {
  return (
    <Wizard>
      <Wizard steps={3}>
      <Page1 />
      <Page2 />
      <Page3 />
      </Wizard>
      <Wizard.ButtonNext />
      <Wizard.ButtonPrev />
    <Wizard>
  )
}
```

</TimeStamp>

<TimeStamp start="02:45" end="02:50">

```jsx
<WizardContext.Provider value={context} >
  <div className="wizard">
    {children}
  </div>
</WizardContext.Provider>
```

</TimeStamp>

<TimeStamp start="02:58" end="03:05">

```jsx
const Pages = ({ children }) => {
  const { activePageIndex } = React.useContext(WizardContext)
  const Page = React.Children.toArray(children)
  const currentPage = pages[activePageIndex];
  <div className="wizard__context">{currentPage}</div>
}
```

</TimeStamp>

<TimeStamp start="00:00" end="00:00">

```jsx
Wizard.Pages = Pages
Wizard.ButtonNext = ButtonNext
Wizard.ButtonPrev = ButtonPrev
```

</TimeStamp>