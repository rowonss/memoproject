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