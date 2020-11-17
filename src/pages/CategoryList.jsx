import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import photoData from '../photos.json'

class CategoryCard extends Component {
  render() {
    return (
      <div>
        <div className="boxContainer">
          <div className="titleContainer">
            <div className="figureContainer">
              <h2 className="albumTitle">
                <Link to={`/${this.props.categoryName}`}>
                  {this.props.categoryDetails.title}
                </Link>
              </h2>
            </div>
          </div>
          <div>
            <figure>
              <img
                className="albumCover"
                src={this.props.categoryDetails.photos[0].albumCover}
                alt={this.props.categoryDetails.photos[0].title}
                // width="900px"
                // height="450px"
              />
            </figure>
          </div>
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
      <div className="marker">
        <div>
          {categoryNames.map(categoryName => (
            <CategoryCard
              key={categoryName}
              categoryName={categoryName}
              categoryDetails={photoData[categoryName]}
            />
          ))}
        </div>
      </div>
    )
  }
}
