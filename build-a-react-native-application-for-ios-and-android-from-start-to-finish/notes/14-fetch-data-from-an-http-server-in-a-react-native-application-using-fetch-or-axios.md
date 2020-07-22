# Fetch Data from an HTTP Server in a React Native Application using fetch or axios

**[📹 Video](https://egghead.io/lessons/react-native-fetch-data-from-an-http-server-in-a-react-native-application-using-fetch-or-axios)**

## Lifecycle methods and Hooks

The same React class-based lifecycle methods - `componentDidMount`, `render`, `componentWillUnmount` etc - and hooks - `useState`, `useEffect` etc - exist for React Native.

```jsx
class MyComponent extends Component {
  componentDidMount() {
    // setup things - fetch data etc
  }

  render() {
    // render data to screen
  }

  componentWillUnmount() {
    // cleanup things - cancel promises, clear timeouts etc
  }
}
```

```jsx
const MyComponent = () => {
  useEffect(() => {
    // setup things
    return () => {
      // cleanup things
    }
  }, [])

  return (
    // render things
  )
}
```

## Fetching data

The same `fetch` API that exists in web-land is also available in React Native. Additionally, any other HTTP request libraries can be installed from NPM - such as `axios`. Axios provides a slightly more declarative and clearer API than fetch, but either can be used for this course.

```bash
npm i axios
```

```jsx
import axios from 'axios'


class Pokedex extends Component {
  state = {}
  const url = 'https://pokeapi.co/api/v2/pokemon/'

  componentDidMount() {
    axios.get(url)
      .then(({ data }) => this.setState({ pokemon: data }))
  }

  render() {
    return this.state.pokemon.map(p => <Text>{p.name}</Text>)
  }
}
```

Or using a `<FlatList />` component.

```jsx
import axios from 'axios'


class Pokedex extends Component {
  state = {}
  const url = 'https://pokeapi.co/api/v2/pokemon/'

  componentDidMount() {
    axios.get(url)
      .then(({ data }) => this.setState({ pokemon: data }))
  }

  render() {
    return <FlatList
      data={this.state.pokemon}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      keyExtractor={pokemon => pokemon.id}
    />
  }
}
```

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-make-a-touchable-button-in-react-native)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-display-local-and-remote-images-in-react-native)
