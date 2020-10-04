# [Refactor a class component to a function component using React Hooks](https://egghead.io/lessons/react-refactor-a-class-component-with-react-hooks-to-a-function)

In this lecture, we have a render prop based **class** component that allows us to make a GraphQL request with a given query string and variables and uses a GitHub graphql client that is in React context to make the request. 
We will refactor this to a **function** component that uses the hooks `useReducer`, `useContext`, and `useEffect`.

```javascript
// Class component
class Query extends Component {
    static proptypes = {
        query: PropTypes.string.isRequired,
        variables: PropTypes.object,
        children: PropTypes.func.isRequired,
        normalize: PropTypes.func
    }
    static defaultProps = {
        normalize: data => data
    }
    static contextType = GitHub.Context
}
```

To start with the refactor, let us first create a function component named `Query` and set the propTypes and defaultProps. To set the defaultProps, destructuring serves good.Now, to get client from GitHub.Context, we will use the hook `useContext`

```javascript
// Refactored function component
function Query({query, variables, normalize = data => data, children}) {
    const client = useContext(GitHub.Context)
}
Query.propTypes = {
    query: PropTypes.string.isRequired,
    variables: PropTypes.object,
    children: PropTypes.func.isRequired,
    normalize: PropTypes.func
}
```

---
Now we will refactor our state declaration. One way to do it is using the `useState` hook, but to save us from writing too much and have minimal change, we will use the `useReducer` hook.

```javascript
class Query extends Component {
    ...
    ...
    state: {loaded: false, fetching: false, data: null, error: null}
}
```

to

```javascript
function Query({query, variables, normalize = data => data, children}) {
    ...
    ...
    const [state, setState] = useReducer(
        // creating new state in a function
        (state, newState) => ({...state, ...newState}),
        // the initial state object
        {loaded: false, fetching: false, data: null, error: null}
    )
}
```

This is how actually `this.setState` works in React.

---
Now, we will use the `useEffect` hook to simulate what is happening in the componentDidMount and componentDidUpdate. In the original class component, the actual query call is made in componentDidMount to fetch data just after the render. We want to make the query call only when the query and variables passed to it change. This is what we are making sure in componentDidUpdate

```javascript
class Query extends Component {
    ...
    ...
    componentDidMount() {
        // this will be called when the the Query component is mounted
        this.query();
    }

    componentDidUpdate(prevProps) {
        // isEqual method from lodash does deep comparison of objects
        if(
            !isEqual(this.props.query, prevProps.query) ||
            !isEqual(this.props.variables, prevProps.variables)
        ) {
            this.query()
        }
    }

    // Network call to fetch data
    query() {
        this.setState({fetching: true});
        const client = this.context;
        client
        .request(this.props.query, this.props.variables)
        .then(res =>
            this.setState({
                data: this.props.normalize.res,
                error: null
                loaded: true
                fetching: false
            })
        )
        .catch(error =>
            this.setState({
                error,
                data: null,
                loaded: false,
                fetching: false
            })
        )
    }
}
```

to

```javascript
useEffect(() => {
    setState({fetching: true});
    client
    .request(query, variables)
    .then(res =>
        setState({
            data: normalize.res,
            error: null
            loaded: true
            fetching: false
        })
    )
    .catch(error =>
        setState({
            error,
            data: null,
            loaded: false,
            fetching: false
        })
    )
}, [query, variables])
```

The second argument to useEffect hooks is an array of dependencies, on change of which the code inside useEffect runs. Just behold the beauty of React hooks. It makes our components so much simpler.
>Note: If you notice, the dependency array of useEffect contains variables which by default will be compared on a shallow basis. We have handled its deep comparison here in the next doc

---
Now, we have the render method in the class component which can just be converted as the return statement in the function component

```javascript
render() {
    return this.props.children(this.state)
}
```

to

```javascript
// we are getting the state here from the useReducer hook, remember?
return children(state)
```
