# Use Theme Extensions in Chakra UI

[Video link](https://www.egghead.io/lessons/react-use-theme-extensions-in-chakra-ui?pl=build-a-modern-user-interface-with-chakra-ui-fac68106)

<TimeStamp start="00:10" end="00:25">

[withDefaultColorScheme](https://chakra-ui.com/docs/theming/customize-theme#theme-extension-withdefaultcolorscheme) does exactly what is in the name, sets a default color scheme to all of your components. It takes an object where you can set your `colorScheme` to a color, and you can set it to specifically focus on certain components such as `Button` or `Badge`. 

</TimeStamp>

<TimeStamp start="01:30" end="01:45">

Most components in Chakra UI have default styling. [Variants](https://chakra-ui.com/docs/theming/component-style#base-styles-and-modifier-styles) are one way we can override those default settings and set certain components to have a different visual styles. [withDefaultVariant](https://chakra-ui.com/docs/theming/customize-theme#theme-extension-withdefaultvariant) is how we handle our variants. 

</TimeStamp>

<TimeStamp start="01:50" end="02:00">

```tsx
withDefaultColorScheme({
  colorScheme: 'brand',
  components: ['Checkbox'],
})
withDefaultVariant({
  variant: 'filled',
  components: ['Input', 'Select'],
})
```

</TimeStamp>