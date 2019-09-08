import React, {useEffect, useState} from 'react';
import Book from './Book';
import book_config from '../Book_Config';

const BookList = ({match}) => {
    const [books, setBooks] = useState([]);
    
    const getBooks = async () => {
        const request = `${book_config.ws_host}/books/${match.params.subject}`;
        const response = await fetch(request);
        const data = await response.json();
        setBooks(data.books);
    }

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div>
            {books.map(book => (
                <a href={'/book/' + book.id}>
                    <Book 
                        key={book.id}
                        title={book.title}
                        isbn={book.isbn}
                        image={book.image_url}>
                    </Book>
                </a>
            ))}
        </div>
    );
}

export default BookList;