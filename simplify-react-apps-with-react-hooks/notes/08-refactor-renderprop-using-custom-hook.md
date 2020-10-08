# [Refactor a render Prop Component to a Custom React Hook](https://egghead.io/lessons/react-refactor-a-render-prop-component-to-a-custom-react-hook)

**user.js**

```javascript
function User({username}) {
  const {logout} = useContext(GitHubContext)
  const [filter, setFilter] = useState('')
  return (
    <Query
      query={userQuery}
      variables={{username}}
      normalize={normalizeUserData}
    >
      {({fetching, data, error}) =>
        ...
      }
    </Query>
  )
}
```

`renderProps` are an excellent way of sharing code. Our `<Query/>` component is a render prop based component that the `<User/>` component uses. But because it doesn't render anything, we can actually just change it to a custom hook. This will make our code clean and less complex.
Here, we create a `useQuery` hook that returns the state from the hooks the Query component uses and use that instead.

Something like this:

```javascript
function User({username}) {
  const {logout} = useContext(GitHubContext)
  const [filter, setFilter] = useState('')

  const {fetching, data, error} = useQuery({
    query: userQuery,
    variables: {username},
    normalize: normalizeUserData,
  })

  ...
}
```

Now, let us go to the `query.js` and write down our useQuery custom hook there, later to be imported in `user.js`
This is how `Query` function component looks like as of now
Reference: [query.js](https://github.com/kentcdodds/react-github-profile/blob/egghead-2018/refactor-09/src/screens/user/components/query.js)

```javascript
function Query({query, variables, normalize = data => data, children}) {
    const [state, setState] = useSafeSetState({
        loaded: false,
        fetching: true,
        data: null,
        error: null
    })
    ...
    return children(state)
}
```

Let us make this

```javascript
function useQuery({query, variables, normalize = data => data}) {
    const [state, setState] = useSafeSetState({
        loaded: false,
        fetching: true,
        data: null,
        error: null
    })
    ...
    return state;
}
```

All good, right?

Now, there can be a situation where we'll still need the renderProps based implementation like the previous Query component. So, let us recreate one using this useQuery custom hook only

```javascript
const Query = ({children, ...props}) => children(useQuery(props))
```
