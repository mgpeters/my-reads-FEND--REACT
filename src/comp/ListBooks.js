import React, { Component } from 'react'
import BookShelf from './BookShelf'
import SearchOpen from './SearchOpen'

class ListBooks extends Component {

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                    <BookShelf/>
                    <SearchOpen/>
            </div>
        )
    }
}

export default ListBooks