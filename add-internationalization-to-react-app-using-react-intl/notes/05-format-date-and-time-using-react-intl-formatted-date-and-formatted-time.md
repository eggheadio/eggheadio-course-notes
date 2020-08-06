# Format Date and Time Using react-intl FormattedDate and FormattedTime

**[📹 Video](https://egghead.io/lessons/react-format-date-and-time-using-react-intl-formatteddate-and-formattedtime)**

## Using the FormattedDate Component ⚡

In our **src/components/BookDetail.js**, we will import `FormattedDate` and `FormattedTime` components from react-intl.

### BookDetail.js
```js
import { 
    FormattedMessage,
    FormattedDate,
    FormattedTime 
} from 'react-intl' 
```

If we navigate to **src/books.json**, we can see that the `date` property is one long number
### books.json
```json
"date": 1491111687199,
```

"This is an instance of a date represented in a Unix timestamp in milliseconds."

with the newly imported `FormattedDate` component and our timestamps, we can refactor our `BookDetail` component so that the dates are formatted according to the user's language.

We'll pass the timestamp into a `Date` object, which we will then pass into a `FormattedDate` component through a `value` prop. Then, we'll set the `year`, `month`, and `day` props to `"numeric"` for now.

### BookDetail.js
```jsx
<div className="Review-meta">
    <img src={review.avatar} alt="Avatar"/>
    <p>
    <FormattedMessage id="detail.userRating" values={{name: <strong>{review.name}</strong>, rating: review.rating}}/>
    <br />
    <FormattedDate
        value={new Date(review.date)}
        year="numeric"
        month="numeric"
        day="numeric" /><br />
    </p>
</div>
```

If we now start our development server,
```bash
yarn start
```
And navigate to our localhost, we should see our dates render correctly.

![Numeric Date](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1596732367/transcript-images/05-format-date-and-time-using-react-intl-formatted-date-and-formatted-time-numeric-date.png)

To change the date format, we can change the props of the `FormattedDate` component:
### BookDetail.js
```jsx
<FormattedDate
    value={new Date(review.date)}
    year="numeric"
    month="long"
    day="numeric" /><br />
```
Navigating back to our page, we should now see our date has changed format.

![Long Month Date](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1596732367/transcript-images/05-format-date-and-time-using-react-intl-formatted-date-and-formatted-time-long-month-date.png)

For this app, we want our `year`, `month`, and `date` props to be `"2-digit"`, so we'll change that now.
### BookDetail.js
```jsx
<FormattedDate
    value={new Date(review.date)}
    year="2-digit"
    month="2-digit"
    day="2-digit" /><br />
```
![2 Digit Date](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1596732366/transcript-images/05-format-date-and-time-using-react-intl-formatted-date-and-formatted-time-2-digit-date.png)

## Using the FormattedTime Component ⚡
Our `review.time` property was a timestamp that measured down to the millisecond, so we can render all of that time information in a `FormattedTime` component.

We'll comment out our `FormattedDate` component and pass the same props into a `FormattedTime` component.

### BookDetail.js
```jsx
{/* <FormattedDate
    value={new Date(review.date)}
    year="2-digit"
    month="2-digit"
    day="2-digit" /><br /> */}
    
<FormattedTime
    value={new Date(review.date)}
    year="2-digit"
    month="2-digit"
    day="2-digit" /><br />
```
Navigating back to our page, we should see now that the displayed date also includes a formatted time.

![Formatted Time](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1596732367/transcript-images/05-format-date-and-time-using-react-intl-formatted-date-and-formatted-time-formatted-time.png)

## Resources 📖
- [FormattedDate Component - react-intl](https://formatjs.io/docs/react-intl/components/#formatteddate)
- [FormattedTime Component - react-intl](https://formatjs.io/docs/react-intl/components/#formattedtime)