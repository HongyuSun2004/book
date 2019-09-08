const experss = require('express');
const router = experss.Router();
const mysql = require('mysql');

const BOOK_SQL = "select * from book_market where role = 'SELL' limit 10";

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'emma',
    password: 'Winsor123',
    database: 'book'
});

connection.connect(err=>{
    if(err){
        return err;
    }
});
     
router.get('/', (req,res) => {
    connection.query(BOOK_SQL, (err, result) => {
        if(err){
            return res.send(err);
        }else{
            return res.json({
                book4sell:result
            })
        }
    });
});

router.get('/:id', (req,res) => {
    let sql = `select * from book_market where role = 'SELL' and book_id = '${req.params.id}'`;
    connection.query(sql, (err, result) => {
        if(err){
            return res.send(err);
        }else{
            return res.json({
                book4sell:result
            })
        }
    });
})

router.post('/', (req,res) => {
    let values = req.body.price.split("$")
    let price = 0;
    if(values.length > 1){
        price = parseFloat(values[1]);
    }else{
        price = parseFloat(values[0]);
    }

    let sql = `insert into book_market (book_id, user_id, price, book_condition) values (${req.body.book_id}, ${req.body.user_id},${price},'${req.body.book_condition}')`
    connection.query(sql, (err, result) => {
        if(err){
            return res.send(err);
        }else{
            return res.json({
                book4sell:result
            })
        }
    });
})

module.exports = router;