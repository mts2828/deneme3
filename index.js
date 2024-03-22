import express from "express";
import mysql from "mysql2";
const app = express();

const db = mysql.createConnection({
    host     : 'sql100.epizy.com',
    user     : 'epiz_33002902',
    password : 'jCd3BpNAfyE',
    database : 'epiz_33002902_dbproje'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

// Select Data
app.get('/getData', (req, res) => {
    let sql = "INSERT INTO `dbproject`.`tblUser`(`Name`,`NickName`,`Sifre`,`GizliSoru`) VALUES ('benim denemme','dfdf','fggf','ghghh');";
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(err);
        res.send(results)
    });
});
app.listen(8080)