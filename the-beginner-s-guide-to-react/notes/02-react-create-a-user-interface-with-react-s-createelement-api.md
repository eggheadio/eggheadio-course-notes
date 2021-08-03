# 02. Create a User Interface with React’s createElement API

#### [📹 Video](https://egghead.io/lessons/react-v2-02-create-a-user-interface-with-react-s-createelement-api?pl=a-beginners-guide-to-react-v2-6c4d)

#### [💻 CodeSandbox](https://codesandbox.io/s/github/kentcdodds/beginners-guide-to-react/tree/codesandbox/02-react-create-element?from-embed)

## Notes

<TimeStamp start="0:28" end="0:31">
  
Add these scripts to get React on to the page. 

```html
<script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
```  
  
</TimeStamp>

<TimeStamp start="0:33" end="0:42">
  
  Hand React elements off to `react-dom` so it can handle converting them into DOM elements and rendering them to the page.
  
</TimeStamp>

<TimeStamp start="0:46" end="1:00">
  
If you’ve ever learned or used React before, you’re probably more familiar with JSX than React’s `createElement` API, but it’s important to understand the `createElement` API first so you understand the magic.
  
</TimeStamp>

<TimeStamp start="1:17" end="1:30">
    
The `React.createElement` API is as simple as the element that you want to create. Here we have a `<div>`, and then an object that has all of the props that you want to have applied.
  
</TimeStamp>

<TimeStamp start="2:47" end="3:05">
    
Just as a convenience, in `React.createElement` all arguments after the props object are considered children.
  
</TimeStamp>

## Additional resource

- [React Top-Level API](https://reactjs.org/docs/react-api.html)
- [React Without JSX](https://reactjs.org/docs/react-without-jsx.html)
