# Build a Layout with the Container, Flex and VStack Component in Chakra UI

[Video link](https://www.egghead.io/lessons/react-build-a-layout-with-the-container-flex-and-vstack-component-in-chakra-ui?pl=build-a-modern-user-interface-with-chakra-ui-fac68106)

<TimeStamp start="00:05" end="00:15">

[Figma](https://www.figma.com/) is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows. [Here are the files](https://www.figma.com/file/vOcnzw9yT05grSCD1ji7ax/egghead.io---Introduction-to-Chakra-UI?node-id=802%3A9203) we are going to be working with.

</TimeStamp>

<TimeStamp start="00:35" end="00:45">

[Containers](https://chakra-ui.com/docs/layout/container) are used to constrain a content's width to the current breakpoint, while keeping it fluid.

```tsx

import { Container } from '@chakra-ui/react';

```

</TimeStamp>

<TimeStamp start="00:55" end="01:05">

```tsx
const IndexPage = () => (
  <Container>

  </Container>
)
```

</TimeStamp>

<TimeStamp start="01:20" end="01:30">

[Style props](https://chakra-ui.com/docs/features/style-props) are a way to alter the style of a component by simply passing props to it.

</TimeStamp>

<TimeStamp start="01:50" end="02:00">

The [sizes](https://chakra-ui.com/docs/theming/theme#sizes) key allows you to customize the global sizing of components you build for your project.

</TimeStamp>

<TimeStamp start="02:05" end="02:15">

```tsx
const IndexPage = () => (
  <Container maxWidth="container.xl" padding={0}>

  </Container>
)
```

</TimeStamp>

<TimeStamp start="03:05" end="03:12">

[Flex](https://chakra-ui.com/docs/layout/flex) is Box with `display: flex` and comes with helpful style shorthand. It renders a `div` element.

</TimeStamp>

<TimeStamp start="03:25" end="03:35">

```tsx
import { Container, Flex } from '@chakra-ui/react'; 

const IndexPage = () => (
  <Container maxWidth="container.xl" padding={0}>
    <Flex h="100vh" py={20}>

    </Flex>
  </Container>
)
```

</TimeStamp>

<TimeStamp start="04:15" end="04:25">

[VStack](https://chakra-ui.com/docs/layout/stack) is used to add spacing between elements in vertical direction only, and centers them.


</TimeStamp>

<TimeStamp start="04:40" end="04:50">

```tsx
import { Container, Flex, VStack } from '@chakra-ui/react'; 

const IndexPage = () => (
  <Container maxWidth="container.xl" padding={0}>
    <Flex h="100vh" py={20}>
      <VStack
        w="full"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
      ></VStack>
    </Flex>
  </Container>
)
```

</TimeStamp>

<TimeStamp start="05:00" end="05:10">

```tsx
const IndexPage = () => (
  <Container maxWidth="container.xl" padding={0}>
    <Flex h="100vh" py={20}>
      <VStack
        w="full"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
      ></VStack>
      <VStack
        w="full"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
        bg="gray.50"
      ></VStack>
    </Flex>
  </Container>
)
```

</TimeStamp>