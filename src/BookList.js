import React from 'react'

class BookList extends React.Component{


    render(){

        const shelves = [
            {
                title: 'Currently Reading',
                slug: 'currentlyReading'
            },
            {
                title: 'Want to Read',
                slug: 'wantToRead'
            },

            {
                title: 'Read',
                slug: 'Read'
            }];

        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>

                {shelves.map((shelf) => (
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{shelf.title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">

                            </ol>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default BookList

