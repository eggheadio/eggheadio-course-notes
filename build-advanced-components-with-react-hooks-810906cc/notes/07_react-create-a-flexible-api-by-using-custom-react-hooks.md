# Create a Flexible API by Using Custom React Hooks

[Video link](https://www.egghead.io/lessons/react-create-a-flexible-api-by-using-custom-react-hooks?pl=build-advanced-components-with-react-hooks-810906cc)

<TimeStamp start="00:25" end="00:35">

```jsx
const App = () => {
  return (
    <Wizard reducer={reducer} initialState={initialState}>
      <Progress />
      <Navigation />
      <Pages>
        <Page1 />
        <Page2 />
        <Page3 />
      </Pages>
      <ProgressBar />
    </Wizard>
  );
};
```

</TimeStamp>

<TimeStamp start="00:45" end="00:53">

```jsx
const Navigation = () => {
  return (
    <div className="wizard__buttons">
      <button className="wizard_-buttons-left">Anterior</button>
  
      <button className="wizard_-buttons-left">Anterior</button>
    </div>
  )
}
```

</TimeStamp>

<TimeStamp start="00:58" end="01:05">

```jsx
const Pages = {( children )} => {
  return (
    <div className="wizard__content">
      {children}
    </div>
  )
}
```

</TimeStamp>

<TimeStamp start="01:08" end="01:15">

```jsx
const ProgressBar = () => {
  return (
    <div className="wizard__progress">
      Paso 1 de X
    </div>
  )
}
```

</TimeStamp>

<TimeStamp start="01:45" end="01:58">

```jsx
export const useWizardNavigation = () => {
  const { goNextPage, goPrevPage, activePageIndex, steps } = useWizardContext()
  return {
    goNextPage,
    goPrevPage,
    activePageIndex,
    steps
  }
}
```

</TimeStamp>

<TimeStamp start="02:25" end="02:37">

```jsx
export const useWizardPages = (totalSteps) => {
  const { setSteps, activePageIndex } = useWizardContext()
  React.useEffect(() => {
    setSteps(totalSteps);
  }, [totalSteps, setSteps]);
  return {
    activePageIndex
  }
}
```

</TimeStamp>

<TimeStamp start="02:45" end="02:55">

```jsx
export const useWizardProgress = () => {
  const { activePageIndex, steps } = UseWizardContext()
  return {
    activePageIndex,
    steps
  }
}
```

</TimeStamp>

<TimeStamp start="03:00" end="03:05">

```jsx
import Wizard, { actions, useWizardNavigation, useWizardPages, useWizardProgress } from './Wizard';
```

</TimeStamp>

<TimeStamp start="03:35" end="03:45">

```jsx
const Navigation = () => {
  const { activePageIndex, goNextPage, goPrevPage, steps } = useWizardNavigation();
  return (
    <div className="wizard__buttons">
      <button onClick={goPrevPage} 
        className="wizard_-buttons-left"
        disabled={activePageIndex <=0>}
      >Anterior</button>
  
      <button onClick={goNextPage} 
        className="wizard_-buttons-left"
        disabled={activePageIndex >= steps - 1}
      >Anterior</button>
    </div>
  )
}
```

</TimeStamp>

<TimeStamp start="04:00" end="04:10">

```jsx
const Pages = {( children )} => {
  const { activePageIndex } = useWizardPages(React.Children.count(children))
  return (
    <div className="wizard__content">
      {React.children.toArray(children)[activePageIndex]}
    </div>
  )
}
```

</TimeStamp>

<TimeStamp start="04:18" end="04:25">

```jsx
const ProgressBar = () => {
  const { activePageIndex, steps } = useWizardProgress()
  return (
    <div className="wizard__progress">
      Paso {activePageIndex} de {steps}
    </div>
  )
}
```

</TimeStamp>
