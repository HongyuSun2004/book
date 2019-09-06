import React, {useEffect, useState} from 'react';
import Book from './Book';

const BookOnMarket = ({match}) => {
    const [book, setBook] = useState([]);

    const getBook = async () => {
        const request = `http://192.168.1.13:5000/book/${match.params.id}`;
        const response = await fetch(request);
        const data = await response.json();
        setBook(data.book);
    }

    useEffect(() => {
        getBook();
    }, []);

    return (
        <div>
            <Book 
                key={book.id}
                title={book.title}
                isbn={book.isbn}
                image={book.image_url}>
            </Book>
            buy
        </div>
    );
}

export default BookOnMarket;