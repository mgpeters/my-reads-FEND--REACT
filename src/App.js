import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './comp/SearchBooks'
import ListBooks from './comp/ListBooks'

class BooksApp extends React.Component {
  state = {
    bookList: [],
    showSearchPage: false
  }

  componentDidMount(){ //based off Udacity 'Render UI with External Data' course
    BooksAPI.getAll().then((books) => {
      this.setState({ bookList: books })
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks

          />
        ) : (
          <ListBooks
          bookList={ this.state.bookList }
          />
        )}
      </div>
    )
  }
}

export default BooksApp
