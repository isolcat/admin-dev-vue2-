const express = require('express')
const router = require('./router')
const app = express()

app.use('/', router)
const server = app.listen(5000, function() {
    const { address, port } = server.address()
    console.log('http启动成功：http://%s:%s', address, port)
})