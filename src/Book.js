import React from 'react';


class Book extends React.Component{

    render(){

        const {book, shelves} = this.props;

        return(
            <li>
                <div className="book">
                    <div className="book-top" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}>

                        <div className="book-shelf-changer">
                            <select>
                                <option value="none" disabled>Move to...</option>
                                {shelves.map((shelf) => (
                                    <option value={shelf.slug} selected={book.shelf === shelf.slug && ("selected")}>
                                        {shelf.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="book-title">
                        {book.title}
                    </div>
                    <div className="book-authors">
                        {book.authors.pop()}
                    </div>
                </div>
            </li>
        )
    }

}

export default Book;