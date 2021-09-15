# Build a Wizard Component using useState React Hooks

[Video link](https://www.egghead.io/lessons/react-build-a-wizard-component-using-usestate-react-hooks?pl=build-advanced-components-with-react-hooks-810906cc)

<TimeStamp start="00:05" end="00:10">

```jsx
const Wizard = ({ children }) => {
  return (
    <div className="wizard">
      <div className="Wizard__content">
        {children}
      </div>
      <div className="wizard__buttons">
        <button
          type="button"
          className="wizard__buttons-left"
        >
          Atras
        </button>
        <button
          type="button"
          className="wizard__buttons-right"
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}
```

</TimeStamp>

<TimeStamp start="00:20" end="00:25">

```jsx
const Page1 = () => <h1>Page 1</h1>
const Page2 = () => <h1>Page 2</h1>
const Page3 = () => <h1>Page 3</h1>
```

</TimeStamp>

<TimeStamp start="00:35" end="00:40">

```jsx
export default function App() {
  return (
    <Wizard>
      <Page1 />
      <Page2 />
      <Page3 />
    </Wizard>
  )
}
```

</TimeStamp>

<TimeStamp start="01:00" end="01:10">

This manipulates our children object, transforming it into an array of elements. 

```jsx
const pages = React.Children.toArray(children)
```

</TimeStamp>

<TimeStamp start="01:12" end="01:20">

This will display what the current page is.

```jsx
const currentPage = pages[0]
...
<div className="wizard">
  <div className="Wizard__content">
    {currentPage}
  </div>
</div>
```

</TimeStamp>

<TimeStamp start="01:45" end="01:50">

[useState](https://reactjs.org/docs/hooks-reference.html#usestate) returns a stateful value, and a function to update it.

```jsx
const [activePage, setActivePage] = React.useState(0);
```


</TimeStamp>

<TimeStamp start="01:56" end="01:59">

```jsx
const currentPage = pages[activePage]
```

</TimeStamp>

<TimeStamp start="02:20" end="02:30">

Write a ternary conditional to determine if the button is shown.

```jsx
{ activePage > 0 ? (
  <button
    type="button"
    className="wizard__buttons-left"
  >
    Atras
  </button>
): null }
{ activePage < pages.length + 1 ? (
  <button
    type="button"
    className="wizard__buttons-right"
  >
    Siguiente
  </button>
): null }
```

</TimeStamp>

<TimeStamp start="02:45" end="02:55">

```jsx
const onPrevClick = () => {
  setActivePage(index => index - 1)
}
const onNextClick = () => {
  setActivePage(index => index + 1)
}
```

</TimeStamp>

<TimeStamp start="00:00" end="00:00">

```jsx
<button
  type="button"
  className="wizard__buttons-left"
  onClick={onPrevClick}
>
<button
  type="button"
  className="wizard__buttons-right"
  onClick={onNextClick}
>
```

</TimeStamp>