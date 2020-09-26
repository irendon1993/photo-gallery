import React, { Component } from 'react'
import { LandingPage } from './LandingPage'

export class Travis extends Component {
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
            <h2>Travis Scott</h2>
            <img
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/travis-scott-nofa-aji-zatmiko.jpg"
              width="600px"
              height="800px"
            />
          </article>
        </section>
      </div>
    )
  }
}
