# Retrieve Data with a Supabase API Request

[Video link](https://www.egghead.io/lessons/supabase-retrieve-data-with-a-supabase-api-request?pl=supabase-84e58958)

<TimeStamp start="0:20" end="0:26">

We'll create a new file named `Chat.js` under `components` folder.

</TimeStamp>
 
<TimeStamp start="0:27" end="0:38">

In the new file, we'll add the following code: 

```jsx
const Chat = () => {
    return <div></div>
}
```

```jsx
export default Chat
```

</TimeStamp>

<TimeStamp start="0:40" end="0:45">

You'll need to import the new file in `index.js` 

```jsx 
import Chat from '../components/Chat'
```

</TimeStamp>

<TimeStamp start="1:58" end="2:15">

In Supabase's dashboard, under API section/Tables and Views/Message you'll find the appropriate documentation in order to begin making requests to our database. 

</TimeStamp>

<TimeStamp start="3:11" end="3:30">

To get the messages in the console, you need to add the following code: 

```jsx
const getMessages = async () => {
    let { data:messages, error } = await supabase
        .from('message')
        .select('*')
    console.log(messages)
}
```

</TimeStamp>

<TimeStamp start="4:16" end="4:25">

To know more about [`useEffect`](https://reactjs.org/docs/hooks-effect.html) and [`useState`](https://reactjs.org/docs/hooks-state.html) visit their documentation. 
 
</TimeStamp>

<TimeStamp start="5:20" end="5:40">

To test the code for retrieving the messages, we need to create a new message in the `message` table. And check your console yo see if the message it's being display. 

</TimeStamp>

<TimeStamp start="6:09" end="6:40">

To show the messages in our interface, we'll need the following code:

```jsx
const [messages, setMessages] = useState([])
```

Then, you need to add the following line under the `const getMessages`:

```jsx
setMessages(messages)
```

</TimeStamp>

<TimeStamp start="6:50" end="4:20">

To return the messages in a simple UI, we need to create simple <div>

```jsx 
return <div>
    {messages.map(message => <div key={message.id}>{message.content})}</div>
</div>
```

</TimeStamp>

