import React, {useEffect, useState} from 'react';
import { Form, Button } from 'react-bootstrap';

const AddBook4Sell = ({match}) => {
    const [bookCondition, setBookCondition] = useState('Good');
    const [price, setPrice] = useState('$50');

    const changeHandler = e => {
        console.log(e.target.id);
        console.log(e.target.value);
        console.log(e.target);
        //this.setState({ [e.target.name]: e.target.value })
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    
        fetch('http://192.168.1.13:5000/book4sell/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                book_id: 2,
                user_id: 1,
                price: '$100',
                book_condition: 'Good'
            })
        });
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Book Condition:</Form.Label>
                    <Form.Control as="select" >
                        <option>Good</option>
                        <option>Like New</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="price">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="text" placeholder="$50" value={price} onChange={changeHandler}/>
                </Form.Group>

                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Donate to Winsor School" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add my book 4 sell
                </Button>
            </Form>
        </div>
    );
}

export default AddBook4Sell;