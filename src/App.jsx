import React, { Component } from 'react'
import './styles/index.scss'
import { Link, Route, Switch } from 'react-router-dom'
import { CategoryList } from './pages/CategoryList'
import { PhotoList } from './pages/PhotoList'
import { PhotoDetail } from './pages/PhotoDetail'

export class App extends Component {
  render() {
    return (
      <main>
        <section>
          <header>
            <h1>
              <Link to="/">Franchise</Link>
            </h1>
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
      </main>
    )
  }
}
