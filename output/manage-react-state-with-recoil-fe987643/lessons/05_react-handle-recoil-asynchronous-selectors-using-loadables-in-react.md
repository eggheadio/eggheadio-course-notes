# Handle Recoil Asynchronous Selectors using Loadables in React

[Video link](https://www.egghead.io/lessons/react-handle-recoil-asynchronous-selectors-using-loadables-in-react?pl=manage-react-state-with-recoil-fe987643)

Instructor: [0:00] In this React application, with Recoil installed, we're using a selector to make and API call to fetch weather once the city item dependency changes. For instance, if we type in Anchorage, Alaska, the API call will automatically be made for Anchorage.

[0:20] When using an asynchronous selector, because it returns a promise, React doesn't know what to load until the promise is resolved. That causes a problem. Here, we have a solution for this problem that uses React Suspense, and supplies a fallback value when the weather selector returns a promise.

[0:38] While it's searching for the city, it says, "Loading Weather." In this lesson, we're going to look at an alternative to Suspense. That's called useRecoilValueLoadable. We can remove Suspense, and we will import useRecoilValueLoadable. Now we no longer need this import, because we're going to implement the weather component ourselves.

[1:13] Declare new component called Weather. We'll start by consuming our selector. We'll say, "Const cityWeather = useRecoilValueLoadable, giving it our weatherSelector as an argument. Now this loadable object contains two properties.

[1:31] The first tells us the status of the async selector, whether it's loading, whether there's an error, or whether it has a value already. Then it also has the contents, so we can access both. Let's destructure this already. We can say, "State and the contents."

[1:48] Now we're going to handle each state individually. Start by adding a switch case statement. We'll say, "Switch on the state." If we know that we already have a weather value, that means the case is hasValue, we'll return the contents. That means that this will be the value.

[2:12] What about a case where it hasError? We'd only return the contents in this case, because we want to return text rather than an error object. Instead, we're going to return the message property on contents, which is the error message.

[2:30] Lastly, loading. This is where contents will actually be a promise, so we can't return contents. Instead, we're going to return a default string similar to what we did with Suspense. We'll say, "Loading Weather". We'll just stick a default return value there to keep our linter happy.

[2:51] Now, when we type in a city, it will work. Let's say we type in a problematic city. It will say our error message.

[3:04] Be aware that the value of contents will depend on what state the selector is at, so right when it starts pulling the API, and it returns a promise, the value of state will be loading, and therefore the value of contents will be a promise.

[3:19] Once it actually returns the value, state will be hasValue. Contents will be the result value. If it returns an error, state will be hasError. Contents will be an error object.

[3:32] To summarize, if you don't want to use Suspense to handle a case where an async selector returns a promise, you can just have it not return a promise by consuming it with useRecoil.eloadable. Then it'll always tell you the state that the selector is in, and the contents of the object, and then you can always handle it accordingly.
