# Build a 2-Column Form with the SimpleGrid, FormControl, and Input Component in Chakra UI

[Video link](https://www.egghead.io/lessons/react-build-a-2-column-form-with-the-simplegrid-formcontrol-and-input-component-in-chakra-ui?pl=build-a-modern-user-interface-with-chakra-ui-fac68106)

<TimeStamp start="00:45" end="00:55">

[Headings](https://chakra-ui.com/docs/typography/heading) are used for rendering headlines. It renders an <h2> tag by default.

</TimeStamp>

<TimeStamp start="01:00" end="01:15">

```tsx
import { VStack, Heading } from '@chakra-ui/react';

const Details = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <Heading size="2xl">Your details</Heading>
    </VStack>
  )
}
```

</TimeStamp>

<TimeStamp start="01:20" end="01:30">

[Text](https://chakra-ui.com/docs/typography/text) component is the used to render text and paragraphs within an interface. It renders a <p> tag by default

</TimeStamp>

<TimeStamp start="01:35" end="01:40">

```tsx
import { VStack, Heading, Text } from '@chakra-ui/react';

<Heading size="2xl">Your details</Heading>
<Text>If you already have an account, click here to log in.</Text>
```

</TimeStamp>

<TimeStamp start="01:50" end="02:05">

Overriding a parent's styling is quite easy in Chakra UI. To override the parent's `spacing`, we can wrap our `Heading` and our `Text` in another `VStack` and set `spacing={3}`. In existing react components, trying to override them may force you to restyle your parent components along with their internals. 

</TimeStamp>

<TimeStamp start="02:10" end="02:15">

```tsx
<VStack spacing={3} alignItems="flex-start">
  <Heading size="2xl">Your details</Heading>
  <Text>If you already have an account, click here to log in.</Text>
</VStack>
```

</TimeStamp>

<TimeStamp start="03:05" end="03:20">

[Grid](https://chakra-ui.com/docs/layout/grid) is a primitive useful for grid layouts. Grid is `Box` with `display: grid` and it comes with helpful style shorthand. It renders a `div` element.

```tsx
import { VStack, Heading, Text, SimpleGrid, GridItem } from '@chakra-ui/react';

<SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">

</SimpleGrid>
```

</TimeStamp>

<TimeStamp start="03:55" end="04:10">

[FormControl](https://chakra-ui.com/docs/form/form-control) provides context such as `isInvalid`, `isDisabled`, and `isRequired` to form elements. Since our `SimpleGrid` is two columns, we can make one of our inputs only take up one of those columns using `colSpan={1}`.

```tsx
import { ..., FormControl, FormLabel, Input } from '@chakra-ui/react';

<SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
  <GridItem colSpan={1}>
    <FormControl>
      <FormLabel>First Name</FormLabel>
      <Input placeholder="John"/>
    </FormControl>
  </GridItem>
</SimpleGrid>
```

</TimeStamp>

<TimeStamp start="04:20" end="04:30">

```tsx
<GridItem colSpan={1}>
  <FormControl>
    <FormLabel>Last Name</FormLabel>
    <Input placeholder="Doe"/>
  </FormControl>
</GridItem>
```

</TimeStamp>

<TimeStamp start="04:45" end="04:50">

```tsx
<GridItem colSpan={2}>
  <FormControl>
    <FormLabel>Address</FormLabel>
    <Input placeholder="Blvd. Broken Dreams 21"/>
  </FormControl>
</GridItem>
```

</TimeStamp>

<TimeStamp start="05:10" end="05:15">

```tsx
<GridItem colSpan={1}>
  <FormControl>
    <FormLabel>City</FormLabel>
    <Input placeholder="San Francisco"/>
  </FormControl>
</GridItem>
```

</TimeStamp>

<TimeStamp start="05:40" end="06:00">

[Select](https://chakra-ui.com/docs/form/select) component is a component that allows users pick a value from predefined options. Ideally, it should be used when there are more than 5 options, otherwise you might consider using a radio group instead.

</TimeStamp>

<TimeStamp start="06:05" end="06:10">

```tsx
import { ..., Select } from '@chakra-ui/react';

<GridItem colSpan={1}>
  <FormControl>
    <FormLabel>City</FormLabel>
    <Select>
      <option value="usa">United States of America</option>
      <option value="uae">United Arab Emirates</option>
      <option value="nmk">North Macedonia</option>
      <option value="de">Germany</option>
    </Select>
  </FormControl>
</GridItem>
```

</TimeStamp>

<TimeStamp start="06:30" end="06:40">

The [Checkbox](https://chakra-ui.com/docs/form/checkbox) component is used in forms when a user needs to select multiple values from several options.

</TimeStamp>

<TimeStamp start="06:45" end="06:50">

```tsx
import { ..., Checkbox, Button } from '@chakra-ui/react';

<GridItem colSpan={2}>
  <CheckBox defaultChecked>Ship to billing address.</CheckBox>
</GridItem>
```

</TimeStamp>


<TimeStamp start="07:15" end="07:20">

```tsx
<GridItem colSpan={2}>
  <Button size="lb" w="full">
    Place Order
  </Button>
</GridItem>
```

</TimeStamp>