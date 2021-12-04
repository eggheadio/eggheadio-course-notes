# Implement Responsive Design in Chakra UI

[Video link](https://www.egghead.io/lessons/react-implement-responsive-design-in-chakra-ui?pl=build-a-modern-user-interface-with-chakra-ui-fac68106)

<TimeStamp start="00:25" end="00:40">

All style props accept arrays as values for mobile-first responsive styles. This is known as [The Array syntax](https://chakra-ui.com/docs/features/responsive-styles#the-array-syntax). 

</TimeStamp>

<TimeStamp start="00:50" end="01:00">

This means that in our array, we get 0 from 0 to 479 pixels, 10 from 480 pixels until 767 pixels, and then 20 from 768 pixels and up. 

```tsx
<Flex h="100vh" py={[0, 10, 20]}>
  <Details />
  <Cart />
</Flex>
```

</TimeStamp>

<TimeStamp start="02:05" end="02:20">

By using [Responsive Direction](https://chakra-ui.com/docs/layout/stack#responsive-direction), we can pass responsive values to our `Flex` component to change the stack direction and/or the spacing between our elements. 

</TimeStamp>

<TimeStamp start="02:30" end="02:40">

```tsx
<Flex 
  h="100vh" 
  py={[0, 10, 20]}
  direction={{ base: 'column-reverse', md: 'row' }}
>
  <Details />
  <Cart />
</Flex>
```

</TimeStamp>

<TimeStamp start="03:30" end="03:40">

```tsx
<Flex 
  h={{ base: 'auto', md: '100vh' }} 
  py={[0, 10, 20]}
  direction={{ base: 'column-reverse', md: 'row' }}
>
  <Details />
  <Cart />
</Flex>
```

</TimeStamp>

<TimeStamp start="04:00" end="04:15">

The [useBreakpointValue](https://chakra-ui.com/docs/hooks/use-breakpoint-value) is a custom hook which returns the value for the current breakpoint from the provided responsive values object. This hook also responds to the window resizing and returning the appropriate value for the new window size.

</TimeStamp>

<TimeStamp start="04:30" end="00:40">

```tsx
import { ..., useBreakpointValue } from '@chakra-ui/react';

const colSpan = useBreakpointValue({ base: 2, md: 1 });
```

</TimeStamp>

<TimeStamp start="04:45" end="04:58">

```tsx
<GridItem colSpan={1}>
// All of them will now be....
<GridItem colSpan={colSpan}>
```

</TimeStamp>
