import React from 'react';


class Book extends React.Component{

    state = {
        book : {}
    };

    onChange(book, shelf){
        book.shelf = shelf;
        this.props.onBookUpdate(book, shelf);
    }

    componentWillMount(){
        this.setState({book: this.props.book});
    }

    render(){

        const {shelves} = this.props;
        const {book} = this.state;

        return(
            <li>
                <div className="book">
                    <div className="book-top" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}>

                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={(e) => this.onChange(this.state.book, e.target.value)}>
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
                        {book.authors.pop()}
                    </div>
                </div>
            </li>
        )
    }

}

export default Book;