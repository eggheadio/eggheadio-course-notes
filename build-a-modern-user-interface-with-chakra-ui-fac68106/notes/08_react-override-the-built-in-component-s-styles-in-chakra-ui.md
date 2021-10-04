# Override the Built-in Component's Styles in Chakra UI

[Video link](https://www.egghead.io/lessons/react-override-the-built-in-component-s-styles-in-chakra-ui?pl=build-a-modern-user-interface-with-chakra-ui-fac68106)

<TimeStamp start="00:10" end="00:25">

Continuing on how we override the default styling of our components, without using any theme extensions, we are going to use the [basic API](https://chakra-ui.com/docs/theming/component-style#styling-single-part-components) for this. 

```tsx
export default {
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
}
```

</TimeStamp>

<TimeStamp start="00:50" end="01:05">

```tsx
components: {
  Input: {
    sizes: {
      md: {
        field: {
          borderRadius: 'none',
        }
      }
    }
  },
},
```

</TimeStamp>

<TimeStamp start="01:40" end="01:50">

```tsx
variants: {
  filled: {
    field: {
      _focus: {
        borderColor: 'brand.500',
      },
    },
  },
},
```

</TimeStamp>

<TimeStamp start="03:40" end="03:50">

```tsx
Checkbox: {
  baseStyle: {
    control: {
      borderRadius: 'none',
      _focus: {
        ring: 2, 
        ringColor: 'brand.500',
      }
    }
  }
}
```

</TimeStamp>