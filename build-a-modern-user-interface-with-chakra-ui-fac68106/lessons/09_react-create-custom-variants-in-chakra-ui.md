# Create Custom Variants in Chakra UI

[Video link](https://www.egghead.io/lessons/react-create-custom-variants-in-chakra-ui?pl=build-a-modern-user-interface-with-chakra-ui-fac68106)

<TimeStamp start="00:10" end="00:20">

Just like we edited the styling of our components in the last two lessons, we are going to do the same to our variants to create our own custom variants. Just make sure to use the `variant` prop on your components in your details.tsx file and set it to what you named your variant, in our case `primary`.

</TimeStamp>

<TimeStamp start="00:30" end="00:35">

```tsx
Button: {
  variants: {
    primary: {
      rounded: 'none',
    },
  },
},
```

</TimeStamp>

<TimeStamp start="02:40" end="02:50">

```tsx
Button: {
  variants: {
    primary: (props) => ({
      rounded: 'none',
      ...brandRing,
      backgroundColor: mode('brand.500', 'brand.200')(props),
    }),
  },
},
```

</TimeStamp>

<TimeStamp start="04:05" end="04:15">

```tsx
Button: {
  variants: {
    primary: (props) => ({
      rounded: 'none',
      ...brandRing,
      backgroundColor: mode('brand.500', 'brand.200')(props),

      _hover: {
        backgroundColor: mode('brand.600', 'brand.300')(props),
      },

      _active: {
        backgroundColor: mode('brand.700', 'brand.400')(props),
      },
    }),
  },
},
```

</TimeStamp>

<TimeStamp start="04:30" end="04:40">

```tsx
Button: {
  variants: {
    primary: (props) => ({
      rounded: 'none',
      ...brandRing,
      color: mode('white', 'gray.800')(props),
      backgroundColor: mode('brand.500', 'brand.200')(props),

      _hover: {
        backgroundColor: mode('brand.600', 'brand.300')(props),
      },

      _active: {
        backgroundColor: mode('brand.700', 'brand.400')(props),
      },
    }),
  },
},
```

</TimeStamp>