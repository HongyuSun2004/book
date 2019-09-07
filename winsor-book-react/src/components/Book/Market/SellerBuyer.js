import React, {useEffect, useState} from 'react';
import { Nav } from 'react-bootstrap';

const SellerBuyer = ({match}) => {
    return (
        <div>
            <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Seller</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Buyer</Nav.Link>
            </Nav.Item>
            </Nav>
        </div>
    );
}

export default SellerBuyer;