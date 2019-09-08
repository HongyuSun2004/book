const experss = require('express');
const router = experss.Router();
const mysql = require('mysql');

const BOOK_SQL = "select * from book_market where role = 'WISH' limit 10";

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
                book_wished:result
            })
        }
    });
});

router.get('/:id', (req,res) => {
    let sql = `select * from book_market where role = 'WISH' and book_id = '${req.params.id}'`;
    connection.query(sql, (err, result) => {
        if(err){
            return res.send(err);
        }else{
            return res.json({
                book_wished:result
            })
        }
    });
})

router.post('/', (req,res) => {
    let sql = `insert into book_market (book_id, user_id, role) values (${req.body.book_id}, ${req.body.user_id},'WISH')`
    
    connection.query(sql, (err, result) => {
        if(err){
            return res.send(err);
        }else{
            return res.json({
                book_wished:result
            })
        }
    });
})

module.exports = router;