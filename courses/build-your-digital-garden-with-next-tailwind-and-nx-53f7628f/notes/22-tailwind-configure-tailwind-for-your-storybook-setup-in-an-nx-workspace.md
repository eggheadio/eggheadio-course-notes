# 22 - Configure Tailwind for your Storybook Setup in an Nx Workspace 

[Video Link]()

<TimeStamp start="0:20" end="0:30">

We need to make sure we enable tailwind with storybook , to do that you need to run 
- `cs libs/shared/ui`
- `npx tailwindcss init -p` 

</TimeStamp>

<TimeStamp start="2:59" end="3:02">

- `yarn nx storybook shared-ui` 
- `nx run shared-ui:storybook`

</TimeStamp>

<TimeStamp start="3:22" end="3:28">

```jsx
const Template: Story<TopicButtonProps> = (args) => {
    return (]
    <div className="bg-gray-100 p-20">
    <TopicButton {...args}>
    </div>
    );
};
```

</TimeStamp>

<TimeStamp start="3:52" end="3:54">

`TAILWIND_MODE=watch yarn nx storybook shared-ui` 

</TimeStamp>

