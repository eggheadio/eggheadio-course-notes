# 16 - Building Collapsible Categories with Rotating Arrow Icons
## Notes

<TimeStamp start="2:07" end="2:10">

```jsx
function toggleCategory(categoryId) {
    setClosedCategories((closedCategories) =>
      closedCategories.includes(categoryId)
        ? closedCategories.filter((id) => id !== categoryId)
        : [...closedCategories, categoryId]
    );
  }
```

</TimeStamp>

