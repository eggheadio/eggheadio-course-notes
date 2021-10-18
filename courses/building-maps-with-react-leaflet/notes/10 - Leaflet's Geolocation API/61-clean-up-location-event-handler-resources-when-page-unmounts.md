# Clean up Location Event handler Resources when Page Unmounts

**[📹 Video](https://egghead.io/lessons/egghead-clean-up-location-event-handler-resources-when-page-unmounts)**

Clean up time! 🧹

Inside the `locationfound` event handler add:

```js
return () => {
  map.off("locationfound", handleOnLocationFound);
};
```

**Aaaaaaaaaaaaaaaaaaaaaand, you did it! Course complete 🎉🎆🍾🎊💃**
