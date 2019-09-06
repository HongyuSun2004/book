const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const booksRoute = require('./routes/books');
const bookRoute = require('./routes/book');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/books', booksRoute);
app.use('/book', bookRoute);

app.get('/', (req,res) => {
    res.send('Hello')
})

app.listen(5000, ()=>{
    console.log('Listening port 5000')
});