# Style Next.js Applications using CSS-in-JS and styled-jsx

We actually have a couple of different ways to style our components in Next.js.

## Using CSS-in-JS

The first styling technique that we're going to talk about is CSS-in-JS, and it is real simple to get started with. All we have to do is add a `style` prop to the element that we want to style.

```js
<a
  style={{
    textDecoration: "none",
    fontSize: "18px",
    color: "#fff",
  }}
>
  Click to view Post!
</a>
```

There are a few things to note here:

1. Take note of the double curly brackets used with the `style` prop.
2. Unlike normal CSS properties, the properties that are defined within a style tag are comma separated, rather than the traditional semi colon at the end of the line.
3. There are no hyphens used in the property names. Instead, names that would normally be hyphenated use camel case. In the example above, `text-decoration` becomes `textDecoration` inside of a style prop.

## Styled JSX

The other option that we have is to used styled-jsx. This is achieved by using a set of `<style>` tags inside of our component.

```js
<style jsx>
  {`
    .post-link {
      text-decoration: none;
      color: #fff;
      font-size: 18px;
    }
  `}
</style>
```

Important items to take note of here:

1. We want to make sure that we include `jsx` attribute on the `<style>` tag.
2. We're using a set of brackets and template strings, and including our styles within.
3. Inside of the style tags, we are able to use traditional CSS names and formatting.
4. When using Styled JSX, Next puts the styles in the `<head>` of the document, instead of inline like the CSS-in-JS approach does.
