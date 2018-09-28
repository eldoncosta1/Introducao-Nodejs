const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(expressValidator());
consign()           
    .include('utils')
    .include('routes').into(app);

app.listen(3000, '127.0.0.1', () => {
    console.log('server running..');
    
})