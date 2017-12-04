import React from 'react';


class Book extends React.Component{

    render(){

        const {book} = this.props;

        return(
            <li>
                <div className="book">
                    <div className="book-top" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}>

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