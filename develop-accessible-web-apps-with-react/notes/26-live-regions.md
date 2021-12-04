 # 26. Define a Live Region to Ensure Dynamic Changes are Announced by Assistive Technologies

**[📹 Video](hhttps://egghead.io/lessons/react-define-a-live-region-to-ensure-dynamic-changes-are-announced-by-assistive-technologies)**


* With ARIA live regions, you can dynamically update parts of the page without a reload. For a live region to work, the element has to be present in the DOM before any changes occur, with a defined aria-live attribute.

* Live regions are most often used for the parts of the webpage that might change (like error or success status message).

* `aria-live` has three allowable values, off, polite, and assertive.

- off is the default value.
- polite tells assistive technology to alert the user to changes when you finished whatever you were doing. It's great to use if something is important but not urgent.
- assertive tells assistive technology to interrupt and alert the user to this change immediately. This is only for important and urgent updates.

Additionally, there are also `aria-atomic` and `aria-relevant` attributes.

* `aria-atomic` indicates whether the entire region should be considered as a whole when communicating updates (false by default).

* `aria-relevant` indicates what types of changes should be presented to the user with possible values of Additions, removals, text or all.