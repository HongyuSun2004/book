const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const booksRoute = require('./routes/books');
const bookRoute = require('./routes/book');
const bookForSaleRoute = require('./routes/book_for_sale');
const bookWishedRoute = require('./routes/book_wished');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/books', booksRoute);
app.use('/book', bookRoute);
app.use('/book_for_sale', bookForSaleRoute);
app.use('/book_wished', bookWishedRoute);

app.get('/', (req,res) => {
    res.send('Hello')
})

app.listen(5000, ()=>{
    console.log('Listening port 5000')
});