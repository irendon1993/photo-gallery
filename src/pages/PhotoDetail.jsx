import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import photoData from '../photos.json'

export class PhotoDetail extends Component {
  render() {
    const category = this.props.match.params.category
    const photoIndex = this.props.match.params.photoIndex

    const photoListData = photoData[category]
    const photo = photoData[category].photos[photoIndex]

    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to={`/${category}`}>{photoListData.title}</Link>
            </li>
            <li>
              <Link to={`/${category}/${photoIndex}`}>{photo.title}</Link>
            </li>
          </ul>
        </nav>
        <h3>{photo.title}</h3>
        <figure>
          <img className="Big" src={photo.imageURL} alt={photo.title} />
        </figure>
        <p>
          <a href={photo.sourceURL}>Source</a>
        </p>
      </div>
    )
  }
}
