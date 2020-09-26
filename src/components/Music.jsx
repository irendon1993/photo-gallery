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
            <h2>
              <a href="/Kanye"> Kanye West</a>
            </h2>
            <img
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-kanye-west-pdart.jpg"
              width="400px"
              height="500px"
            />
          </article>
          <article>
            <h2>
              <a href="/Cudi">Kid Cudi</a>
            </h2>
            <img
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/8-kid-cudi-artwork-taoteching-art.jpg"
              width="400px"
              height="500px"
            />
          </article>
          <article>
            <h2>
              <a href="/Rocky">A$AP Rocky</a>
            </h2>
            <img
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/asap-rocky-dior-pop-art-tina-barringer.jpg"
              width="400px"
              height="500px"
            />
          </article>
          <article>
            <h2>Travis Scott</h2>
            <img
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/travis-scott-nofa-aji-zatmiko.jpg"
              width="400px"
              height="500px"
            />
          </article>
        </section>
      </div>
    )
  }
}
