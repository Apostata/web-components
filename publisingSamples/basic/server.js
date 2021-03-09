const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
});


app.use(express.static(path.join(__dirname, '')));

app.listen(8081, function(){
    console.log('server rodando na porta 8081');
});