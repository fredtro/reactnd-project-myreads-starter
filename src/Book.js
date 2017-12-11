import React from 'react';
import shelves from './util/Shelves';

/**
 * single book view, to display a book with controls to move to shelf
 */
class Book extends React.Component{

    state = {
        book : {}
    };

    /**
     * @param book
     * @param shelf
     */
    onChange(book, shelf){
        book.shelf = shelf;
        this.props.onBookUpdate(book, shelf);
    }

    componentWillMount(){
        this.setState({book: this.props.book});
    }

    render(){
        const {book} = this.state;

        return(
            <div className="book">
                <div className="book-top" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                }}>

                    <div className="book-shelf-changer">
                        <select value={book.shelf ? book.shelf : 'none' } onChange={(e) => this.onChange(this.state.book, e.target.value)}>
                            <option disabled>Move to...</option>
                            {shelves.map((shelf) => (
                                <option key={shelf.slug} value={shelf.slug}>
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
                    {book.authors &&(
                        book.authors.pop()
                    )}
                </div>
            </div>
        )
    }

}

export default Book;