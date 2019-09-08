import React, {useEffect, useState} from 'react';

import SellerList from './SellerList';
import AddBookForSale from './AddBookForSale';
import AddBookWished from './AddBookWished';
import book_config from '../Book_Config';

import style from './bookonmarket.module.css';

const BookOnMarket = ({match}) => {
    const [book, setBook] = useState([]);

    const getBook = async () => {
        const request = `${book_config.ws_host}/book/${match.params.id}`;
        const response = await fetch(request);
        const data = await response.json();
        setBook(data.book);
    }

    useEffect(() => {
        getBook();
    }, []);

    return (
        <div className={style.bookmarket}>
            <h3 className={style.booktitle}>{book.title}</h3>
            <p>ISBN-13: {book.isbn}</p>
            <img className={style.image} src={book.image_url} alt=""></img>
            
            { match.params.id != 2 ? <SellerList book_id={match.params.id}></SellerList> : null }

            <AddBookForSale book_id={match.params.id}></AddBookForSale>

            { match.params.id == 2 ? <AddBookWished book_id={match.params.id}></AddBookWished> : null }
            
        </div>
    );
}

export default BookOnMarket;