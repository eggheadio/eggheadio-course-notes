# Add a Netlify Form to a site to gather user's feedback

[Video Link](https://egghead.io/lessons/next-js-add-a-netlify-form-to-a-site-to-gather-user-s-feedback?pl=build-a-blog-with-next-js-typescript-emotion-and-netlify-adcc)

-   Because we are deploying with Netlify we can easily deploy a form to collect user Feedback.
-   We're creating a `FeedbackForm` component

```js
function FeedbackForm() {
  return (
    <form name='feedback' method='post' data-netlify='true' action='/thankyou'>
      <input type='hidden' name='form-name' value='feedback' />
      <p>
        <label>
          Your name:
          <br />
          <input type='text' name='name' />
        </label>
      </p>
      <p>
        <label>
          Feedback:
          <br />
          <textarea name='message' />
        </label>
      </p>
      <p>
        <button type='submit'>Send</button>
      </p>
    </form>
  );
}

export { FeedbackForm };
```

-   Important thing to note, the `data-netlify='true'` helps Netlify's bots know to use this form. 📜 [Netlify Form Documentation](https://docs.netlify.com/forms/setup/)
-   Because we're using a static site we have to include a hidden input 📜 [Netlify Blog on Forms with Static Site Generators](https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/?_ga=2.233132382.1976009725.1599930688-2087236484.1599165952#form-handling-with-static-site-generators)
-   The `action` property will take the user to that page after they press the button. Create a page at `/thankyou` to customize the thank you message.
-   Netlify collects the feedback from these forms and you can export the data as a CSV
-   💡How could you adjust this form to collect emails for your newsletter?


