import React, {useEffect, useState} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import style from './addbook4sell.module.css';

const AddBook4Sell = ({book_id}) => {
    const [bookCondition, setBookCondition] = useState('Good');
    const [price, setPrice] = useState('$50');
    const [submited, setSubmited] = useState(false);

    const bookConditionChangeHandler = e => {
        setBookCondition(e.target.value);
    }

    const priceChangeHandler = e => {
        setPrice(e.target.value);
    }
    
    const handleSubmit = event => {
        event.preventDefault();
    
        fetch('http://192.168.1.13:5000/book4sell/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                book_id: book_id,
                user_id: 1,
                price: price,
                book_condition: bookCondition
            })
        });
        setSubmited(true);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="bookCondition">
                    <Form.Label>Book Condition:</Form.Label>
                    <Form.Control as="select" value={bookCondition} onChange={bookConditionChangeHandler}>
                        <option>New</option>
                        <option>Good</option>
                        <option>Lightly Used</option>
                        <option>Used</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="price">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="text" placeholder="$50" value={price} onChange={priceChangeHandler}/>
                </Form.Group>

                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Donate to Winsor School" />
                </Form.Group>

                <Button  className={style.addbook} variant="primary" type="submit">
                    Add my book for sale
                </Button>               
            </Form>
            { submited ? <Alert variant="info">Your book is ready for sale!</Alert> : null }
        </div>
    );
}

export default AddBook4Sell;