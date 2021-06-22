"use strict";
const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');


const cart = require('./controller/cart');


// port has been Set up for server to listen on
const port = process.env.PORT || 9999;
// express used to create a http server
const app = express();

// bodyparser
app.use(bodyParser.json({ limit: '5mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
//CORS
app.use(cors());
app.options('*', cors());
//routes
app.get('/', (req, res) => {
    res.json('iam working !!!!!!');
});


app.post('/api/cart',  cart.create);
app.get('/api/cart/:id', cart.getOne);

//Message displayed to know if the port is running or not
app.listen(port, () => console.log('working on port ' + port));