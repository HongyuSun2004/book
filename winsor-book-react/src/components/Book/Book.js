import React from 'react';
import style from './book.module.css';

const Book = ({title, isbn, image}) => {
    return (
        <div className={style.book}>
            <h1>{title}</h1>
            <p>ISBN-13: {isbn}</p>
            <img className={style.image} src={image} alt=""></img>
        </div>
    );
}

export default Book;