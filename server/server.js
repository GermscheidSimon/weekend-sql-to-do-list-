const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const router = require('./routes/router.js');

app.use( bodyParser.urlencoded({ extended: true }));

app.use(express.static('server/public'));

app.use('/', router);

app.listen(PORT, ()=>{
    console.log('up and running', PORT);
});