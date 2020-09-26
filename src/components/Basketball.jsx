import React, { Component } from 'react'

export class Basketball extends Component {
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

        <section className="players">
          <article className="player">
            <h2>Kobe Bryant</h2>
            <img
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/kobe-bryant-gilang-bogy.jpg"
              width="400px"
              height="500px"
            />
          </article>
          <article className="player">
            <h2>LeBron James</h2>
            <img
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/lebron-james-scream-gilang-bogy.jpg"
              width="400px"
              height="500px"
            />
          </article>
          <article className="player">
            <h2>Michael Jordan</h2>
            <img
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/michael-jordan-gilang-bogy.jpg"
              width="400px"
              height="500px"
            />
          </article>
          <article className="player">
            <h2>Luka Doncic</h2>
            <img
              src="https://pbs.twimg.com/media/EUwh1NDXYAMSg0a.jpg"
              width="400px"
              height="500px"
            />
          </article>
        </section>
      </div>
    )
  }
}
