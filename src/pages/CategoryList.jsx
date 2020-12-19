import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import photoData from '../photos.json'

class CategoryCard extends Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="title">
          <Link to={`/${this.props.categoryName}`}>
            {this.props.categoryDetails.title}
          </Link>
        </div>
        <div className="cardImage">
          <img
            src={this.props.categoryDetails.photos[0].albumCover}
            alt={this.props.categoryDetails.photos[0].title}
          />
        </div>
      </div>
    )
  }
}

export class CategoryList extends Component {
  render() {
    const categoryNames = Object.keys(photoData)

    console.log(categoryNames)

    return (
      <div className="category">
        {categoryNames.map(categoryName => (
          <CategoryCard
            key={categoryName}
            categoryName={categoryName}
            categoryDetails={photoData[categoryName]}
          />
        ))}
      </div>
    )
  }
}
