# 23 - Develop React Components in Isolation with Storybook and Nx
[Video Link]()

<TimeStamp start="0:11" end="0:15">

```jsx
export interface TopicButtonProps{
    TopicName: string;
}
```

</TimeStamp>

<TimeStamp start="0:37" end="0:40`">

```jsx
export const Primary = Template.bind({});
Primary.args = {
    topicName: {
        'Next.js',
    }
}
```

</TimeStamp>