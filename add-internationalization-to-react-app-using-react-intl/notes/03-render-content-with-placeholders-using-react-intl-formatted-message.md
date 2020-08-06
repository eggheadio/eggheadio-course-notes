# Render Content with Placeholders using react-intl FormattedMessage

**[📹 Video](https://egghead.io/lessons/react-render-content-with-placeholders-using-react-intl-formattedmessage)**

## Using Placeholders in our Messages ⚡
We'll start by adding some new messages to our **src/messages.js** file.
### messages.js
```js
export default {
  'en-US': {
    detail: {
      author: 'by {author}',
      toggle: 'Toggle',
      purchase: 'Purchase this book from:',
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
      reviewsHeading: 'Avis',
      averageRating: 'Note moyenne: {avg}',
      userRating: '{name} L\'a noté: {rating} sur 5'
    }
  }
}
```
Above, we've assigned strings containing placeholders to our `averageRating`, `author`, and `userRating` properties. We can provide our components with content to replace these placeholders when they're rendered.

We can now navigate to **src/components/BookDetail.js** and replace our `book.author` heading with a `FormattedMessage` component in which we'll pass two props.
- `id="detail.author"` to specify the `author` message, 
- `values={{author: book.author}}` so that the `{author}` placeholder is rendered as `book.author`.
### BookDetail.js
```js
...
<h3>
    <FormattedMessage id="detail.author" values={{author: book.author}} />
</h3>
...
```
When we save our changes and start our development server,
```bash
yarn start
```
We should be able to navigate to a book in our development server and see that the author heading is rendered in the language set by our browser, and the `{author}` placeholder is substituted by `book.author`.

![Author Translate](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1596732365/transcript-images/03-render-content-with-placeholders-using-react-intl-formatted-message-author-translate.png)

Next, we'll replace our "Average Rating" header.

In order to improve readability, we'll start by creating a variable that evaluates to the average rating of the book, then we'll plug that into the header.

```js
...
const BookDetail = ({match}) => {
  const book = books.find(book => book.id === parseInt(match.params.bookId, 10));
  const sortedReviews = sortBy(book.reviews, 'date').reverse();
  // Average Rating Variable
  const avgRating = round(meanBy(book.reviews, (r) => r.rating), 2)

  ...
```

Now we'll replace the former header with a `<FormattedMessage />` that displays `detail.averageRating` and evaluates the `{avg}` placeholder to our `avgRating` variable.

### BookDetail.js
```js
...
<h3>
    <FormattedMessage id="detail.averageRating" values={{avg: avgRating}} /> ({book.reviews.length} Reviews)
</h3>

...
```

We should now be able to navigate to our development server and see our Average Rating header display our `detail.averageRating` message with `avgRating` substituting the placeholder.
![Average Rating Translation](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1596732366/transcript-images/03-render-content-with-placeholders-using-react-intl-formatted-message-average-rating-translate.png)

The final header that we'll be refactoring with a `<FormattedMessage />` component is the reviewer's name and rating. 

Into `<FormattedMessage />`, we'll pass in two props.

- `id="detail.userRating"` to specify the `userRating` message, 

For our second prop: if you look at the `BookDetail` user review header, you'll see that the name of the reviewer is wrapped in a `<strong>` tag. We can actually pass markdown into our `values` prop, and react-intl will render it correctly. So for our placeholders to be rendered as we want, our second prop should look like `values={{name: <strong>{review.name}</strong>, rating: review.rating}}/>`.

### BookDetail.js
```jsx
<p>
    <FormattedMessage id="detail.userRating" values={{name: <strong>{review.name}</strong>, rating: review.rating}}/>
    <br />
    {new Date(review.date).toLocaleDateString()}
</p>
```

If we head to our development server, we should see our placeholders have rendered correctly. This includes both the rendering of the reviewer's name in bold and the rating that the reviewer gave. Furthermore, our message should change depending on the language of the user's browser.

![Review Translate](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1596732366/transcript-images/03-render-content-with-placeholders-using-react-intl-formatted-message-review-translate.png)

## Resources 📖
- [FormattedMessage - react-intl](https://formatjs.io/docs/react-intl/components/#formattedmessage)