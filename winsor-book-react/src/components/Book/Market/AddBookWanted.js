import React, {useEffect, useState} from 'react';
import { Button, Alert } from 'react-bootstrap';
import style from './addbook4sell.module.css';

const AddBookWanted = ({book_id}) => {
    const [submited, setSubmited] = useState(false);
    
    const handleSubmit = event => {
        event.preventDefault();
    
        fetch('http://192.168.1.13:5000/book2buy/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                book_id: book_id,
                user_id: 1
            })
        });
        setSubmited(true);
    };

    const handleClick = () => setSubmited(true);

    return (
        <div>
            <Button className={style.addbook} variant="primary" onClick={handleClick}>
                    Add this book to my wishlist
            </Button>
            { submited ? <Alert variant="info">This book was added to your list!</Alert> : null }
        </div>
    );
}

export default AddBookWanted;