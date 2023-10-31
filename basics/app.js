const http = require('http');

const express = require('express');
const { send } = require('process');

const app = express();

app.use((req, res, next)=>{
    console.log('first'),
    next();
})

app.use((req, res, next)=>{
    console.log('second'),
    next();
})



app.use('/users',(req, res, next)=>{
    res.send('users')
})

app.use('/',(req, res, next)=>{
    res.send('hello')
})

const server = http.createServer(app);


server.listen(3000)