import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { CategoryList } from './pages/CategoryList'
import { PhotoList } from './pages/PhotoList'
import { PhotoDetail } from './pages/PhotoDetail'

class App extends Component {
  render() {
    console.log(window.location)

    return (
      <div>
        <section>
          <header>
            <h1>Franchise</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Basketball">Basketball</Link>
              </li>
              <li>
                <Link to="/Music">Music</Link>
              </li>
            </ul>
          </header>
        </section>
        <section className="section">
          <Switch>
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/:category" component={PhotoList} />
            <Route
              exact
              path="/:category/:photoIndex"
              component={PhotoDetail}
            />
          </Switch>
        </section>
      </div>
    )
  }
}

export default App
