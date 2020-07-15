 # 11. Define Landmark Regions of a web page using ARIA roles

**[📹 Video](https://egghead.io/lessons/react-define-landmark-regions-of-a-web-page-using-aria-roles)**


Most common landmark regions:

1. Header:

```HTML
<div role='banner'></div>
```

2. Buttons responsible for navigation should be wrapped in a `<div>` with its own role:

```HTML
<div role="navigation">
  <button></button>
</div>
```

3. Main content:

```HTML
<div role="main"></div>
```

4. Footer:
```HTML
<div role="contentinfo"></div>
```
