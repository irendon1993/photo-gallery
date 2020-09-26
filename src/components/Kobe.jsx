import React, { Component } from 'react'
import { LandingPage } from './LandingPage'

export class Kobe extends Component {
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
        <article className="player">
          <h2>
            <a href="/Kobe">KobeBryant</a>
          </h2>
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/kobe-bryant-gilang-bogy.jpg"
            width="600px"
            height="800px"
          />
        </article>
      </div>
    )
  }
}
