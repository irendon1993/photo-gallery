import React, { Component } from 'react'
import { LandingPage } from './LandingPage'

export class Music extends Component {
  render() {
    return (
      <div>
        <section>
          <header>
            <h1>Franchise</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Basketball">Basketball</a>
              </li>
              <li>
                <a href="Music">Music</a>
              </li>
            </ul>
          </header>
        </section>
        <section>
          <article>
            <h2>Title</h2>
          </article>
          <article>
            <h2>Title</h2>
          </article>
          <article>
            <h2>Title</h2>
          </article>
          <article>
            <h2>Title</h2>
          </article>
        </section>
      </div>
    )
  }
}
