import React, {useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';

const SellerList = ({book_id}) => {    
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Seller</th>
                    <th>Book Condition</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Emma</td>
                        <td>New</td>
                        <td>$50</td>
                    </tr>
                    <tr>
                        <td>Ella</td>
                        <td>Good</td>
                        <td>$45</td>
                    </tr>
                    <tr>
                        <td>Sofia</td>
                        <td>Used</td>
                        <td>$25</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default SellerList;