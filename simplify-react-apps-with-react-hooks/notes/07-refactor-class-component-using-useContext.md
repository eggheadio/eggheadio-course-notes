
# [Refactor a React Class Component with useContext and useState Hooks](https://egghead.io/lessons/react-refactor-a-react-class-component-with-usecontext-and-usestate-hooks)

We've got a pretty simple User class component that manages a bit of state and uses some context. Let's refactor this over to a function component that uses the `useContext` and `useState` hooks.
**Old component class**

```javascript
class User extends Component {
  static propTypes = {
    username: PropTypes.string,
  }
  static contextType = GitHubContext
  state = {filter: ''}

...
}
```

to

```javascript
function User({username}) {
    const client = useContext(GithubContext);
    const [filter, setFilter] = useState('');
}
User.propTypes = {
    username: PropTypes.string
}
```

The only thing remainining to port to this function component is the return statement. We will return whatever the `render()` method in Class component returns.
That's it, or is it?
We also have to remove all the occurences of `this.` in the code. Also, as we have destructured our props, we don't need `props.` at every place, so need to get rid of that.

Voila! You have your arguably simple function component working as expected 🙂
