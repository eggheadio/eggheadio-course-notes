# 11 - Using _redirects files on Netlify to make .netlify function URLs more user-friendly

[Video Link](https://egghead.io/lessons/netlify-using-_redirects-files-on-netlify-to-make-netlify-function-urls-more-user-friendly)

- Right now the user experience of calling our functions is not great.
- That's where [Netlify Redirects](https://docs.netlify.com/routing/redirects/) can help us out
- To set up netlify redirects just create a `_redirects` file at the base of your directory. The content of the file is:

```
/opengraph /.netlify/functions/process-url 200
```

This will allow you to call your function with the url `https://<base-url>/opengraph?<query string>`
