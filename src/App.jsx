import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

// PROBLEM
//
// Using the JSON data below as a starter, build a photo gallery app.
// You should have at least 4 components: App, CategoryList, PhotoList, PhotoDetail.
// On the home page, your category list should render the title of each category and link using the key. For examples "Panda Bears" should link to /pandas
// Render each photo in the given category on the photo list page with a thumbnail sized version of your photos.
// Render a large version of the photo on the photo details page.
//
//
// EXAMPLE
// "pandas": {
// "title": "Panda Bears",
// "description": "Pandas are bears native to south-central China, and are objectively the cutest animals on earth.",
// "photos": [
//   {
//     "title": "Panda Waving",
//     "imageURL": "https://things-i-like.netlify.com/images/baby_panda.jpg",
//     "sourceURL": "https://codeburst.io/pandas-for-data-stuff-code-challenge-7972207a8294"
//   },
//   {
//     "title": "Großer Panda im Ocean Park, Hongkong",
//     "imageURL": "https://things-i-like.netlify.com/images/grosser_panda.jpg",
//     "sourceURL": "https://en.wikipedia.org/wiki/Giant_panda"
//   },
//   {
//     "title": "Wild pandas get a boost; the iconic species has been upgraded from 'endangered' to 'vulnerable.'",
//     "imageURL": "https://things-i-like.netlify.com/images/tree_panda.png",
//     "sourceURL": "https://www.worldwildlife.org/magazine/issues/spring-2017/articles/wild-pandas-get-a-boost--2"
//   },
//   {
//     "title": "Sacred Warrior, by Adrian Smith",
//     "imageURL": "https://things-i-like.netlify.com/images/rising_sun.png",
//     "sourceURL": "https://www.artstation.com/adrian-smith/albums/1298277"
//   }
// ]
//
// DATA
//
// Home
// On the home page, your category list should render the title of each category and link using the key.
// For examples "Panda Bears" should link to /pandas
// Basketball
// Music
//
// App
// CategoryList
// PhotoList
//  Render each photo in the given category on the photo list page with a thumbnail sized version of your photos.
// PhotoDetail
//  Render a large version of the photo on the photo details page.
// AlGORITHM
//
//

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Welcome to my SPA</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Go Home</Link>
              </li>
              <li>
                <Link to="/1">Page 1</Link>
              </li>
              <li>
                <Link to="/2">Page 2</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route exact path="/1">
            Page 1
          </Route>
          <Route exact path="/2">
            Page 2
          </Route>
          <Route path="*">Not Found</Route>
        </Switch>
      </>
    )
  }
}

export default App
