# Render Content with Markup Using react-intl FormattedHTMLMessage

**[📹 Video](https://egghead.io/lessons/react-render-content-with-markup-using-react-intl-formattedhtmlmessage)**

## Displaying Messages with Markdown Elements ⚡

In our **src/messages.js** file, we're going to add `window` messages.

### messages.js
```js
export default {
  'en-US': {
    detail: {
      author: 'by {author}',
      toggle: 'Toggle',
      purchase: 'Purchase this book from:',
      window: '<small><em>All {numMerchants} links open in a new window.</em></small>',
      reviewsHeading: 'Reviews',
      averageRating: 'Average Rating: {avg}',
      userRating: '{name} rated it: {rating} out of 5'
    }
  },
  'es': {
    detail: {
      author: 'de {author}',
      toggle: 'Palanca',
      purchase: 'Compre este libro de:',
      window: '<small><em>Los {numMerchants} enlaces se abren en una nueva ventana.</em></small>',
      reviewsHeading: 'Comentarios',
      averageRating: 'Puntuación media: {avg}',
      userRating: '{name} clasificado: {rating} de 5'
    }
  },
  'fr': {
    detail: {
      author: 'par {author}',
      toggle:'Basculer',
      purchase: 'Achetez ce livre à partir de:',
      window: '<small><em>Les {numMerchants} liens s\'ouvrent dans une nouvelle fenêtre.</em></small>',
      reviewsHeading: 'Avis',
      averageRating: 'Note moyenne: {avg}',
      userRating: '{name} L\'a noté: {rating} sur 5'
    }
  }
}
```

As you can see, our `window` message contains markdown.

### Deprecation ⚠
As of react-intl v4, the `FormattedHTMLMessage` component has been removed. This is the component that the instructor of the course uses to render the markdown correctly.

Now, to render the markdown in our message correctly, we can use a `FormattedMessage` component and resolve the markdown tags in the `values` prop, as is done in the example below.
### BookDetail.js
```jsx
... 
<div className="BookDetail-merchants">
    {book.merchants.map((merchant) => (
        <a href={merchant.link} className="Merchant" key={merchant.name} target="_blank">
        <img src={merchant.icon} width="32" height="32" alt={merchant.name}/>
        <strong>{merchant.name}</strong>
        <p>{merchant.price}</p>
        </a>
    ))}
</div>
// New Message
<FormattedMessage id="detail.window" values={{numMerchants: book.merchants.length, small: chunks => <small>{chunks}</small>, em: chunks => <em>{chunks}</em>}} />

...
```

If we start our development server,
```bash
yarn start
```
And navigate to our localhost port, we should see our new `FormattedMessage` component displaying our message with correctly rendered markdown.

![Markdown Render](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1596732366/transcript-images/04-render-content-with-markup-using-react-intl-formatted-html-message-markdown-render.png)
## Resources 📖
- [FormattedMessage Rich Text Formatting - react-intl](https://formatjs.io/docs/react-intl/components#rich-text-formatting)