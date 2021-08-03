# 11 - Using _redirects files on Netlify to make .netlify function URLs more user-friendly

[Video Link](https://egghead.io/lessons/netlify-using-_redirects-files-on-netlify-to-make-netlify-function-urls-more-user-friendly)


<TimeStamp start="0:01" end="0:05">

Right now the user experience of calling our functions is not great.

</TimeStamp>

<TimeStamp start="0:20" end="0:25">

That's where [Netlify Redirects](https://docs.netlify.com/routing/redirects/) can help us out

</TimeStamp>

<TimeStamp start="0:41" end="0:58">

To set up netlify redirects just create a `_redirects` file at the base of your directory. The content of the file is:

``` jsx
/opengraph /.netlify/functions/process-url 200
```

This will allow you to call your function with the url `https://<base-url>/opengraph?<query string>`

</TimeStamp>

