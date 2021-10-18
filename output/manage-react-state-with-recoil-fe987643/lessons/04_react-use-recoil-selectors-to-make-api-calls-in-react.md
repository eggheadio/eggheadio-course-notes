# Use Recoil Selectors to Make API Calls in React

[Video link](https://www.egghead.io/lessons/react-use-recoil-selectors-to-make-api-calls-in-react?pl=manage-react-state-with-recoil-fe987643)

Yoni Weisbrod: [0:00] In this simple weather application, we're storing the current city in a Recoil atom. Once we do that, we can use a Recoil selector to automatically make an API call to fetch the current weather when the city changes.

[0:14] To set this up, we're going to create a new selector which will look very much like the regular synchronous selector. We'll call it our weatherSelector, declaring a new selector, giving it a key, again of weatherSelector. Then we'll declare a getter method on it, which is all we need to do.

[0:37] We're going to use this get to get the value of our city from our atom. We'll say const city = get(cityAtom). Then we're going to take that city value and fetch the weather using it. Say we have a weather API with a method called fetchWeather, so fetchWeather(city).

[1:01] If we tried consuming this weatherSelector directly, we're going to have a problem because until the API call returns, all we have is a promise, so React won't know what to render. Let's live a little dangerously and try it out anyway and see what happens.

[1:15] We'll start by getting our useRecoilValue hook from Recoil. Then we'll say const cityWeather = useRecoilValue(weatherSelector.) Now we'll just add it in here, cityWeather. We can already see there's a problem here because React doesn't know what to display until the API call returns.

[1:39] One solution for this is to use React Suspense to provide a fallback value. We'll import { Suspense } from "React". We'll try adding it in here. We'll give it a fallback value of "Loading weather..."

[2:01] React still has a problem with this. The issue is that Suspense can't be at the same level of hierarchy as the value that we're waiting for. We would either need to wrap the entire application around Suspense, in which case we would lose the input box, and it would just show "Loading weather..." for the whole application, or we can extract this out to a lower-level hierarchy.

[2:22] We'll do this by extracting weather to a second component. First, let's move this into a new file we will call Weather.js, where we will import React and then export default function Weather(), where we will return the value that we had before. Now, we can just take the cityWeather from our Selector itself. We can say useRecoilValue and take our weatherSelector.

[2:55] Of course, we'll still need to import that. We'll say import { useRecoilValue } from "recoil" and then the selector import from "./App". Then, we'll need to go into our app and export everything. We'll need to take this out. Here, we can just do Weather once we've imported that. Now, it should work.

[3:43] If we change our city, let's say New York, it finds us the weather. Critically, until the API response returns, it has something to show which is our fallback value.

[3:55] Note that you'll have to handle the scenario of no API response, so long as your selector returns a promise. It doesn't matter if it has an async label or not.

[4:05] For instance, let's say we wanted to return a formatted Weather scenario. We'll say weather = fetchWeather(city), and we'll await it. Then, we will return a formatted value. We'll say if we have weather, we'll return the "$(weather) °F". Otherwise, we'll say, "City not found." That should do it. We'll start typing New York. It shows a formatted city.

[4:44] To recap, the really nice thing about using Selectors for your API calls is that it automatically listens for changes to your cityAtom. We're not declaring in the code that any new API calls are made. All we're doing is changing our city, and Recoil knows to keep the Selector fresh, so it will keep calling this getter method.
