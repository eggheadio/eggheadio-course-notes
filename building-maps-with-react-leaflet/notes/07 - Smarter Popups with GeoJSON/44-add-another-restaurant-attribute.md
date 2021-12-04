# Add Another Restaurant Attribute

**[📹 Video](https://egghead.io/lessons/egghead-add-another-restaurant-attribute)**

Let's practice our GeoJSON wrangling by adding a new attribute of `vegan: true` for vegan-friendly locations.

First, let's destructure the `vegan` attribute from the `properties` object.

Then inside the HTML popup, we can add another `li` with:

```HTML
<li>
  <strong>Vegan Friendly:</strong> ${vegan ? 'Yes' : 'No'}
</li>
```
