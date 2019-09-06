const experss = require('express');
const router = experss.Router();
const cores = require('cors');
const mysql = require('mysql');

const books = [
    {"title": "Chemistry: Atoms First", "isbn": "978-1260151800", "image":"https://images-na.ssl-images-amazon.com/images/I/61wxgswmvmL._SX399_BO1,204,203,200_.jpg"},
    {"title": "Give Me Liberty: An American History", "isbn": "978-0393614145", "image":"https://images-na.ssl-images-amazon.com/images/I/613jvaGlOqL._SX387_BO1,204,203,200_.jpg"}
]

const BOOK_SQL = "select * from book limit 20";

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
                books:result
            })
        }
    });
});

router.get('/:subject', (req,res) => {
    let sql = `select * from book where subject = '${req.params.subject}' limit 20`;
    connection.query(sql, (err, result) => {
        if(err){
            return res.send(err);
        }else{
            return res.json({
                books:result
            })
        }
    });
})

module.exports = router;