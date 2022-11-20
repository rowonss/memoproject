const express = require('express')
const app = express()
const port = 4000 // <- 3000에서 다른 숫자로 변경
const db = require('./config/db')
const {param} = require("express/lib/router");

app.get('/', (req, res) => {
    console.log('hello')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/InsertMemo',(req,res) =>{
    let post_title = req.body.params.post_title;
    let post_content = req.body.params.post_content;

    const sql = "insert into memo values (default, post_title, post_content, default)"

    db.query(sql,values,(err,result) => {
        if (err)
            console.log(err);
        else
            res.send(result);
    })
})

app.get('/MEMO',(req,res) => {
    db.query("select * from memo", (err,data) => {
        if(!err){
            res.send(data)
            console.log(data)
        }
        else{
            console.log("에러야")
            console.log(err)
        }
    })
})