const express = require('express')
const app = express()

const post = require('./post')

const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    max: 5,
    windowMs: 24 * 60 * 60 * 1000
})

app.get('/post', limiter ,(req, res) => {
    res.send({
        ip: req.ip,
        status: "success",
        posts: post
    })
})



app.listen(5000, () => console.log('Listeinig at port 5000'))