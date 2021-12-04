# [Handle componentDidMount and componentWillUnmount in React Component Refactor to Hooks](https://egghead.io/lessons/react-handle-componentdidmount-and-componentwillunmount-in-react-component-refactor-to-hooks)

In this doc, we will be looking at the GitHubClientProvider class and trying to refactor it to a function component
Reference: [github-client.js](https://github.com/kentcdodds/react-github-profile/blob/egghead-2018/refactor-09/src/github-client.js)

__Old Class component__

```javascript
class GitHubClientProvider extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {error: null}

    //Conditional setting state properties
    if (this.props.client) {
      this.state.client = this.props.client
    } else {
      const token = window.localStorage.getItem('github-token')
      if (token) {
        this.state.client = this.getClient(token)
      }
    }
  }
  componentDidMount() {
    if (!this.state.client) {
      navigate('/')
    }
    this.unsubscribeHistory = history.listen(() => {
      if (!this.state.client) {
        navigate('/')
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribeHistory()
  }
  ...
  ...
}
```

Now, before starting the refactor, we see that that there is a state property called client which is getting assigned a value conditionally and in that condition, we are looking up the localStorage. It is not a good practice that everytime, the component renders, you have to look up the localStorage. So, we will try to refactor in a way, that this part of code is called only once when the initial state is set.
`useState` hook can also take an initializer function which will return something and that something will be set as the initial value of the state

```javascript
function GitHubClientProvider(props) {
    const [error, setError] = useState(null);
    const [client, setClient] = useState(() => {
        if (props.client) {
            return props.client
        } else {
            const token = window.localStorage.getItem('github-token')
            if (token) {
                return getClient(token)
            }
        }
    })

    useEffect(() => {
        if(!client) {
            navigate('/')
        }
        const unsubscribeHistory = history.listen(() => {
            if (!client) {
                navigate('/')
            }
        })
        return () => unsubscribeHistory()
    }, [])
    ...
    ...
}
```

- useEffect hook does not exactly function as the componentDidMount lifecycle method.
- useEffect hook is a combination of componentDidMount, componentWillUnmount and componentDidUpdate. 
- The best thing about useEffect is that it allows us to setup as well as it gives us slot for a cleanup or teardown function that we can put as the return value of useEffect.

>>**Ques:** Why did I put an empty array as the dependency list argument in useEffect?
**Ans:** This is because we just want to do the operations inside useEffect once when the render happens and when the component unmounts. The inside code won't run if any value or anything changes. Empty array signifies that there are no variables on change of which the callback function will rerun. So, that is why we pass an empty array as the dependency list argument.

Now, let us refactor the `getClient` method. This is going to be pretty straight-forward and easy-peasy.

__Old component code__

```javascript
class GitHubClientProvider extends React.Component {
    ...
    ...
    getClient = token => {
        const headers = {Authorization: `bearer ${token}`}
        const client = new GraphQLClient('https://api.github.com/graphql', {
        headers,
        })
        return Object.assign(client, {
        login: this.login,
        logout: this.logout,
        })
    }
    logout = () => {
        window.localStorage.removeItem('github-token')
        this.setState({client: null, error: null})
        navigate('/')
    }
    login = async () => {
        const data = await authWithGitHub().catch(error => {
        console.log('Oh no', error)
        this.setState({error})
        })
        window.localStorage.setItem('github-token', data.token)
        this.setState({client: this.getClient(data.token)})
    }
    ...
    ...
}
```

to

```javascript
const getClient = token => {
    const headers = {Authorization: `bearer ${token}`}
    const client = new GraphQLClient('https://api.github.com/graphql', {
        headers,
    })
    return Object.assign(client, {
        login,
        logout
    })
}
function logout() {
    window.localStorage.removeItem('github-token')
    setClient(null);
    setError(null);
    navigate('/')
}
async function login() {
    const data = await authWithGitHub().catch(error => {
    console.log('Oh no', error)
    setError(error)
    window.localStorage.setItem('github-token', data.token)
    setClient(getClient(data.token))
}
```

Last thing left to refactor is the render() function which is again right up straight-forward. Just copy whatever render() function returns and return it within our GitHubClientProvider function.

I hope this refactor revised whatever you have learnt so far🙂
