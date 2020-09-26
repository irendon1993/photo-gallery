import React, { Component } from 'react'
import { LandingPage } from './LandingPage'

export class Lebron extends Component {
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
          <article className="player">
            <h2>LeBron James</h2>
            <img
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/lebron-james-scream-gilang-bogy.jpg"
              width="600px"
              height="800px"
            />
          </article>
        </section>
      </div>
    )
  }
}
