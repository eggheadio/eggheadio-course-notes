 # 22. Define Images with Appropriate Text Alternatives

**[📹 Video](https://egghead.io/lessons/eslint-define-images-with-appropriate-text-alternatives)**


* Always strive to provide descriptive and meaningful `alt` attributes. 👍

* A good way to test whether your alt text is descriptive enough is to prevent the image from loading. Does the remaining `alt` text make sense?

* If the image doesn't provide any additional information and is purely decorative, you can provide any empty `alt` attribute. 👍

```HTML
<img src="mypic.jpg" alt="">
``

* Empty alt text actually removes images from the accessibility tree so they'll be skipped by the screen reader.