# Add CSS-in-JS styles with emotion to a Next.js app

[Video Link](https://egghead.io/lessons/next-js-add-css-in-js-styles-with-emotion-to-a-next-js-app?pl=build-a-blog-with-next-js-typescript-emotion-and-netlify-adcc)

- to add emotion run:

```terminal
yarn add @emotion/core @emotion/styled
```

- Next we're going to import styled components, and add a few styled components

```js
import styled from '@emotion/styled';

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BlogTitle = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;
```

- 📝 If you are using a newer version of the `create-next-app` template (I was on 9.5.3) then you can delete the `Home.module.css` file and its associated import.
