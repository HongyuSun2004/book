import React, {useEffect, useState} from 'react';
import { Form, Button } from 'react-bootstrap';

const handleSubmit = event => {
    const form = event.currentTarget;
    console.log(event);
  };

const AddBook4Sell = ({match}) => {
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Book Condition:</Form.Label>
                    <Form.Control as="select">
                        <option>Good</option>
                        <option>Like New</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="text" placeholder="$50" />
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