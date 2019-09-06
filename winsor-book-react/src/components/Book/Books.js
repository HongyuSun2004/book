import React from 'react';

const Books = ({match}) => {
    return (
        <div>books page {match.params.subject}</div>
    );
}

export default Books;