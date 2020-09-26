import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Basketball } from './components/Basketball'
import { LandingPage } from './components/LandingPage'
import { Music } from './components/Music'

class App extends Component {
  render() {
    console.log(window.location)

    if (window.location.pathname === '/') {
      return <LandingPage />
    }

    if (window.location.pathname === '/Basketball') {
      return <Basketball />
    }
    if (window.location.pathname === '/Music') {
      return <Music />
    }

    return <div>404</div>

    // return (
    //   <>
    //     <LandingPage />
    //     <LandingContent />
    //     <Switch>
    //       <Route exact path="/">
    //         Home
    //       </Route>
    //       <Route exact path="/Basketball">
    //         Basketball
    //       </Route>
    //       <Route exact path="/Music">
    //         Music
    //       </Route>
    //       <Route path="*">Not Found</Route>
    //     </Switch>
    //   </>
    // )
  }
}

export default App
