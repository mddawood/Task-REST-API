const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

//Import Routes
const listRoutes = require('./routes/list');

app.use('/list', listRoutes);

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