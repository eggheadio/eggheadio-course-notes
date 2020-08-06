# Format Numbers with Separators and Currency Symbols using react-intl FormattedNumber

**[📹 Video](https://egghead.io/lessons/react-format-numbers-with-separators-and-currency-symbols-using-react-intl-formattednumber)**

## Using the FormattedNumber Component ⚡
We'll start by importing `FormattedNumber` from react-intl in **src/components/BookDetail.js**

### BookDetail.js
```jsx
import { 
  FormattedMessage,
  FormattedDate,
  FormattedTime,
  FormattedRelativeTime,
  FormattedNumber
} from 'react-intl' 
```

In this lesson, the instructor has gone ahead and changed the **books.json** file so that the `price` key of each book is an object containing a price for each supported locale. Therefore, we must also change our **src/books.json** to match the instructor's. 

[books.json](https://github.com/damonbauer/egghead-bookshelf/blob/master/src/books.json) - time to paste a lot again. 

Now, in our `BookDetail` component, we're going to use the same function to grab the user's locale that we used in our **src/index.js**.

### BookDetail.js
```jsx
const BookDetail = ({match}) => {
  const book = books.find(book => book.id === parseInt(match.params.bookId, 10));
  const sortedReviews = sortBy(book.reviews, 'date').reverse();
  const avgRating = round(meanBy(book.reviews, (r) => r.rating), 2)

  let locale = (navigator.languages && navigator.languages[0])
             || navigator.language
             || navigator.userLanguage
             || 'en-US';
...
```
We can now get rid of the `merchant.price` text in this component and replace it with a `FormattedNumber` component. Here we're going to pass in a `value` prop and provide it with `merchant.price[locale]` in order to display the correct price based on the user locale.

```jsx
...

<p>
  <FormattedNumber value={merchant.price[locale]} />
</p>

...
```

We can also pass in a `style` prop with value `currency` and a `currencyDisplay` prop with value `symbol` to display the correct currency symbol on our page. Finally we'll pass in a `currency` prop and have it conditionally be provided `'USD'` if `locale` is `'en-US'`, or `'EUR'` otherwise.

```jsx
<FormattedNumber
  value={merchant.price[intl.locale]}
  style="currency"
  currencyDisplay="symbol" 
  currency={intl.locale === 'en-US' ? 'USD' : 'EUR'}
/>
```

We can start our development server,
```bash
yarn start
```
And navigate to the localhost port to see that our price is displayed with the correct currency symbol for the locale.

![Currency](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1596732368/transcript-images/07-format-numbers-with-separators-and-currency-symbols-using-react-intl-formatted-number-currency.png)

## Resources 📖
- [FormattedNumber - react-intl](https://formatjs.io/docs/react-intl/components/#formattednumber)
