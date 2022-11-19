const express = require('express')
const app = express()
const port = 3306 // <- 3000에서 다른 숫자로 변경
const db = require('./config/db')

app.get('/', (req, res) => {
    console.log('hello')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})