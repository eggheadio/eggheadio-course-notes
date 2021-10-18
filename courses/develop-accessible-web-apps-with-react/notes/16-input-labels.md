 # 16. Ensure Form Controls have Accessible Labels

**[📹 Video](https://egghead.io/lessons/eslint-ensure-form-controls-have-accessible-labels)**


* It's not enough to just add a `<label>` element next to the `<input>` element, you have to make sure to associate the two properly as well.

This can be done in two ways:

1. Wrap the `input` with the `label`:

```HTML
<label>
  Name: <input type="text" name="user_name">
</label
```

2. Connect them via `for` (or `htmlFor` in case of JSX) attribute and `id`:
```HTML
<label htmlFor="name">Name:</label>
<input type="text" id="name" name="user_name">
```

* 🤔 "If there is no label, or if the form control is neither implicitly or explicitly associated with a label, and a screen reader will read out something like 'Edit text blank', which isn't very helpful at all." More on [MDN docs](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form) 
