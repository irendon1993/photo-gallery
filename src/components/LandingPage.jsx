import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class LandingPage extends Component {
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
                <a href="/Music">Music</a>
              </li>
            </ul>
          </header>
        </section>
        <section>
          <article>
            <h2>
              <a href="/Basketball">Basketball</a>
            </h2>
            <img
              src="https://a.espncdn.com/photo/2020/0511/nba_74_players_3_16x9.jpg"
              width="900px"
              height="450px"
            />
          </article>
          <article>
            <h2>
              <a href="/Music">Music</a>
            </h2>
            <img
              src="https://www.realstreetradio.com/wp-content/uploads/2018/11/Kanye.jpg"
              width="900px"
              height="450px"
            />
          </article>
        </section>
      </div>
    )
  }
}
