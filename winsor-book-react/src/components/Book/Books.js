import React from 'react';

const Books = ({match}) => {
    return (
        <div>
            <p>books page {match.params.subject}</p>
            <p><a href='/book/1'>book 1</a></p>
            <p><a href='/book/2'>book 2</a></p>
        </div>
    );
}

export default Books;