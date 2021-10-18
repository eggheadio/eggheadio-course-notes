# Choose the Right Hook for Your Recoil State

[Video link](https://www.egghead.io/lessons/react-choose-the-right-hook-for-your-recoil-state?pl=manage-react-state-with-recoil-fe987643)

Yoni Weisbrod: [0:00] This lesson is about using the right hook to consume our recoil state. We have here a skeleton of a counter app where we render two components, this CurrentCount and then the IncrementButton.

[0:13] What we want to do is choose the correct recoil hook for each component so that we don't get unnecessary re-renders. For our CurrentCount component, we want to subscribe to the count atom and we want the component to re-render whenever it changes.

[0:26] We're going to say, const currentCount = useRecoilValue, supplying it with our atom as an argument. Then we can feed it in here. Now we'll be reading the value any time it changes.

[0:46] For our IncrementButton component, the story is a little different, because we want to be able to hit this increment button, but we don't want to have this component re-render every time the count changes.

[0:57] In order to see what we're doing, let's add useEffect, so we can log all of our renders. I'll put a useEffect here, where I'll say console.log("Rendered current count."). Then, I'll do the same thing for my IncrementButton, so we can see what's going on.

[1:19] Let's see what happens when we use the generic useRecoilState hook, so we'll say over here, const [currentCount, setCount] = useRecoilState giving count as the argument. Then, we'll hook it up over here by saying, setCount(currentCount + 1).

[1:46] We can just use the updater syntax, so we can say setCount would be count + 1 and then remove the currentCount because we don't need it, but still, we see that this component has a double render. If we click this +1, the button itself is rendered every time there's a change.

[2:10] That's because that is how the useRecoilState hook works. It always re-renders the component when the subscribed atom changes, so we don't want that here.

[2:19] Instead Recoil offers us a different hook called useSetRecoilState, which is exactly for this purpose and it will export just a setter method, so useSetRecoilState. Then we can use that to prevent extra rendering. When I click the button, only the current count is rendered. The button is not re-rendered.

[2:50] As a quick recap, our three basic recoil hooks to consume state are useRecoilState, useRecoilValue, and useSetRecoilState. Each one has its own purpose. We saw that useRecoilState is good when you need to read and write data. The component will re-render every time there's a state change.

[3:10] If you just want to read only, you should useRecoilValue. If you just want to write data and you don't want the component to re-render when the data changes, use useSetRecoilState like we did today.
