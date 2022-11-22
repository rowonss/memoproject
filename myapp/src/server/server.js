const express = require('express')
const app = express()
const port = 4000 // <- 3000에서 다른 숫자로 변경
const db = require('./config/db')

app.get('/', (req, res) => {
    console.log('hello')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/Insert', (req, res) => {
    let post_title = req.query.post_title;
    let post_content = req.query.post_content;
    let values = [post_title,post_content];

    const sql = "insert into memo (num,title,text,date) values (default,?,?,default)"

    console.log(post_title)

    db.query(sql, values, (err, result) => {
        if (err)
            console.log(err);
        else {
            console.log("됐냐?")
            res.send(result);
        }
    })
})

app.get('/MEMO', (req, res) => {

    db.query("select * from memo order by num DESC ", (err, data) => {
        if (!err) {
            res.send(data)
            console.log(data)
        } else {
            console.log("에러야")
            console.log(err)
        }
    })
})

app.get('/GetMemo',(req, res)=>{
    let memonum = req.query.get_num;
    let values = memonum["num"];

    const sql = "select * from memo where num ="+values;

    db.query(sql,(err,data) => {
        if (!err) {
            res.send(data)
            console.log(data)
        } else {
            console.log("에러야")
            console.log(err)
        }
    })
})

app.delete('/DeleteMemo',(req,res)=>{
    let memonum = req.query.del_num;
    let values = memonum["num"];

    const sql = "delete from memo where num="+values;

    db.query(sql,(err,data)=>{
        if (!err) {
            res.send(data)
            console.log(data)
        } else {
            console.log("에러야")
            console.log(err)
        }
    })


})