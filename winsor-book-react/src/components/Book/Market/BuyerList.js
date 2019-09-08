import React, {useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';

const BuyerList = ({book_id}) => {    
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Buyer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Elizabeth</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Savannah</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Gabriella</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default BuyerList;