 # 13. Test for Heading Level Accessibility Issues

**[📹 Video](https://egghead.io/lessons/screen-reader-test-for-heading-level-accessibility-issues)**


* 👍 Every page should contain exactly one `<h1>` heading. 

* The primary heading should be followed by `<h2`>, `<h3>` in order. It's bad practice for your webpage to simply feature `<h5>`, `<h6>`!

* Headings are not just for styling (and font size); they also carry a semantic role!

* Use `react-axe` or `tota11y` to diagnose. You can always check which headings are available in the `VoiceOver` rotor, headings menu.
