import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Photo extends Component {
  render() {
    return (
      <div>
        <section>
          <article>
            <h2>Michael Jordan</h2>
            <img
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/michael-jordan-gilang-bogy.jpg"
              width="600px"
              height="800px"
            />
          </article>
        </section>
      </div>
    )
  }
}
