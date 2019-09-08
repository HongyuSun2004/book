import React, {useState} from 'react';
import { Button, Alert } from 'react-bootstrap';
import style from './addbookforsell.module.css';

const AddBookWished = ({book_id}) => {
    const [submited, setSubmited] = useState(false);

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

export default AddBookWished;