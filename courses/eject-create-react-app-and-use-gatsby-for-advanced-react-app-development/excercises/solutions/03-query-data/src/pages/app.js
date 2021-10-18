import React from 'react'
import { Router } from '@reach/router'

const Profile = () => <h2>Profile</h2>
const Stats = () => <h2>Stats</h2>
const Default = () => <h2>Default</h2>

const App = () => {
  return (
    <Router basepath="/app">
      <Profile path="/profile" />
      <Stats path="/stats" />
      <Default path="/" />
    </Router>
  )
}
export default App
