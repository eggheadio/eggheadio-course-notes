# Create a Dark Mode Switcher in Chakra UI

[Video link](https://www.egghead.io/lessons/react-create-a-dark-mode-switcher-in-chakra-ui?pl=build-a-modern-user-interface-with-chakra-ui-fac68106)

<TimeStamp start="0:30" end="00:40">

[useColorMode](https://chakra-ui.com/docs/features/color-mode#usecolormode) is a React hook that gives you access to the current color mode, and a function to toggle the color mode.

</TimeStamp>

<TimeStamp start="01:00" end="01:12">

```tsx
const Cart = () => {
  const { toggleColorMode } = useColorMode();
  ...
  <Button onClick={toggleColorMode} variant="link" colorScheme="black">
    try changing the theme.
  </Button>
}
```

</TimeStamp>

<TimeStamp start="01:35" end="01:45">

[useColorModeValue](https://chakra-ui.com/docs/features/color-mode#usecolormodevalue) is a React hook used to change any value or style based on the color mode. It takes 2 arguments: the value in light mode, and the value in dark mode.

</TimeStamp>

<TimeStamp start="01:50" end="02:00">

```tsx
const bgColor = useColorModeValue("gray.50", "whiteAlpha.50")

<VStack
  w="full"
  h="full"
  p={10}
  spacing={6}
  align="Flex-start"
  bg={bgColor}
>
```

</TimeStamp>

<TimeStamp start="02:45" end="02:55">

```tsx
const secondaryTextColor = useColorModeValue("gray.600", "gray.400")

<Text color="gray.600"> 
// turns into
<Text color={secondaryTextColor}>
```

</TimeStamp>
