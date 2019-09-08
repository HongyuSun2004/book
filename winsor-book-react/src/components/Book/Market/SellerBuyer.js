import React, {useEffect, useState} from 'react';
import AddBook4Sell from './AddBook4Sell';
import AddBookWanted from './AddBookWanted';
import SellerList from './SellerList';
import BuyerList from './BuyerList';
import { Tabs, Tab, Button } from 'react-bootstrap';

const SellerBuyer = ({book_id}) => {
    const [key, setKey] = useState('seller');
    return (
        <div>
            <Tabs id="market-tab" activeKey={key} onSelect={k => setKey(k)}>
                <Tab eventKey="seller" title="Seller">
                    <SellerList></SellerList>
                    <AddBook4Sell book_id={book_id}></AddBook4Sell>
                </Tab>
                <Tab eventKey="buyer" title="Buyer">
                    <BuyerList></BuyerList>
                    <AddBookWanted book_id={book_id}></AddBookWanted>
                </Tab>
            </Tabs>
        </div>
    );
}

export default SellerBuyer;