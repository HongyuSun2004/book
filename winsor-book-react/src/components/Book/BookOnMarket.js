import React from 'react';

const BookOnMarket = ({match}) => {
    return (
        <div>
            <p>book on market {match.params.id}</p>
        </div>
    );
}

export default BookOnMarket;