 # 27. Appropriately Set the Focus on Each Page Load of a Web Application

**[📹 Video](https://egghead.io/lessons/react-appropriately-set-the-focus-on-each-page-load-of-a-web-application)**


* Focus refers to the control on the computer screen that receives input from the keyboard and from the clipboard when you paste (like `input` elements).

* Generally focus is given only to interactive controls like buttons, tabs, dropdowns, header links or anything that the user might provide input to.

* To make non-interactive elements interactive (focusable), you can add `tabIndex={0}` attribute to it.

* A value of `tabIndex={-1}` will remove the element from the default navigation flow - be careful with this one!