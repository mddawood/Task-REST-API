const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const addRoutes = require('./routes/add');

app.use(addRoutes);

//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to TASK REST API');
});


//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to DB')
);

//listening to server
app.listen(3000);