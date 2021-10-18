# Enable Suspense Features with Experimental Concurrent Mode using ReactDOM.createRoot

**[📹 Video](https://egghead.io/lessons/react-enable-suspense-features-with-experimental-concurrent-mode-using-reactdom-createroot)**

 React's experimental build have three different modes for rendering in order to replace the usage of the old `ReactDOM.render` to enable the **concurrent** mode.
 
  * **legacy mode** : The mode use by everyone today
  * **blocking mode** :An intermediate step between current mode and future way of work
  * **concurrent mode**  is what's required for pretty much everything required in this course. 
  
🚨We need to enable enabled the **concurrent mode** to actually see these features working.

Since we are using an experimental build of ReactDOM, we can change the usage of `ReacDOM.render` to use `ReactDOM.createRoot`

This new functions have different arguments, it just receive the `rootElement` 

```javascript
ReactDOM.createRoot(rootElement).render(<App />);
```

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-track-async-requests-with-react-s-usestate-hook)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-de-prioritize-nonuser-blocking-updates-with-react-usetransition-s-starttransition-function)
