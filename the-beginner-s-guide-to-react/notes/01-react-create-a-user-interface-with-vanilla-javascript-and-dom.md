# 01. Create a User Interface with Vanilla JavaScript and DOM

#### [📹 Video](https://egghead.io/lessons/react-v2-01-create-a-user-interface-with-vanilla-javascript-and-dom?pl=a-beginners-guide-to-react-v2-6c4d)

#### [💻 CodeSandbox](https://codesandbox.io/s/github/kentcdodds/beginners-guide-to-react/tree/codesandbox/01-document-create-element?from-embed)

## Notes

<TimeStamp start="0:00" end="0:10">

  To start building a UI with JavaScript you need a `root` element to append the elements you create with the `document` api to.

</TimeStamp>

<TimeStamp start="0:21" end="0:29">
  
  Get access to the `root` div using the [document API](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
  
</TimeStamp>

<TimeStamp start="0:30" end="0:36">
  
  Use `.appendChild()` to append an element to another
  
</TimeStamp>

<TimeStamp start="0:43" end="0:52">
  
  In addition to referencing elements we can also [create elements with the document API](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
  
~~~html
  
<body>
  <div id="root"></div>
  <script type="text/javascript">
    const rootElement = document.getElementById('root');
    const element = document.createElement('div');
    element.textContent = 'Hello World';
    element.className = 'container';
    rootElement.appendChild(element);
  </script>
</body>
  
~~~
  
</TimeStamp>

## Additional resource

- [Egghead - Select a DOM Element with document.getElementById](https://egghead.io/lessons/javascript-select-a-dom-element-with-document-getelementbyid)
- [MDN - `Element` Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element)
