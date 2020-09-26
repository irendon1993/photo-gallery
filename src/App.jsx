import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Basketball } from './Basketball'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Franchise</h1>
        </header>
        <section>
          <article>
            <h2>
              {/* <Link to="/Basketball" component={Basketball}> */}
              Basketball
              {/* </Link> */}
            </h2>
            <img
              src="https://a.espncdn.com/photo/2020/0511/nba_74_players_3_16x9.jpg"
              width="800px"
              height="400px"
            />
          </article>
          <article>
            <h2>
              <Link to="/music">Music</Link>
            </h2>
            <img
              src="https://www.realstreetradio.com/wp-content/uploads/2018/11/Kanye.jpg"
              width="800px"
              height="400px"
            />
          </article>
        </section>

        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route exact path="/Basketball">
            Page 1
          </Route>
          <Route exact path="/Music">
            Page 2
          </Route>
          <Route path="*">Not Found</Route>
        </Switch>
      </>
    )
  }
}

export default App
