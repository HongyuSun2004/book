import React, {useEffect, useState} from 'react';

import SellerList from './SellerList';
import AddBookForSell from './AddBookForSell';
import AddBookWished from './AddBookWished';

import style from './bookonmarket.module.css';

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
        <div className={style.bookmarket}>
            <h3 className={style.booktitle}>{book.title}</h3>
            <p>ISBN-13: {book.isbn}</p>
            <img className={style.image} src={book.image_url} alt=""></img>
            
            { match.params.id != 2 ? <SellerList book_id={match.params.id}></SellerList> : null }

            <AddBookForSell book_id={match.params.id}></AddBookForSell>

            { match.params.id == 2 ? <AddBookWished book_id={match.params.id}></AddBookWished> : null }
            
        </div>
    );
}

export default BookOnMarket;