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
import { Photos } from './components/Photos'
import { Photo } from './components/Photo'

class App extends Component {
  render() {
    console.log(window.location)

    return (
      <>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Basketball" component={Basketball}></Route>
          <Route exact path="/Music" component={Music}></Route>
          <Route path="*">Not Found</Route>
        </Switch>
      </>
    )
  }
}

export default App
