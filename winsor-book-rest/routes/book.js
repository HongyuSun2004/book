const experss = require('express');
const router = experss.Router();
const cores = require('cors');
const mysql = require('mysql');

const BOOK_SQL = "select * from book limit 1";

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
                book:result[0]
            })
        }
    });
});

router.get('/:id', (req,res) => {
    let sql = `select * from book where id = '${req.params.id}'`;
    connection.query(sql, (err, result) => {
        if(err){
            return res.send(err);
        }else{
            return res.json({
                book:result[0]
            })
        }
    });
})

module.exports = router;