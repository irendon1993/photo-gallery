import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Basketball } from './components/Basketball'
import { LandingPage } from './components/LandingPage'
import { Music } from './components/Music'
import { Kobe } from './components/Kobe'
import { Lebron } from './components/Lebron'
import { Jordan } from './components/Jordan'
import { Luka } from './components/Luka'
import { Kanye } from './components/Kanye'
import { Cudi } from './components/Cudi'
import { Rocky } from './components/Rocky'
import { Travis } from './components/Travis'

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
    if (window.location.pathname === '/Kobe') {
      return <Kobe />
    }
    if (window.location.pathname === '/Lebron') {
      return <Lebron />
    }
    if (window.location.pathname === '/Jordan') {
      return <Jordan />
    }
    if (window.location.pathname === '/Luka') {
      return <Luka />
    }
    if (window.location.pathname === '/Kanye') {
      return <Kanye />
    }
    if (window.location.pathname === '/Cudi') {
      return <Cudi />
    }
    if (window.location.pathname == '/Rocky') {
      return <Rocky />
    }
    if (window.location.pathname === '/Travis') {
      return <Travis />
    } else {
      return <div>404</div>
    }

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
