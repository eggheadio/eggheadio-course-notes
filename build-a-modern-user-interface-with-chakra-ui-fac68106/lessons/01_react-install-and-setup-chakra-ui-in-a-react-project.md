# Install and Setup Chakra UI in a React Project

[Video link](https://www.egghead.io/lessons/react-install-and-setup-chakra-ui-in-a-react-project?pl=build-a-modern-user-interface-with-chakra-ui-fac68106)

<TimeStamp start="00:05" end="00:10">

```bash
npx create-next-app --ts
# or
yarn create next-app --typescript
```

</TimeStamp>

<TimeStamp start="00:30" end="00:35">

```bash
yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
```

</TimeStamp>

<TimeStamp start="00:50" end="01:00">

[AppProps](https://nextjs.org/docs/basic-features/typescript#custom-app) is a type that is given to us by Next.js and Typescript. 

```tsx
import { AppProps } from 'next/app';

const App = () => {

};

export default App;
```

</TimeStamp>

<TimeStamp start="01:10" end="01:20">

```tsx
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
};
```

</TimeStamp>

<TimeStamp start="01:35" end="01:45">

```tsx
import { ChakraProvider } from '@chakra-ui/react';

const App = ({ Component, pageProps }: AppProps) => {
  return 
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
};
```

</TimeStamp>
