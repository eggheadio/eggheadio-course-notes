# Define Custom Colors and Fonts in Chakra UI

[Video link](https://www.egghead.io/lessons/react-define-custom-colors-and-fonts-in-chakra-ui?pl=build-a-modern-user-interface-with-chakra-ui-fac68106)

<TimeStamp start="00:10" end="00:25">

By default, all Chakra components inherit values from the default theme. In some scenarios, you might need to customize the theme tokens to match your design requirements. This is where [extendTheme](https://chakra-ui.com/docs/theming/customize-theme#theme-extension-withdefaultcolorscheme) comes in to play.

</TimeStamp>

<TimeStamp start="00:35" end="00:45">

```tsx
import { extendTheme} from '@chakra-ui/rect';

const theme = extendTheme({});

export default theme;
```

</TimeStamp>

<TimeStamp start="01:05" end="01:15">

```tsx
import theme from '../src/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return ( 
    <ChakraProvider theme={theme}>
      <Component {...pageProps}>
    </ChakraProvider>
  )
}
```

</TimeStamp>

<TimeStamp start="01:40" end="01:50">

```tsx
const theme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Inter',
  }
});
```

</TimeStamp>

<TimeStamp start="02:30" end="02:43">

```tsx
import { ..., theme as base } from '@chakra-ui/rect';

const theme = extendTheme({
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  }
});
```

</TimeStamp>

<TimeStamp start="03:10" end="03:15">

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@700&display=swap');
```

</TimeStamp>

<TimeStamp start="03:30" end="03:40">

```tsx
colors: {
  brand: {
    50: '#f5fee5',
    100: '#e1fbb2',
    200: '#cdf781',
    300: '#b8ee56',
    400: '#a2e032',
    500: '#8ac919',
    600: '#71ab09',
    700: '#578602',
    800: '#3c5e00',
    900: '#203300',
  },
},
```

</TimeStamp>

<TimeStamp start="03:50" end="03:55">

```tsx
<Button colorScheme="brand" size="lg" w="full">
  Place Order
</Button>
```

</TimeStamp>