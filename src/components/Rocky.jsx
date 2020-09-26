import React, { Component } from 'react'
import { LandingPage } from './LandingPage'

export class Rocky extends Component {
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
            <h2>A$AP Rocky</h2>
            <img
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/asap-rocky-dior-pop-art-tina-barringer.jpg"
              width="600px"
              height="800px"
            />
          </article>
        </section>
      </div>
    )
  }
}
